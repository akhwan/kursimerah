function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
    
var links = document.querySelector('.scroll');

links.addEventListener('click', function(){
    smoothScroll('#service',2700);
});

//end of SmoothScroll

//Auto hide navbar
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos) {
        document.getElementById('navbar').style.display = "flex";
    } else {
        document.getElementById('navbar').style.display = "none";
    }

    prevScrollpos = currentScrollpos;

}

//select service
function selectService(indexImage) {
    var imagePath = 'img/' + indexImage + '.jpg';
    
    var caption = document.querySelector('.service-detail-text');
    var textCaption = ['we create software & website with lattest trend',
                   'we help you to build your networking system',
                   'we transform your business to design graphic with lattest trend'];
    
                   caption.innerHTML = textCaption[indexImage];  
                   document.getElementById('image-preview').src = imagePath;
                   return false;
}
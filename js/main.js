// var main_logo_of_banner = document.getElementsByClassName('main-top-logo-banner')




window.addEventListener('resize', function(){
    myFunction();
})
function myFunction() {
    if (window.innerWidth < 860) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3.5,
            spaceBetween: 30,
        });

    } else{
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5.5,
            spaceBetween: 30,
        });
    }

}



window.onload = myFunction
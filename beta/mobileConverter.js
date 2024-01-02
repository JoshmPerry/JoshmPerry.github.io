document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
if(is.mobile()){
    $('.fullscreen').addClass('fullscreenPhone');
    $('.fullscreenPhone').removeClass('fullscreen');
    $('.slide').addClass('slidePhone');
    $('#topSlides').addClass('slideShowPhone');
    $('#bottomSlides').css("animation","scrollBottomPhone 7.5s linear infinite");
}
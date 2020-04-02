var menuButton = document.querySelector('.menu__button');
var menu = document.querySelector('.menu');

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('menu__button-active');
  menu.classList.toggle('menu-active');

});

new WOW().init();

var player;

$('.video__icon').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'pLPX8jiY0Pk',
    events: {
      'onReady': videoPlay,
    }
  });
})
  
function videoPlay(event) {
  event.target.playVideo();
}


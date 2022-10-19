lightGallery(document.getElementById("animated-thumbnails"), {
  selector: ".lightimg",
  plugins: [lgZoom, lgThumbnail, lgAutoplay, lgFullscreen, lgShare],
  alignThumbnails: "left",
  loop: true,
  allowMediaOverlap: true,
  toggleThumb: true,
  showZoomInOutIcons: true,
  actualSize: false,
  exThumbImage: "data-exthumbimage",
});

$(".counter").counterUp({
  delay: 10,
  time: 3000,
});

new WOW().init();

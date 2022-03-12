const images = [
  "./image/baobab-tree-at-sunset--african-landscape--calm--relaxing--tr.jpg",
  "./image/images.jpg",
  "./image/photo-1453728013993-6d66e9c9123a.jpg",
  "./image/wooden-jetty-at-sunset--dreamy-looks.jpg",
];
const slider = document.getElementById("slider");
let imageIndex = 0;
setInterval(() => {
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }

  slider.setAttribute("src", images[imageIndex]);
  imageIndex++;
}, 1000);

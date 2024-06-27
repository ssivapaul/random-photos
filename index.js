const imageContainerEL = document.querySelector(".image-container");
const btnEL = document.querySelector(".btn");
btnEL.addEventListener("click", () => {
  //console.log("Button clicked!");
  imageNum = 10;
  addNewImages();
});

function addNewImages() {
  for (let i = 0; i < imageNum; i++) {
    const newImgEL = document.createElement("img");
    newImgEL.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEL.appendChild(newImgEL);
  }
}

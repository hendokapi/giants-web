const choosenPicture = document.querySelector("#select-picture");
const canvas = document.querySelector("#meme");
const textTop = document.querySelector("#text-top");
const textBottom = document.querySelector("#text-bottom");

let picture;

choosenPicture.addEventListener("change", function (e) {
  const pictureUrl = URL.createObjectURL(e.target.files[0]);
  picture = new Image();
  picture.src = pictureUrl;
  picture.addEventListener("load", function () {
    console.log("Caricamento immagine...");
  });
});

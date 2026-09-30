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
    updateMeme(canvas, picture, "", "");
  });
});

textTop.addEventListener("change", function () {
  updateMeme(canvas, picture, textTop.value, textBottom.value);
});

textBottom.addEventListener("change", function () {
  updateMeme(canvas, picture, textTop.value, textBottom.value);
});

function updateMeme(canvas, picture, textTop, textBottom) {
  // impostiamo il contesto di rendering del canvas, nel nostro caso sarà 2D
  const ctx = canvas.getContext("2d");
  // impostiamo larghezza e altezza del canvas in base alle dimensioni dell'immagine

  // il caricamento di immagini piccole risulterà in bassa qualità
  const canvasWidth = picture.width;
  const canvasHeight = picture.height;
  // la dimensione del font dipenderà dalla larghezza dell'immagine; se vuoi cambiarla puoi modificare il valore qui
  // Math.floor arrotonda all'intero inferiore

  const fontSize = Math.floor(canvasWidth / 20);
  // la distanza delle didascalie dai bordi superiore e inferiore dell'immagine: più il valore è piccolo, più le didascalie saranno vicine al centro
  const offsetY = canvasHeight / 25;

  // impostiamo larghezza e altezza del nostro canvas alle dimensioni dell'immagine
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  // questo metodo disegna l'immagine nel canvas; le coordinate 0,0 indicano dove iniziare a disegnare: l'angolo in alto a sinistra del canvas
  ctx.drawImage(picture, 0, 0);

  // colore dei bordi delle lettere
  ctx.strokeStyle = "black";
  // spessore del bordo delle lettere
  ctx.lineWidth = Math.floor(fontSize / 4);
  // colore del riempimento delle lettere
  ctx.fillStyle = "white";
  // centratura del testo
  ctx.textAlign = "center";
  // arrotondamento del bordo
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px Summer`;

  // impostazione del testo superiore
  // impostiamo la linea di base da cui iniziare a disegnare il testo
  ctx.textBaseline = "top";
  // disegniamo il testo senza riempimento
  ctx.strokeText(textTop, canvasWidth / 2, offsetY);
  // aggiungiamo il riempimento
  ctx.fillText(textTop, canvasWidth / 2, offsetY);

  // prepariamo il testo inferiore
  ctx.textBaseline = "bottom";
  ctx.strokeText(textBottom, canvasWidth / 2, canvasHeight - offsetY);
  ctx.fillText(textBottom, canvasWidth / 2, canvasHeight - offsetY);
}

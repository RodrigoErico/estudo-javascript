const paragraphs = document.querySelector(".paragrafos");
const ps = paragraphs.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;
console.log(backgroundBody);

for (let p of ps) {
  p.style.backgroundColor = backgroundBody;
  p.style.color = '#fff'
}

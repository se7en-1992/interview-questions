let c = 1e4;

function addDom() {
  c-=100;
  const parent = document.createDocumentFragment();

  for(let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = '123';
    parent.appendChild(div);
  }
  document.body.appendChild(parent);
  if (c > 0) {
   requestAnimationFrame(addDom)
  }
}

addDom()
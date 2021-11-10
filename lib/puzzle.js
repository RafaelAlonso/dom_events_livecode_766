// 1. qual elemento vai sofrer interacao do user
// 2. qual a interacao que o user fara
// 3. o que acontece quando user interagir com elemento
// 4. juntar todos os anteriores com a receita: 1.addEventListener(2, 3)

// quando clicar no botao, adicionar a class .active no elemento com class .hint
const elemento = document.querySelector('#show-hint');
const inter = 'click';
const action = () => {
  const hint = document.querySelector('.hint');
  hint.classList.add('active');
};
elemento.addEventListener(inter, action);


// ============================================================================================

// quando der um clique, o quadrado que eu cliquei deve trocar de lugar com o vazio
// - alguma coisa relacionada a posição do vazio para fazer a troca
// checar se ordenacao esta correta
//  - se estiver, fala yaaay
//  - se não, nada acontece
const tds = document.querySelectorAll("td");


const actionEmpty = (event) => {
  const empty = document.querySelector(".empty");
  const td = event.currentTarget;

  // logica de verificar adjacencia
  const emptyCol = empty.cellIndex;
  const emptyRow = empty.parentElement.rowIndex;

  const tdCol = td.cellIndex;
  const tdRow = td.parentElement.rowIndex;

  // adjacencia horizontal => mesma linha, uma coluna de distancia
  const horizontal = emptyRow === tdRow && (tdCol === emptyCol + 1 || tdCol === emptyCol - 1);

  // adjacencia vertical => mesma coluna, uma linha de distancia
  const vertical = emptyCol === tdCol && (tdRow === emptyRow + 1 || tdRow === emptyRow - 1);

  if (horizontal || vertical){
    // logica de movimento
    empty.classList.remove("empty");
    empty.innerText = td.innerText;
    td.classList.add("empty");
    td.innerText = " ";

    // logica de vitoria
    const ordemAtual = []
    tds.forEach((t) => { ordemAtual.push(t.innerText) });
    if (ordemAtual.join() == '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,') {
      alert('yaaay');
    }
  }
};

tds.forEach((t) => {t.addEventListener(inter, actionEmpty)});

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container');
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("message p");
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionar o evento de click aos boxes
for (let i = 0; i < boxes.length; i++){
    // quando alguem clica na caixa
    boxes[i].addEventListener('click', function () {
        let el = checkEl(player1, player2)
       
        // verifica se tem x ou o
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            // computar jogada
            if (player1 == player2) {
              player1++;
            } else {
              player2++;
            }
        }
    });
}

// verifica de quem é a vez
function checkEl(player1, player2) {
     if (player1 == player2) {
       // x
       el = x;
     } else {
       // o
       el = o;
    }
    
    return el;
}
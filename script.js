 const botoes = document.querySelector("button"); 
        
        botoes.forEach(function(botao) {
            let curtiu = false;
            botao.addEventListener("click", botaoClicado);
        function botaoClicado() {
            console.log("fui clicado");
            let texto = botao.querySelector("span");
            if(curtiu === false) {

            }
            texto.textContent++;
        })
        }
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

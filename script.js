// criar uma variável para receber a url inicial, como ela irá mudar, devemos usar let
let paginaAtualUrl = 'https://swapi.dev/api/planets/'

/* Onload: Sempre que a página for carregada ou recarregada, será executada uma função
   que irá fazer a requisição para a api onde irá carregar os cards

   Try e Catch | Tente e Pegar
   No Try, se tiver sucesso, irá executar o que tiver dentro do bloco, caso contrário,
   irá pegar o comando que está dentro do bloco Catch 

   Async e Await | Assíncrono e Aguardar
   Assíncrono é quando não ocorre ao mesmo tempo que outro
   A função carregandoPlanetas é uma requisição para api retornar com os planetas,
   ela não acontece ao mesmo tempo que onload, pois aguarda uma resposta, por isso
   colocamos async após onload e await em carregandoPlanetas */

// Leia: Quando carregar a página, aguarde carregar a url inicial

window.onload = async () => {
    try{
        await carregandoPlanetas(paginaAtualUrl);
    } catch (error) {
        console.log(error);
        alert('XXXXXXXXXXXXXXX');
    }
};

// Criando o corpo da função carregandoPlanetas()

/* - a função espera receber uma url, em seguida vamos limpar a página de conteúdos acessados anteriormente
   - armazenar o retorno da api em uma variável
   - converter a resposta em Json
   - fazer um forEach em cada planeta
   - criar os cards, dar classes para os elementos e estilizar
   - usar template string nos dados que deverão ser dinâmicos
   - organizar as div's umas dentro da outra
   - apagar os cards no html e testar o javascript
*/

async function carregandoPlanetas(url){
const mainContent = document.getElementsByClassName("main-content")
mainContent.innerHtml = "";

try{
    const resposta = await fetch(url);
    const respostaJson = await resposta.json();

    respostaJson.results.forEach((character) => {
        const card = document.createElement("div")
        card.style.backgroundImage = url('https://starwars-visualguide.com/#/planets/13')
        card.className = "card"

        const cardTextContainer = document.createElement("div")
        cardTextContainer.className = "card-text-container"

        const cardText = document.createElement("span")
        cardText.id = "card-text"
        cardText.innerText = `${planets.name}`

        cardTextContainer.appendChild(cardText)
        card.appendChild(cardTextContainer)
        mainContent.appendChild(card)

    });

    carregandoPlanetas = url

}catch(error){
    alert('Erro ao carregar cards');
    console.log(error);
}
}






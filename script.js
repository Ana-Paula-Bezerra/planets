// criar uma variável para receber a url inicial, como ela irá mudar, devemos usar let
let paginaAtualUrl = 'http swapi.dev/api/planets/';

/* Onload: Sempre que a página for carregada ou recarregada, será executada uma função
que irá fazer a requisição para a api onde irá carregar os cards */

/* Try e Catch | Tente e Pegar
No Try, se tiver sucesso, irá executar o que tiver dentro do bloco, caso contrário,
irá pegar o comando que está dentro do bloco Catch */

/* Async e Await | Assíncrono e Aguardar
Assíncrono é quando não ocorre ao mesmo tempo que outro
A função carregandoPersonagens é uma requisição para api retornar com os personagens,
ela não acontece ao mesmo tempo que onload, pois aguarda uma resposta, por isso
colocamos async em onload e await em carregandoPersonagens

*/

window.onload = async () => {
    try{
        await carregandoPersonagens(paginaAtualUrl);
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar cards')
    }
};

// Criando o corpo da função carregandoPersonagens()





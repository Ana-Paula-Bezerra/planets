// criar uma variável para receber a url inicial
let currentPageUrl = 'http swapi.dev/api/planets/';

fetch('http swapi.dev/api/planets/',{mode:'cors'})
{
    console.log(currentPageUrl);
}
/*
//criar função que irá executar qdo a página for carregada pela primeira vez ou recarregada
window.onload = async () => {

    // sempre que a função window.onload for executada, receberá uma url
    // na primeira vez receberá a url principal, depois receberá outras
    try{
        await loadPlanets(currentPageUrl); 

    }catch(error){
        //alert('Erro ao carregar planetas');
        console.log(error);
    }

    // criar uma variável para atribuir a div que iremos interagir
    // usar o innerHTML para alterar o html dessa div
    async function loadPlanets(url){
        const mainContent = document.getElementsByClassName('main-content');
        mainContent.innerHTML = '';
    }

    // criar uma variável que irá armazenar a resposta de uma requisição
    // criar outra variavel que ira armazenar os dados convertidos para Json
    try{
        const response = await fetch(url);
        responseJson = await response.json();
    }catch{
       // alert('Erro ao carregar planetas');
        console.log(error);
    }


    
}*/







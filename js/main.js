'use strict'

import { getFilmes} from "./filmes.js"

function criarCard(filme){

    const card = document.createElement('div')

    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome

    const capa = document.createElement('img')
    capa.src = filme.foto_capa
    capa.classList.add('p-2')

    const texto = document.createElement('p')
    texto.textContent = filme.sinopse

    card.append(capa)

    return card
}

async function preencherContainer(){

    const container=document.getElementById('lista')
    const filmes = await getFilmes()

    console.log(filmes)

    filmes.forEach (filme=>{
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}



preencherContainer()
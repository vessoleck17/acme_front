'use strict'

import {getFilmeByID} from "./filmes"




const id = localStorage.getItem('idFilme')



async function infoFilme(id){

    const filme = await getFilmeByID(id)
    console.log(filme)

    
    titulo.textContent = filme.nome
    titulo.classList.add('text-4xl', 'text-red-600')


    const capa = document.getElementById('capa')
    capa.src = filme.foto_capa
    capa.classList.add('w-102', 'p-8')

    const sinopse = document.getElementById('sinopse')
    sinopse.textContent = filme.sinopse

    const duracao = document.getElementById('duracao')
    duracao.textContent = `Duração: ${filme.duracao}`

    const dataL = document.getElementById('data_lan')
    dataL.textContent = `Lançamento: ${filme.data_lancamento}`

    const genero = document.getElementById('genero')
    genero.textContent = `Gênero: ${filme.genero}`

    const classificacao = document.getElementById('classificacao')
    classificacao.textContent = `Classificação: ${filme.classificacao}`


    const contents = document.createElementr('div')
    contents.append(sinopse, duracao, dataL, genero, classificacao, atores, direcao)
    const main = document.querySelector('main')
    main.append(capa,contents)





    // const body = document.querySelector('body')
    

    
    
    // const titles=document.createElement('div')
    
    
    
    // const sinopse=document.createElement('p')
    // sinopse.textContent=filme.sinopse
    // sinopse.classList.add('text-white', 'text-sinopse', 'w-sinopsew')
    // const preco=document.createElement('p')
    // preco.textContent=`R$${filme.valor_unitario}`
    // preco.classList.add('text-green-600', 'text-sinopse')
    // const btnAssistir=document.createElement('button')
    // btnAssistir.textContent='Assistir'
    // btnAssistir.classList.add('bg-btncolor', 'rounded-btnr', 'text-white', 'h-btnh', 'w-btnw', 'text-btn')
    // const footer=document.createElement('div')
    // footer.classList.add('flex', 'flex-row', 'gap-divgap')
    // const duracao=document.createElement('p')
    // duracao.textContent=`Duração: ${filme.duracao}`
    // duracao.classList.add('text-white', 'text-sinopse')
    // const lancamento=document.createElement('p')
    // lancamento.textContent=`Lançado em: ${filme.data_lancamento}`
    // lancamento.classList.add('text-white', 'text-sinopse')
    // header.classList.add('flex', 'items-center', 'h-20', 'p-5', 'gap-3', 'bg-black')
    // footer.append(duracao, lancamento)
    // titles.append(titulo, sinopse)
    // header.append(titles,titulo, preco, btnAssistir)
    // contents.append(header, footer)
    // body.append(capa, contents)
}

infoFilme()
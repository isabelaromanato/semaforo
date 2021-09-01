"use strict"

let idVermelho
let idVerde
let idAmarelo


const desligado = document.getElementById("desligado")

const vermelho = () => {
    document.getElementById("semaforo-desligado").src = "img/vermelho.png"
}

const verde = () => {
    document.getElementById("semaforo-desligado").src = "img/verde.png"
}

const amarelo = () => {
    document.getElementById("semaforo-desligado").src = "img/amarelo.png"   
}

const automatico = () => {
    document.getElementById("semaforo-desligado").src = "img/vermelho.png"
    document.getElementById("semaforo-desligado").src = "img/verde.png"
    document.getElementById("semaforo-desligado").src = "img/amarelo.png"   
}

const parar = () => {
    clearInterval(idAmarelo)
    clearInterval(idVerde)
    clearInterval(idAmarelo)
}

//eventos 

document.getElementById('vermelho')
.addEventListener("click", vermelho)

document.getElementById('verde')
.addEventListener("click", verde)

document.getElementById('amarelo')
.addEventListener("click", amarelo)

document.getElementById('automatico')
.addEventListener("click", automatico)
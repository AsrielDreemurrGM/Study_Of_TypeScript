// Recuperando o Dado de um Campo;
const campoNome = document.getElementById('nome');
// Recuperando Formulário;
const formulario = document.getElementsByTagName('form');
// Recuperando um Botão;
// De acordo com o Visual Studio, isto é o que pode ser retornado:
// const botaoEnviar: HTMLElement | null
const botaoEnviar = document.getElementById('btn-enviar');

// Adicionando um Evento de Click ao Botão;
// O Ponto de Interrogação "?" serve para que a ação só seja realizada caso
// o Retorno de "botaoEnviar" Não Seja Nulo (null);
botaoEnviar?.addEventListener('click', (e: MouseEvent) => {
})
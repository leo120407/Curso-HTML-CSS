function nome() {
    var titleh = document.getElementById('titleh')
    var test = document.getElementById('test')
    var divnome = document.createElement('div')
    var nome = window.prompt('Qual seu nome?')
    titleh.insertBefore(divnome,test)
    if (nome.length == 0) {
        divnome.innerHTML += `olá, aqui estão os meus projetos feitos até o momento em HTML + CSS no Curso`
    }
    else {
        divnome.innerHTML += `olá ${nome}, aqui estão os meus projetos feitos até o momento em HTML + CSS no Curso`
    }
    

}
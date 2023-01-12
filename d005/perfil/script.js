function Nome() {
    var title = document.getElementById('qmsou')
    var name = window.prompt('Qual seu nome?')
    var space = document.createElement('h2')
    document.body.insertBefore(space,title)
    space.innerHTML = `Olá ${name} Eu sou Leonardo Mulhenhoff Borim`

}
const menuBotao = document.querySelector('.cabecalho__menu')

var aberto = false

menuBotao.addEventListener('click', () => {

    const menuIcone = document.querySelector('.cabecalho__menu--icone')
    const menuLateral = document.querySelector('.menu-lateral')

    const display = getComputedStyle(menuLateral).display

    if(display == 'none') {

        menuBotao.style.backgroundColor = '#002F52'
        menuLateral.style.display = 'block'
        
    } else if (display == 'block') {

        menuBotao.style.backgroundColor = '#FFFFFF'

        menuLateral.style.display = 'none'
    }
    console.log(display)
})
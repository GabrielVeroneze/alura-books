const swiper = new Swiper('.swiper', {
    // Objeto com parâmetros de reprodução automática
    autoplay: {
        // Atraso entre as transições (em ms)
        delay: 4000,
    },

    // Objeto com parâmetros de paginação
    pagination: {
        // String com seletor CSS ou elemento HTML do contêiner com paginação
        el: '.swiper-pagination',
        // String com o tipo de paginação.
        type: 'bullets',
    },

    // O slide ativo será centralizado, não sempre no lado esquerdo
    centeredSlides: true,

    // Ativar o modo de loop contínuo
    loop: true,
    
    // Número de slides por exibição (slides visíveis ao mesmo tempo no contêiner do slider)
    slidesPerView: 2.25,

    // Duração da transição entre os slides (em ms)
    speed: 400,

    // Distância entre slides em px
    spaceBetween: 11,

    // Permite definir parâmetros diferentes para diferentes tamanhos de tela
    breakpoints: {
        // Quando a largura da janela for >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 46,
        }
    }
});


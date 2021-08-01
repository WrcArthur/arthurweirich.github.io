const menuLateral = $('#projetos')
const botaoMenuLateral = $('#btnLateral')

botaoMenuLateral.click(() => {
    if ((menuLateral.hasClass('aberto')) == false) {
        menuLateral.css('transform', 'translateX(355px)')
        menuLateral.css('transition', '1s')
        botaoMenuLateral.html('❮')
        menuLateral.toggleClass('aberto')
    } else {
        menuLateral.css('transform', 'translateX(0px)')
        botaoMenuLateral.html('❯')
        menuLateral.toggleClass('aberto')
    }
})

const contatos = $('.contatos')
const botaoMenuCabecalho = $('#checkboxMenu')

// if( $(window).width() <= 980){
let c = 0;
botaoMenuCabecalho.click(() => {
    c++;
    if (c==1) {
        for (let i = 0; i < 6; i++) {
            $('.contatos a')[i].append($('.contatos a')[i].title)
        }
    }
    if ((contatos.hasClass('selecionado')) == false) {
        $(".contatos a").hover(function () {
            $(this).css("background-color", "rgb(58, 56, 56, 0.8)");
        }, function () {
            $(this).css("background-color", "#291e38");
        })
        contatos.css('transform', 'translateY(360px)')
        // contatos.css('margin-left', '30px')
        contatos.css('transition', '1s')
        contatos.toggleClass('selecionado')
    } else {
        contatos.css('overflow', 'hidden')
        contatos.css('transform', 'translateY(0px)')
        contatos.css('transition', '1s')
        contatos.toggleClass('selecionado')
    }
})

$('#pesquisa').keyup(function() {
    var nomeFiltro = $(this).val().toLowerCase();
    $('body').find(nomeFiltro).each(function() {
        var conteudoCelula = $(this).find(conteudoCelula).text();
        var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
        $(corresponde).css('background', corresponde ? '' : 'red');
    });
});
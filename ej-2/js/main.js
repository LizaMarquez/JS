/*
    Evento "Ready": se asegura que el código escrito entre las llaves
        se ejecutará cuando el documento (DOM) esté listo (renderizado) en el navegador.

    Sintaxis 1:

        $( document ).ready(function() {
            // Handler for .ready() called.
        });


    Sintaxis 2 (Usaremos esta sintaxis en adelante):

        $(function() {
            // Handler for .ready() called.
        });

*/

$(function () {
    /*
        Selectores: De la misma manera que CSS necesita un "selector" para indicarle al navegador sobre cual elemento se aplicarán los estilos, en
            JS se requieren selectores para que el navegador sepa sobre cual elemento va a aplicar los comportamientos.

        Sintaxis:

            $('selector');

        Ejemplos:

            $('.small');

            $('#header');
    */


    var subtitle = $('#subtitle');
    var items = $('.nav-list__item');

    for (var indice = 0; indice < items.length; indice++) {
        var textoItem = $(items[indice]).text();
        console.log(textoItem);
    };

    /*
        1. Añadir la clase "text-center" al elemento <h1>

        2. Quitar la clase "text-red" al elemento <ul>

        3. Cambiar el texto del <footer>

    */

    var titulo = $('.page-header__title');
    var menu = $('.page-nav__menu');
    var footer = $('.page-footer');
    var buttonAddClassCenter = $('#addClassCenter');
    var buttonRemoveClassCenter = $('#removeClassCenter');


    // titulo.addClass('text-center');
    // menu.removeClass('text-red');
    // footer.text('Aviso de Privacidad');

    /*
        Eventos: Sirven para desencadenar comportamientos en un determinado momento o con la interación del
            usario con el contenido.

            1. Evento click: Se desencadena cuando el usuario hace click
                sobre el elemento HTML especificado en el selector.
    */

    buttonAddClassCenter.on('mouseenter', function () {
        titulo.addClass('text-center');
    });

    buttonAddClassCenter.on('mouseleave', function () {
        titulo.removeClass('text-center');
    });
});

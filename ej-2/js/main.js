$(function() {
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

   buttonAddClassCenter.on('mouseenter', function() {
        titulo.addClass('text-center');
   });

   buttonAddClassCenter.on('mouseleave', function(){
        titulo.removeClass('text-center');
   });



});
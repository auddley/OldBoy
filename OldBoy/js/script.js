$('#openMenu').on('click', function() {
    $('.mob-menu').show(600);
    $("body").css('overflow', 'hidden');
});

$('#closeMenu').on('click', function() {
    $('.mob-menu').hide(600);
    $("body").css('overflow', 'auto');
});
$(".header-right a i").on({
    click: function(){
        $(".hamburger-menu").fadeIn(2000);
    }
});

$(".close").on({
    click: function(){
        $(".hamburger-menu").fadeOut(2000);
    }
})


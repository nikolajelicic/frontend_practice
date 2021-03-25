jQuery(document).ready(function(){
    
    //$(".loader-wrapper").fadeOut();

    //website loader
    setInterval(function(){
        $(".loader-wrapper").fadeOut()
    }, 1000);

    //
    $("#search-btn").click(function(e){
        e.preventDefault()
        $(".search").fadeIn();
    })

    $("#close").click(function(e){
        e.preventDefault()
        $(".search").fadeOut();
    })

    //fixed navbar 
    $(window).scroll(function(){
        if($(window).scrollTop() > 30){
            $("nav").addClass('fixed-nav')
        }else{
            $("nav").removeClass('fixed-nav')
        }
    })

    //responsive navbar menu
    $("#hamburger-menu").click(function(){
        if($("nav ul").css("display")=='none'){
            $("nav ul").slideDown()
        }else{
            $("nav ul").slideUp()
        }
    })
})

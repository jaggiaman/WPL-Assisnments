
$(document).ready(function(){
    $("#displaytoggle").click(function(){
        $("#display_toggle_ele").toggle();
    });

    $("#hide").click(function(){
        $("#display_toggle_ele").hide();
    });
    $("#show").click(function(){
        $("#display_toggle_ele").show();
    });

    $("#fadein").dblclick(function(){
        $("#fade_in_ele").fadeIn("slow");
    });

    $("#fadeout").dblclick(function(){
        $("#fade_out_ele").fadeOut("slow");
    });

    $("#fadetoggle").dblclick(function(){
        $("#fade_toggle_ele").fadeToggle("slow");
    });

    $("#fadeto").dblclick(function(){
        $("#fade_to_ele").fadeTo("slow", 0.7);
    });
    $("#mouse_enter_ele").mouseenter(function(){
        $("#mouse_enter_ele").animate({opacity:'0.3'},3000,function(){alert("Done")});
    });
    $("#mouse_enter_ele").mouseleave(function(){
        $("#mouse_enter_ele").stop(false,true);
    });
});

$(document).ready(function(){
    $("#keypress").keypress(function(){
        $("#keypress_ele").fadeOut();
        $("#keypress_ele").fadeIn();
        $("#keypress_ele").fadeTo("slow",0.5);
    })

    $("#keydown").keydown(function(){
        $("#keydown_ele").slideUp(2000).slideDown(2000).slideUp(2000).slideDown(2000)
    })
});

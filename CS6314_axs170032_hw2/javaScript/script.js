$(document).ready(function(){
    console.log("im here")
    $("#fadein").dblclick(function(){
        $("#interests").fadeIn();
    });
});
$(document).ready(function(){
    $("#fadetoggle").dblclick(function(){
        $("#interests").fadeToggle();
    });
});
$(document).ready(function(){
    $("#fadeout").dblclick(function(){
        $("#interests").fadeOut();
    });
});
$(document).ready(function(){
    $("#fadeto").dblclick(function(){
        $("#interests").fadeTo("slow",0.7);
    });
});

function hide() {
    var elem = document.getElementById("contactme");
    
        elem.style.display = "none";
    }

function show() {
    var elem = document.getElementById("contactme");
        elem.style.display = "block";
    } 
function toggle() {
    var elem = document.getElementById("contactme");
    if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}



$(document).ready(function(){
    $("#Animate").mouseenter(function(){
        $("#b").animate({left: '400px'},4000,function(){
            alert("Done!");
        })
    })   
    $("#Animate").mouseleave(function(){
        $("#b").stop()
        alert("Done!");
    }) 
});

$(document).ready(function(){
    $("#keypress").keypress(function(){
        $("#b").fadeOut();
        $("#b").fadeIn();
        $("#b").fadeTo("slow",0.5);
    })

    $("#keydown").keydown(function(){
        $("#contactme").slideUp(2000).slideDown(2000).slideUp(2000).slideDown(2000)
    })
});
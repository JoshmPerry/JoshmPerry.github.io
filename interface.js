$(document).ready(new function(){
    $(".Sections:even").css("background-color","#d7dee4");
    $(".Sections").each(function(index){
        clicker(this);
    });

});





function clicker(thing){
    if($(thing).attr("id")=="Projects"){
        if($(thing).attr("expanded")=="false"){
            $(thing).html(projectHTML());
            $(thing).attr("expanded","true");
        }else{
            $(thing).html(projectTitle());
            $(thing).attr("expanded","false");
        }
    }
}

function projectHTML(){
    var html="";
    html+="<table style='margin-left:auto;margin-right:auto'><tr><th><h1>Projects</h1></th><td>Section Information</td></tr></table>";

    return html;
}

function projectTitle(){
    var html="";
    html+="<h1>Projects</h1>";

    return html;
}

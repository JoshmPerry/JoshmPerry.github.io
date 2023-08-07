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
    html+="<h1>Projects</h1><table style='margin-left:auto;margin-right:auto;border-spacing:0 15px'>"
    html+="<tr><th style='width:120px;vertical-align:top'><h3>Pxl</h3></th>"
    html+="<td style='width:300px'><p1>This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.</p1></td></tr>"
    
    html+="<tr><th style='width:120px;vertical-align:top'><h3>Pxl</h3></th>"
    html+="<td style='width:300px'><p1>This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.</p1></td></tr>"

    
    html+="</table>";

    return html;
}

function projectTitle(){
    var html="";
    html+="<h1>Projects</h1>";

    return html;
}

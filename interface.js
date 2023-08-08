$(document).ready(new function(){
    //$(".Sections:even").css("background-color","#d7dee4");
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
    if($(thing).attr("id")=="Experience"){
        if($(thing).attr("expanded")=="false"){
            $(thing).html(experienceHTML());
            $(thing).attr("expanded","true");
        }else{
            $(thing).html(experienceTitle());
            $(thing).attr("expanded","false");
        }
    }
    if($(thing).attr("id")=="Resume"){
        if($(thing).attr("expanded")=="false"){
            $(thing).html(resumeHTML());
            $(thing).attr("expanded","true");
        }else{
            $(thing).html(resumeTitle());
            $(thing).attr("expanded","false");
        }
    }
}

function projectHTML(){
    var html="";
    html+="<h1>Projects</h1><table style='margin-left:auto;margin-right:auto;border-spacing:0 15px'>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>Mouseless Mouse</h3><a href='https://github.com/aggie-coding-club/mouseless-mouse'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p1>This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.</p1></td></tr>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>AggieBussin</h3><a href='https://github.com/JoshmPerry/AggieBussin'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p1>This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.</p1></td></tr>"
    
    html+="<tr><th style='width:120px;vertical-align:top'><h3>Adv. RobloxAuto</h3><a href='https://github.com/JoshmPerry/AdvRobloxAuto'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p1>This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.</p1></td></tr>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>TMacro</h3><a href='https://github.com/JoshmPerry/TMacro'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p1>This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.</p1></td></tr>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>Pxl</h3><a href='https://github.com/JoshmPerry/Pxl'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p1>This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.</p1></td></tr>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>RobloxAuto</h3><a href='https://github.com/JoshmPerry/RobloxAuto'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p1>This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.</p1></td></tr>"

    
    html+="</table>";

    return html;
}

function projectTitle(){
    var html="";
    html+="<h1>Projects</h1>";

    return html;
}

function experienceHTML(){
    var html="";
    html+="<h1>Experience</h1><table style='margin-left:auto;margin-right:auto;border-spacing:0 15px'>"
    html+="<tr><th style='width:120px;vertical-align:top'><h3>SIBOR</h3><p>Research Assistant</p></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p1>This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.</p1></td></tr>"
    
    html+="<tr><th style='width:120px;vertical-align:top'><h3>Information Technology Partner</h3><p>Junior Developer</p></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p1>This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.This table will be full of a lot of text.</p1></td></tr>"


    return html;
}

function experienceTitle(){
    var html="";
    html+="<h1>Experience</h1>"
    return html;
}

function resumeHTML(){
    var html="";
    html+="<h1>Resume</h1><table style='margin-left:auto;margin-right:auto;border-spacing:0 15px'>"
    html+="<tr><th style='width:120px'><h3>Download</h3></th>"
    html+="<td style='width:300px;text-align:center'><a href='downloads/Resume.pdf' download='Josh_Perry_Resume'><img src='drawables/resumeLogo.png' width='100px' alt='Resume Logo'></a><p1><br>Updated 8/7/2023</p1></td></tr>"
    
    return html;
}

function resumeTitle(){
    var html="";
    html+="<h1>Resume</h1>"

    return html;
}
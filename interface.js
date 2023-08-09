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
    html+="<td style='width:300px'><p>Mouseless Mouse is the vision of a mouse strapped to your hand like a glove creating both a unique user experience and next evolution of the presentation pointer.</p><p>I started working on Mouseless Mouse since August 2022 and am still working on it to this day. Through the Aggie Coding Club, I have found a team that shares my vision and have diligently worked towards the project.</p><p>I am proud to say that I have led my team to getting the Crowd Favorite award in Spring of 2023 and facilitated two of my project members winning best project member award in Spring of 2023.</p></td></tr>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>Aggie Bussin</h3><a href='https://github.com/JoshmPerry/AggieBussin'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p>Aggie Bussin is a small project made during TAMU Hack 2023. Its purpose was to take two locations on A&M's campus and piece together the best bus route to get you there.</p><p>This project never got the amount of time it deserved, but it did teach me how to call to and from MongoDB and was my first introduction to Java Script.</p></td></tr>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>2 Player Zombie Survival</h3><a href='https://github.com/JoshmPerry/2PlayerZombieSurvival'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p>While starting out as a simple \"make a Tic-Tac-Toe game for your final project,\" this project quickly evolved far and beyond any standards set out. As my groupmates designed the sprites, level design, and wave design, I coded its entirety.</p><p>It runs off a class hierarchy structure and uses Pygame for the display. Once it was done, everything got very slow as more enemies would spawn. The next logical step was to multithread it so that our presentation would run at a decent speed.</p></td></tr>"
    
    html+="<tr><th style='width:120px;vertical-align:top'><h3>Adv. Roblox Auto</h3><a href='https://github.com/JoshmPerry/AdvRobloxAuto'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p>My magnum opus at the time, Advanced Roblox Auto combined everything I've made into a sleek, mean machine. Its very center was a thread handler that would create new threads given the name from your macro in Eazy Auto and would constantly check if it was time to play the macro.</p><p>While it took days to automate one game with the original Roblox Auto, the same could be done in an hour or two while watching a movie. This program has single handedly saved me over 75 hours of tedious gameplay designed to be pay to win.</p></td></tr>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>Eazy Auto</h3><a href='https://github.com/JoshmPerry/EazyAuto'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p>Eazy Auto was a small, straight forward project. It combined the functionality of Pxl and TMacro into a terminal interface. Now all you needed to do was give your macro a name, select the area of the screen to capture, then the TMacro listener would kick in until you press 'q' to quit it.</p></td></tr>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>TMacro</h3><a href='https://github.com/JoshmPerry/TMacro'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p>The idea for TMacro came from Roblox Auto, but the technology it uses is completely new. Using the System-hook git directory, TMacro records keyboard and mouse events to a text file and can then replay those events as if it was external hardware.</p><p>The main inspiration to make this macro listener and player is because when making the keyboard inputs for Roblox Auto, I spent an egregious amount of time tweaking the movement inputs and they weren't even complicated.</p></td></tr>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>Pxl</h3><a href='https://github.com/JoshmPerry/Pxl'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p>This is the first project where I revisited an old idea and improved on it. Roblox Auto used a slow method of image recognition where it would individually read every one out of ten pixels and save that information in a text file to be compared to later on.</p><p>This actually took screenshots and compared them to live view of the screen which made image comparison instantanious compared to the 1-2 seconds the prior method took.</p></td></tr>"

    html+="<tr><th style='width:120px;vertical-align:top'><h3>Roblox Auto</h3><a href='https://github.com/JoshmPerry/RobloxAuto'><img src='drawables/github-mark.svg' width='25' alt='Github'></a></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p>Completed in September 2021, this project marked the start of tacking more complicated challenges. Sure string and image manipulation is fun, but automating the grindyness of a game I love, that's fun and useful.</p></td></tr>"

    
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
    html+="<tr><th style='width:120px;vertical-align:top'><h3>SIBOR</h3><p style='text-indent:0px'>Research Assistant</p></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p></p></td></tr>"
    
    html+="<tr><th style='width:120px;vertical-align:top'><h3>Information Technology Partner</h3><p style='text-indent:0px'>Junior Developer</p></th>"
    if(window.innerWidth<590)html+="</tr><tr>"
    html+="<td style='width:300px'><p></p></td></tr>"


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
    html+="<tr><th style='width:120px;padding-left:0px'><h3>Download</h3></th>"
    html+="<td style='width:300px;text-align:center'><a href='downloads/Resume.pdf' download='Josh_Perry_Resume'><img src='drawables/resumeLogo.png' width='100px' alt='Resume Logo'></a><p style='text-indent:0px'><br>Updated 8/7/2023</p></td></tr>"
    
    return html;
}

function resumeTitle(){
    var html="";
    html+="<h1>Resume</h1>"

    return html;
}
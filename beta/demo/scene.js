ranLocal=location.href.includes("index.html");

function loadSphere(scene,radi,x,y,z,mesh){
    var object=new THREE.Mesh(new THREE.SphereGeometry(radi),mesh);
    object.position.set(x,y,z);
    scene.add(object);
}

function loadRandomSpheres(scene,number,radi,rangeLimit,mesh){
    for(let i=0;i<number;i++){
        var [x,y,z] = Array(3).fill().map(() => Math.random()*rangeLimit*2-rangeLimit);
        if(Math.abs(x)>100 && Math.abs(y)>100 && Math.abs(z)>100)
        loadSphere(scene,radi,x,y,z,mesh);
    }
}

function loadStars(scene,number,radi){
    var star;
    var white;
    if(ranLocal){
        white= new THREE.MeshBasicMaterial({color:0xffffff});
    }else{
        star= new THREE.TextureLoader().load('assets/moon.jpg');
        white= new THREE.MeshBasicMaterial({map:star,color:0xffffff});
    } 
    loadRandomSpheres(scene,number,radi,1500,white);
}

function loadBackground(scene,image){
    if(!ranLocal){
        var loader = new THREE.TextureLoader();
        scene.background = loader.load(image);
    }
}

function generateAnimationObject(rotx,roty,rotz,rotPos,posx,posy,posz){
    var object = {
        object:0,
        changePos:rotPos,
        rotation:{x:rotx,y:roty,z:rotz},
        position:{x:posx,y:posy,z:posz}
    };
    return object;
}

function generateText(text){
    //Dummy Canvas
    var textCanvas = document.createElement("canvas");
    var CnvContext = textCanvas.getContext("2d");

    //Parse Text
    var lines = text.split("\n");
    var lineMaxLength =0;
    lines.forEach((element) => {
        if(element.length>lineMaxLength){
            lineMaxLength=element.length;
        }
    });

    //Draw Text
    textCanvas.width = 57 * lineMaxLength;
    textCanvas.height = (lines.length -.2)* 100
    CnvContext.font = "100 100px Verdana";
    CnvContext.fillStyle="#ffffff";
    CnvContext.clearRect(0,0,textCanvas.width,textCanvas.height);
    for(var i=0;i<lines.length;i++){
        var curlineLength=57*lines[i].length;
        CnvContext.fillText(lines[i],(textCanvas.width-curlineLength)/2,((i+.9)*lines.length*90)/lines.length);
    }


    //get Text Data Points
    var textureCoords = [];

    var imgData = CnvContext.getImageData(0,0,textCanvas.width,textCanvas.height);
    for(let i=0;i<textCanvas.height;i+=4){
        for(let j=0;j<textCanvas.width;j+=4){
            if(imgData.data[(j+i*textCanvas.width)*4]>0){
                textureCoords.push({x:j,y:-i})
            }
        }
    }
    var textData = [];
    textData.points=textureCoords;
    textData.width=textCanvas.width;
    textData.height=textCanvas.height;
    return textData;

}

function loadText(scene,text,pointA,pointB){
    diffx=pointB.x-pointA.x;
    diffy=pointB.y-pointA.y;
    
    diameter = Math.min(4*diffx/text.width,4*diffy/text.height);
    var mesh=new THREE.MeshStandardMaterial({color:0xffffff,transparent:true,opacity:0.5});
    text.points.forEach((point)=>{
        x=pointA.x+(point.x/text.width)*diffx;
        y=pointA.y+(point.y/text.height)*diffy;
        z=pointA.z;
        loadSphere(scene,diameter/2,x,y,z,mesh);
    });
}


function loadScreen(scene,text){
    var textData = generateText(text);
    var pointA={x:-50,y:25,z:-20};
    var pointB={x:50,y:75,z:-20};
    loadText(scene,textData,pointA,pointB);
    var geometry = new THREE.BoxGeometry(pointB.x-pointA.x,pointB.y-pointA.y,2.5);
    var edges = new THREE.EdgesGeometry(geometry);
    var lines = new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0x2a6a96}));
    lines.position.set(0,0,-20);
    scene.add(lines);
    var rectLight = new THREE.RectAreaLight(0xffffff,.5,pointB.x-pointA.x,pointB.y-pointA.y);
    rectLight.position.set(0,0,-15);
    rectLight.lookAt(0,0,-20);
    scene.add(rectLight);
}

function loadPlatform(scene,animationGroup){
    var tgeometry = new THREE.CylinderGeometry(72,75,4,64);
    var tmaterial = new THREE.MeshStandardMaterial({color:0x2a6a96});
    var topCylinder = new THREE.Mesh(tgeometry,tmaterial);

    topCylinder.position.set(0,-70,0);
    var bgeometry = new THREE.CylinderGeometry(78,50,20,32);
    var bmaterial = new THREE.MeshStandardMaterial({color:0x525252});
    var bottomCylinder = new THREE.Mesh(bgeometry,bmaterial);
    bottomCylinder.position.set(0,-82,0);
    scene.add(topCylinder,bottomCylinder);

    var tgeometry = new THREE.CylinderGeometry(4,1,4,64);
    var tmaterial = new THREE.MeshStandardMaterial({color:0x2a6a96});
    var topCylinder = new THREE.Mesh(tgeometry,tmaterial);
    topCylinder.position.set(0,-364,0);
    var bgeometry = new THREE.CylinderGeometry(10,5,280,32);
    var bmaterial = new THREE.MeshStandardMaterial({color:0x525252});
    var bottomCylinder = new THREE.Mesh(bgeometry,bmaterial);
    bottomCylinder.position.set(0,-222,0);
    scene.add(topCylinder,bottomCylinder);


    var tgeometry = new THREE.TorusGeometry(35,5,24,64);
    var tmaterial = new THREE.MeshStandardMaterial({color:0x2a6a96});
    var topCylinder = new THREE.Mesh(tgeometry,tmaterial);
    topCylinder.rotation._order="ZYX";
    topCylinder.position.set(0,-180,0);
    topCylinder.rotation.set(Math.PI/2-0.35,0,0);
    var tring = generateAnimationObject(0,0.05,0,false);
    tring.object=topCylinder;
    animationGroup.push(tring);
    scene.add(topCylinder);

    var tgeometry = new THREE.TorusGeometry(25,5,24,64);
    var topCylinder = new THREE.Mesh(tgeometry,tmaterial);
    topCylinder.rotation._order="ZYX";
    topCylinder.position.set(0,-300,0);
    topCylinder.rotation.set(Math.PI/2-0.25,0,0);
    var tring = generateAnimationObject(0,-0.04,0,false);
    tring.object=topCylinder;
    animationGroup.push(tring);
    scene.add(topCylinder);

}

function loadLighting(scene,animationGroup){
    var alight=new THREE.AmbientLight(0xffffff);
    alight.intensity=0.005;
    scene.add(alight);

    var plight = new THREE.PointLight(0xffffff);
    plight.intensity=500000;
    var animation = generateAnimationObject(0,0,0,true,2000,2000,500);
    animation.object=plight;
    scene.add(plight);
    animationGroup.push(animation);
    var plight = new THREE.PointLight(0xffffff);
    plight.intensity=200000;
    var animation = generateAnimationObject(0,0,0,true,-2000,-2000,800);
    animation.object=plight;
    scene.add(plight);
    animationGroup.push(animation);
}

function loadScene(scene,animationGroup){
    loadStars(scene,500,2);
    loadScreen(scene,"Mouseless\nMouse");


    //loadBackground(scene,"assets/space.jpg");

    loadPlatform(scene,animationGroup);

    loadLighting(scene,animationGroup);

}
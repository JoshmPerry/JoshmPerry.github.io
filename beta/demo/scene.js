ranLocal=location.href.includes("index.html");

function loadSphere(scene,radi,x,y,z,mesh){
    var object=new THREE.Mesh(new THREE.SphereGeometry(radi),mesh);
    object.position.set(x,y,z);
    scene.add(object);
}

function loadRandomSpheres(scene,number,radi,rangeLimit,mesh){
    for(let i=0;i<number;i++){
        var [x,y,z] = Array(3).fill().map(() => Math.random()*rangeLimit*2-rangeLimit);
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

function generateText(scene,text){
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
    console.log(textCanvas);

    //tmp Plane
    var texture=new THREE.CanvasTexture(textCanvas);
    var planeGeometry = new THREE.PlaneGeometry(textCanvas.width,textCanvas.height);
    var Plane = new THREE.MeshBasicMaterial({map:texture});
    var planeMesh = new THREE.Mesh(planeGeometry,Plane);
    //scene.add(planeMesh);

    var textureCoords = [];

    var imgData = CnvContext.getImageData(0,0,textCanvas.width,textCanvas.height);
    for(let i=0;i<textCanvas.height;i+=4){
        for(let j=0;j<textCanvas.width;j+=4){
            if(imgData.data[(j+i*textCanvas.width)*4]>0){
                textureCoords.push({x:j,y:-i})
            }
        }
    }
    console.log(textureCoords);
    var white= new THREE.MeshStandardMaterial({color:0xffffff});
    textureCoords.forEach((element) =>{
        loadSphere(scene,2,element.x,element.y,20,white);
    });

}

function loadScene(scene){
    loadStars(scene,500,2);
    generateText(scene,"Mouseless\nMouse");

}
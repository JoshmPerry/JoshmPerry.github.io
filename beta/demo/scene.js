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
        white= new THREE.MeshStandardMaterial({color:0xffffff});
    }else{
        star= new THREE.TextureLoader().load('assets/moon.jpg');
        white= new THREE.MeshStandardMaterial({map:star,color:0xffffff});
    } 
    loadRandomSpheres(scene,number,radi,1500,white);
}
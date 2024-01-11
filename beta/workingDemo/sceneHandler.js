import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,640/480,.1,1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#glcanvas'),
});

renderer.setPixelRatio(window.devicePixelRatio);

camera.position.setZ(30);

renderer.render(scene, camera);



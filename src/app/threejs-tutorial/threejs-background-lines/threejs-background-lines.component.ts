import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

var OrbitControls = require('three-orbit-controls')(THREE);

@Component({
  selector: 'app-threejs-background-lines',
  templateUrl: './threejs-background-lines.component.html',
  styleUrls: ['./threejs-background-lines.component.css']
})
export class ThreejsBackgroundLinesComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    var scene = new THREE.Scene();

    var cam = new THREE.Camera
    var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    document.body.appendChild( renderer.domElement );

    var cylinder = new THREE.CylinderBufferGeometry(0.05, 0.05, 25, 32, 32); 
    var cylindermaterial = new THREE.MeshBasicMaterial( { color: 0xc4cace} );
    var cylindermesh1 = new THREE.Mesh( cylinder, cylindermaterial );
    scene.add(cylindermesh1);
    cylindermesh1.position.set(-4,3,0);
    cylindermesh1.rotation.z = -10;
    var cylindermesh2 = new THREE.Mesh( cylinder, cylindermaterial );
    scene.add(cylindermesh2);
    cylindermesh2.position.set(0,3,0);
    cylindermesh2.rotation.z = -10;
    var cylindermesh3 = new THREE.Mesh( cylinder, cylindermaterial );
    scene.add(cylindermesh3);
    cylindermesh3.position.set(4,3,0);
    cylindermesh3.rotation.z = -10;
    var cylindermesh4 = new THREE.Mesh( cylinder, cylindermaterial );
    scene.add(cylindermesh4);
    cylindermesh4.position.set(-2,3,-5);
    cylindermesh4.rotation.z = -10;
    var cylindermesh5 = new THREE.Mesh( cylinder, cylindermaterial );
    scene.add(cylindermesh5);
    cylindermesh5.position.set(2,3,-5);
    cylindermesh5.rotation.z = -10;

    var dodecahedron = new THREE.DodecahedronBufferGeometry(1); 
    var dodecahedronmaterial = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true} );
    var dodecahedronmesh = new THREE.Mesh( dodecahedron, dodecahedronmaterial );
    scene.add(dodecahedronmesh);
    dodecahedronmesh.position.set(-8,3,0);

    camera.position.z = 10;
    let controls = new OrbitControls(camera);
    controls.addEventListener('change', renderer);

    var animate = function () {
      requestAnimationFrame( animate );

      // cylindermesh1.rotation.x += 0.01;
      // cylindermesh2.rotation.x += 0.01;
      // cylindermesh3.rotation.x += 0.01;
      // cylindermesh4.rotation.x += 0.01;
      // cylindermesh5.rotation.x += 0.01;
      // dodecahedronmesh.rotation.x += 0.01;

      renderer.render( scene, camera );
    };

    animate();
  }

}

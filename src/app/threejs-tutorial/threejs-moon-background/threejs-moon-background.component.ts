import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

var OrbitControls = require('three-orbit-controls')(THREE);

@Component({
  selector: 'app-threejs-moon-background',
  templateUrl: './threejs-moon-background.component.html',
  styleUrls: ['./threejs-moon-background.component.css']
})
export class ThreejsMoonBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    document.body.appendChild( renderer.domElement );

    // var sphere = new THREE.SphereBufferGeometry(0.1, 32, 32); 
    // var spherematerial = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    // for(var i = 0; i < 1000; i++) {
    //   var spheremesh1 = new THREE.Mesh( sphere, spherematerial );
    //   scene.add(spheremesh1);
    //   var x = Math.floor(Math.random() * 201) - 100, y = Math.floor(Math.random() * 201) - 100, z = Math.floor(Math.random() * 201) - 100;
    //   spheremesh1.position.set(x, y, z);
    // }
    
    var moonGeometry = new THREE.SphereGeometry(15, 30, 30);
    var moonMaterial = new THREE.MeshNormalMaterial();
    var moonMesh = new THREE.Mesh(moonGeometry, moonMaterial); moonMesh.name = 'earth';
    scene.add(moonMesh);

    camera.position.x = 35;
    camera.position.y = 36;
    camera.position.z = 33;
    camera.lookAt(scene.position);
    
    let controls = new OrbitControls(camera);
    controls.addEventListener('change', renderer);

    var animate = function () {
      requestAnimationFrame( animate );

      renderer.render( scene, camera );
    };

    animate();
  }

}

import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs-basic',
  templateUrl: './threejs-basic.component.html',
  styleUrls: ['./threejs-basic.component.css']
})
export class ThreejsBasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var scene = new THREE.Scene();
    /** 
     * There are differnet types of camera like 
     * ArrayCamera, CubeArray, OrthographicCamera, Perspective and StereoCamera, 
     * here we are using PerspectiveCamera.
     * Params of PerspectiveCamera are : 
     * Field of View in degrees, Aspect Ratio, near clipping plane and far clipping plane 
     * (objects further away from the camera than the value of far or closer than near won't be rendered)
     */
    var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

    /** 
     * Renderer is where the magic happens
     * So, first renderer instance is created.
     * setSize() sets the size of redenred frame. Here it is entire frame.
     */
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );

    /**
     * BoxGeometry is required to create a cube of left, width and height 2.
     * Three.js provides with different materials however here we have chosen MeshBasicMaterial.
     * Mesh is an object that takes geometry and applies material.
     * The mesh is then added to the scene. The addition is according to the coordinate (0,0,0);
     * cube.position.set() can be set w.r.t. center of object
     */
    var geometry = new THREE.BoxGeometry( 2, 2, 2 ); 
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    cube.position.set(1,1,0);

    // var geometry = new THREE.BoxBufferGeometry( 2, 2, 2 ); 
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube2 = new THREE.Mesh( geometry, material );
    scene.add( cube2 );
    cube2.rotation.y = 10;
    /**
     * Since, the mesh is at 0,0,0 the camera is position outside with x=0, y=0, z=5 position
     */
    camera.position.z = 5;

    /**
     * requestAnimationFrame() is better than setInterval as it stops the 
     */
    var animate = function () {
      requestAnimationFrame( animate );

      // cube.rotation.x += 0.1;
      cube.rotation.z += 0.1;

      renderer.render( scene, camera );
    };

    animate();
  }

}

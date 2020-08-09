import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

var OrbitControls = require('three-orbit-controls')(THREE);

@Component({
  selector: 'app-threejs-art1',
  templateUrl: './threejs-art1.component.html',
  styleUrls: ['./threejs-art1.component.css']
})
export class ThreejsArt1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff);
    document.body.appendChild(renderer.domElement);

    var material = new THREE.MeshStandardMaterial({
      color: 0x333333, 
      transparent: false, 
      opacity: .75, 
      wireframe: true,
      roughness: .2,
      metalness: 2
    });

    //--------------------------------------SPHERE--------------------------------------

    var sphereBase = new THREE.SphereBufferGeometry(2, 32, 32); 
    var sphereBasemesh = new THREE.Mesh( sphereBase, material );
    scene.add(sphereBasemesh);
    sphereBasemesh.position.set(0,0,0);

    //--------------------------------------TUBE--------------------------------------

    function CustomXSinCurve( scale ) {
      THREE.Curve.call( this );
      this.scale = ( scale === undefined ) ? 1 : scale;
    }

    function CustomZSinCurve( scale ) {
      THREE.Curve.call( this );
      this.scale = ( scale === undefined ) ? 1 : scale;
    }
    
    CustomXSinCurve.prototype = Object.create( THREE.Curve.prototype );
    CustomXSinCurve.prototype.constructor = CustomXSinCurve;

    CustomZSinCurve.prototype = Object.create( THREE.Curve.prototype );
    CustomZSinCurve.prototype.constructor = CustomZSinCurve;
    
    CustomXSinCurve.prototype.getPoint = function (t) {
    
      var tx = t * 3 - 1.5;
      var ty = Math.sin(Math.PI * t);
      var tz = 0;
    
      return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );
    };

    CustomZSinCurve.prototype.getPoint = function (t) {
    
      var tz = t * 3 - 1.5;
      var ty = Math.sin(Math.PI * t);
      var tx = 0;
    
      return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );
    };
    
    var path1 = new CustomXSinCurve(2);
    var geometry1 = new THREE.TubeBufferGeometry( path1, 64, 0.5, 8, false );
   
    var tubemesh1 = new THREE.Mesh( geometry1, material );
    tubemesh1.position.set(3,0,0);
    scene.add( tubemesh1 );

    var tubemesh2 = new THREE.Mesh( geometry1, material );
    tubemesh2.position.set(-3,0,0);
    scene.add( tubemesh2 );

    var path2 = new CustomZSinCurve( 2 );
    var geometry2 = new THREE.TubeBufferGeometry( path2, 64, 0.5, 8, false );

    var tubemesh3 = new THREE.Mesh( geometry2, material );
    tubemesh3.position.set(0,0,-3);
    scene.add( tubemesh3 );

    var tubemesh4 = new THREE.Mesh( geometry2, material );
    tubemesh4.position.set(0,0,3);
    scene.add( tubemesh4 );

    //--------------------------------------CYLINDER--------------------------------------
    var cylinder = new THREE.CylinderBufferGeometry( 0.5, 0.5, 4.5, 32 );
    
    var cylindermesh1 = new THREE.Mesh( cylinder, material );
    cylindermesh1.position.set(6,2,0);
    scene.add( cylindermesh1 );

    var cylindermesh2 = new THREE.Mesh( cylinder, material );
    cylindermesh2.position.set(-6,2,0);
    scene.add( cylindermesh2 );

    var cylindermesh3 = new THREE.Mesh( cylinder, material );
    cylindermesh3.position.set(0,2,6);
    scene.add( cylindermesh3 );

    var cylindermesh4 = new THREE.Mesh( cylinder, material );
    cylindermesh4.position.set(0,2,-6);
    scene.add( cylindermesh4 );

    var mainCylinder = new THREE.CylinderBufferGeometry( 0.5, 0.5, 9, 32 );
    var cylindermesh5 = new THREE.Mesh( mainCylinder, material );
    cylindermesh5.position.set(0,4.5,0);
    scene.add( cylindermesh5 );

    //--------------------------------------LATHE--------------------------------------
    
    var octaheadron = new THREE.OctahedronBufferGeometry(0.5);
    
    var octa1 = new THREE.Mesh( octaheadron, material );
    octa1.position.set(6,4.7,0);
    scene.add( octa1 );

    var octa2 = new THREE.Mesh( octaheadron, material );
    octa2.position.set(-6,4.7,0);
    scene.add( octa2 );

    var octa3 = new THREE.Mesh( octaheadron, material );
    octa3.position.set(0,4.7,6);
    scene.add( octa3 );

    var octa4 = new THREE.Mesh( octaheadron, material );
    octa4.position.set(0,4.7,-6);
    scene.add( octa4 );

    var octaheadron2 = new THREE.OctahedronBufferGeometry(0.5, 2);
    var octa5 = new THREE.Mesh( octaheadron2, material );
    octa5.position.set(0,-2,0);
    scene.add( octa5 );

    camera.position.z = 15;

    let controls = new OrbitControls(camera);
    controls.addEventListener('change', renderer);

    var animate = function () {
      requestAnimationFrame( animate );

      renderer.render( scene, camera );
    };

    animate();
  }

}

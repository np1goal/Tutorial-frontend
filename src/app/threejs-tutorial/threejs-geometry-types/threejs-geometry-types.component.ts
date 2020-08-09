import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
// import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
// import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';

@Component({
  selector: 'app-threejs-geometry-types',
  templateUrl: './threejs-geometry-types.component.html',
  styleUrls: ['./threejs-geometry-types.component.css']
})
export class ThreejsGeometryTypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 1);
    document.body.appendChild( renderer.domElement );

    var box = new THREE.BoxBufferGeometry( 1, 1, 1 ); 
    var boxmaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var cube = new THREE.Mesh( box, boxmaterial );
    scene.add(cube);
    cube.position.set(-10,5,0);

    var circle1 = new THREE.CircleBufferGeometry(1, 32); 
    var circlematerial1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var round1 = new THREE.Mesh( circle1, circlematerial1 );
    scene.add(round1);
    round1.position.set(-7,5,0);

    var circle2 = new THREE.CircleBufferGeometry(1, 12); 
    var circlematerial2 = new THREE.MeshBasicMaterial( { color: 0x0000ff, side: THREE.DoubleSide} );
    var round2 = new THREE.Mesh( circle2, circlematerial2 );
    scene.add(round2);
    round2.position.set(-4,5,0);

    var cone = new THREE.ConeBufferGeometry(1, 2); 
    var conematerial = new THREE.MeshBasicMaterial( { color: 0xffff00} );
    var conemesh = new THREE.Mesh( cone, conematerial );
    scene.add(conemesh);
    conemesh.position.set(-1,5,0);

    var cylinder = new THREE.CylinderBufferGeometry(1, 1, 2); 
    var cylindermaterial = new THREE.MeshBasicMaterial( { color: 0xff00ff} );
    var cylindermesh = new THREE.Mesh( cylinder, cylindermaterial );
    scene.add(cylindermesh);
    cylindermesh.position.set(2,5,0);

    var dodecahedron = new THREE.DodecahedronBufferGeometry(1); 
    var dodecahedronmaterial = new THREE.MeshBasicMaterial( { color: 0x00ffff} );
    var dodecahedronmesh = new THREE.Mesh( dodecahedron, dodecahedronmaterial );
    scene.add(dodecahedronmesh);
    dodecahedronmesh.position.set(5,5,0);

    var icosahedron = new THREE.IcosahedronBufferGeometry(1); 
    var icosahedronmaterial = new THREE.MeshBasicMaterial( { color: 0xf0f000} );
    var icosahedronmesh = new THREE.Mesh( icosahedron, icosahedronmaterial );
    scene.add(icosahedronmesh);
    icosahedronmesh.position.set(8,5,0);

    var octahedron = new THREE.OctahedronBufferGeometry(1); 
    var octahedronmaterial = new THREE.MeshBasicMaterial( { color: 0xff45b1} );
    var octahedronmesh = new THREE.Mesh( octahedron, octahedronmaterial );
    scene.add(octahedronmesh);
    octahedronmesh.position.set(-10,1,0);

    var plane = new THREE.PlaneBufferGeometry(1.5, 1.5); 
    var planematerial = new THREE.MeshBasicMaterial( { color: 0x00f0f0} );
    var planemesh = new THREE.Mesh( plane, planematerial );
    scene.add(planemesh);
    planemesh.position.set(-7,1,0);

    var ring = new THREE.RingBufferGeometry(0.5, 1, 32); 
    var ringmaterial = new THREE.MeshBasicMaterial( { color: 0x000000} );
    var ringmesh = new THREE.Mesh( ring, ringmaterial );
    scene.add(ringmesh);
    ringmesh.position.set(-4,1,0);

    var sphere = new THREE.SphereBufferGeometry(1, 32, 32); 
    var spherematerial = new THREE.MeshBasicMaterial( { color: 0x42f59e} );
    var spheremesh = new THREE.Mesh( sphere, spherematerial );
    scene.add(spheremesh);
    spheremesh.position.set(-1,1,0);

    var tetrahedron = new THREE.TetrahedronBufferGeometry(1); 
    var tetrahedronmaterial = new THREE.MeshBasicMaterial( { color: 0xf58a42} );
    var tethedronmesh = new THREE.Mesh( tetrahedron, tetrahedronmaterial );
    scene.add(tethedronmesh);
    tethedronmesh.position.set(2,1,0);

    var torus = new THREE.TorusBufferGeometry(0.5, 0.2, 32, 100); 
    var torusmaterial = new THREE.MeshBasicMaterial( { color: 0x8359ff} );
    var torusmesh = new THREE.Mesh( torus, torusmaterial );
    scene.add(torusmesh);
    torusmesh.position.set(5,1,0);

    var torusknot = new THREE.TorusKnotBufferGeometry(0.5, 0.2, 32, 100); 
    var torusknotmaterial = new THREE.MeshBasicMaterial( { color: 0x0d870b} );
    var torusknotmesh = new THREE.Mesh( torusknot, torusknotmaterial );
    scene.add(torusknotmesh);
    torusknotmesh.position.set(8,1,0);


    /**
     * Since, the mesh is at 0,0,0 the camera is position outside with x=0, y=0, z=5 position
     */
    camera.position.z = 10;

    /**
     * requestAnimationFrame() is better than setInterval as it stops the 
     */
    var animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.1;
      cube.rotation.z += 0.01;
      round1.rotation.x += 0.01
      round2.rotation.x += 0.01
      conemesh.rotation.x += 0.01
      cylindermesh.rotation.x += 0.01;
      dodecahedronmesh.rotation.x += 0.01;
      icosahedronmesh.rotation.x += 0.01;
      octahedronmesh.rotation.x += 0.01;
      planemesh.rotation.x += 0.01;
      ringmesh.rotation.x += 0.01;
      spheremesh.rotation.x += 0.01;
      tethedronmesh.rotation.x += 0.01;
      torusmesh.rotation.x += 0.01;
      torusknotmesh.rotation.x += 0.01;

      renderer.render( scene, camera );
    };

    animate();
  }

}

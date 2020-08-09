import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

//Code are refered from https://redstapler.co/three-js-realistic-rain-tutorial/
//I do not own coypright to this code.

@Component({
  selector: 'app-threejs-rain-effect',
  templateUrl: './threejs-rain-effect.component.html',
  styleUrls: ['./threejs-rain-effect.component.css']
})
export class ThreejsRainEffectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
      let scene,camera, renderer, cloudParticles = [], flash, rain, rainGeo, rainCount = 15000;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = 1.16;
      camera.rotation.y = -0.12;
      camera.rotation.z = 0.27;
      var ambient = new THREE.AmbientLight(0x555555);
      scene.add(ambient);
      var directionalLight = new THREE.DirectionalLight(0xffeedd);
      directionalLight.position.set(0,0,1);
      scene.add(directionalLight);
      flash = new THREE.PointLight(0x062d89, 30, 500 ,1.7);
      flash.position.set(200,300,100);
      scene.add(flash);
      renderer = new THREE.WebGLRenderer();
      scene.fog = new THREE.FogExp2(0x11111f, 0.002);
      renderer.setClearColor(scene.fog.color);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      rainGeo = new THREE.Geometry();
      for(let i=0;i<rainCount;i++) {
        let rainDrop = new THREE.Vector3(
          Math.random() * 400 -200,
          Math.random() * 500 - 250,
          Math.random() * 400 - 200
        );
        // rainDrop.velocity = {};
        // rainDrop.velocity = 0;
        rainGeo.vertices.push(rainDrop);
        rainGeo.vertices.forEach(p => {
          p.velocity = {}; 
          p.velocity = 0;
        });
      }
      var rainMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.1,
        transparent: true
      });
      rain = new THREE.Points(rainGeo,rainMaterial);
      scene.add(rain);
      let loader = new THREE.TextureLoader();
      loader.load("../../../assets/fog.png", function(texture){
        var cloudGeo = new THREE.PlaneBufferGeometry(500,500);
        var cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true
        });
        for(let p=0; p<25; p++) {
          let cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
          cloud.position.set(
            Math.random()*800 -400,
            500,
            Math.random()*500 - 450
          );
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random()*360;
          cloud.material.opacity = 0.6;
          cloudParticles.push(cloud);
          scene.add(cloud);
        }
        animate();
      });

      var animate = function() {
        cloudParticles.forEach(p => {
          p.rotation.z -=0.002;
        });
        rainGeo.vertices.forEach(p => {
          p.velocity -= 0.01 + Math.random() * 0.01;
          p.y += p.velocity;
          if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
          }
        });
        rainGeo.verticesNeedUpdate = true;
        rain.rotation.y +=0.002;
        if(Math.random() > 0.93 || flash.power > 100) {
          if(flash.power < 100) 
            flash.position.set(
              Math.random()*400,
              300 + Math.random() *200,
              100
            );
          flash.power = 50 + Math.random() * 500;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
  }
}
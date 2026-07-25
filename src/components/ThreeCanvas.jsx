import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Night Mode Cyber-Robotic Palette
    const CYBER_THEME = {
      core: 0x22d3ee,       // Neon Cyan core glow
      armor: 0x6c8cff,      // Metallic Violet Blue
      ring1: 0xc084fc,      // Purple Gimbal Ring
      ring2: 0x22d3ee,      // Cyan Gimbal Ring
      ring3: 0x6c8cff,      // Blue outer ring
      particles: 0x8fa8ff,  // Neural particles
      fog: 0x0e1430
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 13;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene.fog = new THREE.FogExp2(CYBER_THEME.fog, 0.025);

    // --- Lighting ---
    const keyLight = new THREE.PointLight(0x22d3ee, 80, 80);
    keyLight.position.set(6, 8, 10);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xc084fc, 60, 60);
    fillLight.position.set(-8, -6, 6);
    scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // --- ROBOTIC CYBER-CORE GROUP ---
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // 1. Inner Glowing Power Core
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: CYBER_THEME.core,
      emissive: 0x0099bb,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    robotGroup.add(coreMesh);

    // Inner wireframe glow overlay for core
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const coreWireMesh = new THREE.Mesh(coreGeo, coreWireMat);
    coreWireMesh.scale.setScalar(1.04);
    robotGroup.add(coreWireMesh);

    // 2. Outer Robotic Mechanical Armor (Faceted Outer Shell)
    const armorGeo = new THREE.DodecahedronGeometry(2.1, 0);
    const armorMat = new THREE.MeshStandardMaterial({
      color: CYBER_THEME.armor,
      roughness: 0.15,
      metalness: 0.9,
      flatShading: true,
      transparent: true,
      opacity: 0.75
    });
    const armorMesh = new THREE.Mesh(armorGeo, armorMat);
    robotGroup.add(armorMesh);

    // Armor Edges Overlay for crisp mechanical silhouette
    const armorEdges = new THREE.EdgesGeometry(armorGeo);
    const armorLineMat = new THREE.LineBasicMaterial({
      color: 0x6c8cff,
      transparent: true,
      opacity: 0.6
    });
    const armorLines = new THREE.LineSegments(armorEdges, armorLineMat);
    robotGroup.add(armorLines);

    // 3. Concentric Gyroscope Robotic Rings
    const ring1Geo = new THREE.TorusGeometry(3.0, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: CYBER_THEME.ring1,
      roughness: 0.1,
      metalness: 0.95,
      emissive: 0x401060,
      emissiveIntensity: 0.5
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    robotGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.8, 0.035, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: CYBER_THEME.ring2,
      roughness: 0.1,
      metalness: 0.95,
      emissive: 0x004050,
      emissiveIntensity: 0.5
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    robotGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(4.6, 0.03, 16, 100);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: CYBER_THEME.ring3,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.7
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = -Math.PI / 6;
    ring3.rotation.y = Math.PI / 6;
    robotGroup.add(ring3);

    // 4. Orbiting Robotic Data Nodes / Satellites
    const nodeCount = reduced ? 4 : 8;
    const nodes = [];
    const nodeGeo = new THREE.OctahedronGeometry(0.25, 0);

    for (let i = 0; i < nodeCount; i++) {
      const nodeMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x22d3ee : 0xc084fc,
        emissive: i % 2 === 0 ? 0x004455 : 0x330044,
        roughness: 0.2,
        metalness: 0.9,
        flatShading: true
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      const orbitRadius = 3.2 + (i % 3) * 0.7;
      const angle = (i / nodeCount) * Math.PI * 2;
      const speed = 0.5 + Math.random() * 0.5;

      nodeMesh.userData = { orbitRadius, angle, speed, yOffset: (Math.random() - 0.5) * 1.5 };
      robotGroup.add(nodeMesh);
      nodes.push(nodeMesh);
    }

    // Position robot core slightly offset for hero balance
    robotGroup.position.set(2.5, 0, -1);

    // --- FLOATING BACKGROUND PARTICLES / NEURAL NODES ---
    const PCOUNT = reduced ? 250 : 700;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(PCOUNT * 3);
    for (let i = 0; i < PCOUNT; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 50;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 35 - 5;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: CYBER_THEME.particles,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
      sizeAttenuation: true
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // --- INTERACTIVE POINTER & SCROLL PARALLAX ---
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const handlePointerMove = (e) => {
      pointer.tx = e.clientX / window.innerWidth - 0.5;
      pointer.ty = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', handlePointerMove);

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- ANIMATION LOOP ---
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      // Core rotation & pulse
      coreMesh.rotation.y = t * 0.4;
      coreMesh.rotation.x = Math.sin(t * 0.3) * 0.2;
      coreWireMesh.rotation.y = -t * 0.5;

      // Armor shell rotation
      armorMesh.rotation.y = -t * 0.25;
      armorMesh.rotation.z = Math.cos(t * 0.2) * 0.2;
      armorLines.rotation.copy(armorMesh.rotation);

      // Gyro Rings rotation
      ring1.rotation.z = t * 0.35;
      ring1.rotation.y = t * 0.2;

      ring2.rotation.x = t * 0.25;
      ring2.rotation.z = -t * 0.3;

      ring3.rotation.y = -t * 0.15;
      ring3.rotation.x = Math.sin(t * 0.2) * 0.3;

      // Orbiting Data Nodes
      nodes.forEach((n) => {
        n.userData.angle += n.userData.speed * 0.015;
        n.position.x = Math.cos(n.userData.angle) * n.userData.orbitRadius;
        n.position.z = Math.sin(n.userData.angle) * n.userData.orbitRadius;
        n.position.y = n.userData.yOffset + Math.sin(t * 1.5 + n.userData.angle) * 0.3;
        n.rotation.x += 0.02;
        n.rotation.y += 0.03;
      });

      // Background particles drift
      particles.rotation.y = t * 0.015;
      particles.rotation.x = Math.sin(t * 0.01) * 0.1;

      // Pointer tracking & scroll inertia
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      robotGroup.rotation.y = pointer.x * 0.6;
      robotGroup.rotation.x = -pointer.y * 0.5;

      camera.position.x += (pointer.x * 3.5 - camera.position.x) * 0.05;
      camera.position.y += (-pointer.y * 2.5 - scrollY * 0.0025 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas id="bg-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  );
}

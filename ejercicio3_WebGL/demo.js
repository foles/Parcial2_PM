var scene, camera, renderer, mesh;
var meshFloor, ambientLight, light, meshPared1;

var floorTexture;

var keyboard = {};
var player = { height: 2.8, speed: 0.2, turnSpeed: Math.PI * 0.01 }
var USE_WIREFRAME = false;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00538C);

    ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    light = new THREE.DirectionalLight(0xFFFFFF, 0.7);
    light.position.set(1, 1, 1);
    light.target.position.set(0, 0, 0);
    light.target.updateMatrixWorld()

    var ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(light)



    meshFloor = new THREE.Mesh(
        new THREE.BoxGeometry(20, 20, 1, 1),
        new THREE.MeshPhongMaterial({ color: 0x02294D, wireframe: false })
    )
    meshFloor.position.y -= 3;
    meshFloor.rotation.x -= Math.PI / 2;
    meshFloor.receiveShadow = true;
    scene.add(meshFloor)


    meshSphereA = new THREE.Mesh(
        new THREE.SphereBufferGeometry(7, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0xffffff })
    )
    meshSphereA.castShadow = true;
    meshSphereA.receiveShadow = true;
    meshSphereA.position.y = 4;
    scene.add(meshSphereA)


    meshSphereB = new THREE.Mesh(
        new THREE.SphereBufferGeometry(5, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0xffffff })
    )
    meshSphereB.castShadow = true;
    meshSphereB.receiveShadow = true;
    meshSphereB.position.y = 14.5;
    scene.add(meshSphereB)


    chalina = new THREE.Mesh(
        new THREE.TorusGeometry(3, 1.8, 16, 100),
        new THREE.MeshPhongMaterial({ color: 0xff0000 })
    )
    chalina.castShadow = true;
    chalina.receiveShadow = true;
    chalina.position.y = 10;

    chalina.rotation.x -= Math.PI / 2;
    scene.add(chalina);

    boton1 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(1, 10, 10),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    boton1.castShadow = true;
    boton1.receiveShadow = true;
    boton1.position.y = 7;
    boton1.position.z = 5.5;
    scene.add(boton1)

    boton2 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(1, 10, 10),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    boton2.castShadow = true;
    boton2.receiveShadow = true;
    boton2.position.y = 4.5;
    boton2.position.z = 6.2;
    scene.add(boton2)

    boton3 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(1, 10, 10),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    boton3.castShadow = true;
    boton3.receiveShadow = true;
    boton3.position.y = 2;
    boton3.position.z = 6;
    scene.add(boton3)

    ojo1 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(1, 25, 25),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    ojo1.castShadow = true;
    ojo1.receiveShadow = true;
    ojo1.position.y = 16;
    ojo1.position.z = 4;
    ojo1.position.x = 2;
    scene.add(ojo1)


    ojo2 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(1, 25, 25),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    ojo2.castShadow = true;
    ojo2.receiveShadow = true;
    ojo2.position.y = 16;
    ojo2.position.z = 4;
    ojo2.position.x = -2;
    scene.add(ojo2)

    nariz = new THREE.Mesh(
        new THREE.ConeGeometry(1, 5, 6),
        new THREE.MeshPhongMaterial({ color: 0xFF6400 })
    )
    nariz.castShadow = true;
    nariz.receiveShadow = true;
    nariz.position.y = 15;
    nariz.position.z = 6;
    nariz.rotation.x = Math.PI / 2;

    scene.add(nariz)


    boca1 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.3, 25, 25),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    boca1.castShadow = true;
    boca1.receiveShadow = true;
    boca1.position.y = 14;
    boca1.position.z = 4.5;
    boca1.position.x = 2.5;
    scene.add(boca1)

    boca2 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.3, 25, 25),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    boca2.castShadow = true;
    boca2.receiveShadow = true;
    boca2.position.y = 14;
    boca2.position.z = 4.5;
    boca2.position.x = -2.5;
    scene.add(boca2)

    boca3 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.3, 25, 25),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    boca3.castShadow = true;
    boca3.receiveShadow = true;
    boca3.position.y = 13.4;
    boca3.position.z = 4.5;
    boca3.position.x = 1.8;
    scene.add(boca3)

    boca4 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.3, 25, 25),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    boca4.castShadow = true;
    boca4.receiveShadow = true;
    boca4.position.y = 13.4;
    boca4.position.z = 4.5;
    boca4.position.x = -1.8;
    scene.add(boca4)

    boca5 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.4, 25, 25),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    boca5.castShadow = true;
    boca5.receiveShadow = true;
    boca5.position.y = 13;
    boca5.position.z = 4.5;
    boca5.position.x = 0.6;
    scene.add(boca5)

    boca6 = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.4, 25, 25),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    boca6.castShadow = true;
    boca6.receiveShadow = true;
    boca6.position.y = 13;
    boca6.position.z = 4.5;
    boca6.position.x = -0.6;
    scene.add(boca6)


    brazo1 = new THREE.Mesh(
        new THREE.CylinderBufferGeometry(0.4, 0.4, 10, 32),
        new THREE.MeshPhongMaterial({ color: 0x714229 })
    )
    brazo1.castShadow = true;
    brazo1.receiveShadow = true;
    brazo1.position.y = 11;
    brazo1.position.z = 0;
    brazo1.position.x = 9;
    brazo1.rotation.z = -Math.PI / 4;

    scene.add(brazo1)

    brazo1a = new THREE.Mesh(
        new THREE.CylinderBufferGeometry(0.3, 0.3, 4, 32),
        new THREE.MeshPhongMaterial({ color: 0x714229 })
    )
    brazo1a.castShadow = true;
    brazo1a.receiveShadow = true;
    brazo1a.position.y = 13;
    brazo1a.position.z = 0;
    brazo1a.position.x = 10;
    brazo1a.rotation.z = -Math.PI / 8;

    scene.add(brazo1a)


    brazo2 = new THREE.Mesh(
        new THREE.CylinderBufferGeometry(0.4, 0.4, 10, 32),
        new THREE.MeshPhongMaterial({ color: 0x714229 })
    )
    brazo2.castShadow = true;
    brazo2.receiveShadow = true;
    brazo2.position.y = 11;
    brazo2.position.z = 0;
    brazo2.position.x = -9;
    brazo2.rotation.z = Math.PI / 4;
    scene.add(brazo2)

    brazo2a = new THREE.Mesh(
        new THREE.CylinderBufferGeometry(0.3, 0.3, 4, 32),
        new THREE.MeshPhongMaterial({ color: 0x714229 })
    )
    brazo2a.castShadow = true;
    brazo2a.receiveShadow = true;
    brazo2a.position.y = 13;
    brazo2a.position.z = 0;
    brazo2a.position.x = -10;
    brazo2a.rotation.z = Math.PI / 8;

    scene.add(brazo2a)

    sombrero = new THREE.Mesh(
        new THREE.CylinderBufferGeometry(4, 4, 4, 32),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    sombrero.castShadow = true;
    sombrero.receiveShadow = true;
    sombrero.position.y = 20;
    sombrero.position.z = 0;
    sombrero.position.x = 0;
    scene.add(sombrero)


    sombrero2 = new THREE.Mesh(
        new THREE.CylinderBufferGeometry(6, 6, 1, 32),
        new THREE.MeshPhongMaterial({ color: 0x000000 })
    )
    sombrero2.castShadow = true;
    sombrero2.receiveShadow = true;
    sombrero2.position.y = 18;
    sombrero2.position.z = 0;
    sombrero2.position.x = 0;
    sombrero2.rotation.z = Math.PI / 50;

    scene.add(sombrero2)








    //render
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1280, 720);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicshadowMap;

    //camera
    camera = new THREE.PerspectiveCamera(90, 100, 0.1, 1000);
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 80000);
    camera.position.set(-2, 8, 48);
    camera.lookAt(new THREE.Vector3(0, 10.8, 0))
        //camara controls
    cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
    cameraControls.target.set(0, 0, 0);

    document.body.appendChild(renderer.domElement);

    animate();


}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera)

}



window.onload = init;
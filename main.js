let scene, camera, renderer;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x333333);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100000);
    camera.position.x = 800;
    camera.position.y = 900;
    camera.position.z = 1000;

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();
    })

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

    hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    // directionalLight = new THREE.DirectionalLight(0xffffff, 40);
    // directionalLight.position.set(0, 1, 0);
    // directionalLight.castShadow = true;
    // scene.add(directionalLight);
    // light = new THREE.PointLight(0xc4c4c4, 10);
    // light.position.set(0, 300, 500);
    // scene.add(light);
    // light2 = new THREE.PointLight(0xFFFFFF, 2);
    // light2.position.set(500, 100, 0);
    // scene.add(light2);

    document.body.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load('car/scene.gltf', function (gltf) {
        tree = gltf.scene.children[0];
        tree.scale.set(2, 2, 2);
        scene.add(gltf.scene);
        animate();
    });
}
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();
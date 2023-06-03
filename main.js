const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 ); scene.add( directionalLight );

let phase = 0;
camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    phase += 0.05; 
    camera.position.y = 2 + Math.sin(phase);

	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}
animate();
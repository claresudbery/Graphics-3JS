// Load a texture
const texture_clare = new THREE.TextureLoader().load( "Clare-lockdown-square.jpg" );
const texture_behaviour = new THREE.TextureLoader().load( "good-behaviour.jpg" );
const texture_checkered = new THREE.TextureLoader().load( "checkered.png" );
const texture_know_nothing = new THREE.TextureLoader().load( "i-know-nothing.jpg" );
const texture_kittens = new THREE.TextureLoader().load( "kittens-with-guns.jpg" );
const texture_oscar = new THREE.TextureLoader().load( "oscar_thinking.jpeg" );
const texture = texture_oscar;

// Create a scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create a geometry
// Create a box (cube) of 10 width, length, and height
const geometry = new THREE.BoxGeometry( 3, 3, 3 );
// Create a MeshPhongMaterial with a color green(?)
// Phong shading was invented by a guy called Phong - you get a gradient linearly interpolated??
const flatMaterial = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );

// Create a MeshBasicMaterial with a loaded texture
const texturedMaterial = new THREE.MeshBasicMaterial( { map: texture} );

// Combine the geometry and material into a mesh
const cube = new THREE.Mesh( geometry, texturedMaterial );
// Add the mesh to the scene
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
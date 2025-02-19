const workoutList = [];

function addWorkout() {
    const workoutType = document.getElementById('workoutType').value;
    const duration = document.getElementById('duration').value;

    if (workoutType && duration) {
        const workout = {
            type: workoutType,
            duration: Number(duration),
            date: new Date().toLocaleDateString()
        };

        workoutList.push(workout);
        updateWorkoutList();
        add3dRepresentation(workout);

        // Clear input fields
        document.getElementById('workoutType').value = '';
        document.getElementById('duration').value = '';
    } else {
        alert('Please enter both workout type and duration.');
    }
}

function updateWorkoutList() {
    const workoutListElement = document.getElementById('workoutList');
    workoutListElement.innerHTML = '';

    workoutList.forEach(workout => {
        const listItem = document.createElement('li');
        listItem.textContent = `${workout.date} - ${workout.type}: ${workout.duration} minutes`;
        workoutListElement.appendChild(listItem);
    });
}

// Three.js Setup
const container = document.getElementById('3dContainer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

camera.position.z = 10;

// Adjust renderer size and camera aspect ratio when the window is resized
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

function add3dRepresentation(workout) {
    let geometry;
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Create different 3D shapes for different workout types
    switch (workout.type.toLowerCase()) {
        case 'running':
            geometry = new THREE.CylinderGeometry(1, 1, workout.duration / 10, 32);
            break;
        case 'cycling':
            geometry = new THREE.TorusGeometry(workout.duration / 20, 0.5, 16, 100);
            break;
        case 'swimming':
            geometry = new THREE.SphereGeometry(workout.duration / 20, 32, 32);
            break;
        default:
            geometry = new THREE.BoxGeometry(1, workout.duration / 10, 1);
            break;
    }

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() * 10 - 5, 0, Math.random() * 10 - 5);
    scene.add(mesh);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

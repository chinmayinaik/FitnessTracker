### 3D Workout Visualizer Project

#### Project Overview:
The **3D Workout Visualizer** is a web-based application designed to help users track their workouts and visualize them in a 3D space using the Three.js library. This project combines HTML, CSS, and JavaScript to create an interactive and engaging way for users to log their exercise routines and see them represented as various 3D shapes.

#### Features:
1. **Workout Logging:**
   - Users can input the type and duration of their workouts.
   - Each workout entry is recorded along with the date.

2. **Interactive Workout List:**
   - Display a list of logged workouts with the workout type, duration, and date.
   - Automatically updates as new workouts are added.

3. **3D Visualization:**
   - Each workout type is represented by a different 3D shape.
     - Running: Represented by a cylinder.
     - Cycling: Represented by a torus.
     - Swimming: Represented by a sphere.
     - Other workout types: Represented by a box.
   - The size of the shapes corresponds to the duration of the workout.
   - Shapes are dynamically added to a 3D scene using the Three.js library.
   - The 3D scene is rendered and displayed in a container element on the webpage.

4. **Responsive Design:**
   - The 3D scene adjusts to the size of the container, ensuring a seamless user experience on different devices and screen sizes.

#### Technical Details:
- **HTML:** Provides the structure of the webpage, including input fields for logging workouts, a list to display logged workouts, and a container for the 3D visualization.
- **CSS:** Styles the webpage, ensuring a clean and user-friendly interface.
- **JavaScript:** Handles the functionality of logging workouts, updating the workout list, and rendering the 3D visualizations.
  - **Three.js:** A powerful 3D library used to create and render the 3D shapes in the visualization.

#### Usage:
1. Enter the workout type and duration in the provided input fields.
2. Click the "Add Workout" button to log the workout and add it to the list.
3. The workout will be displayed in the list and visualized as a 3D shape in the container.

This project is a great example of how modern web technologies can be used to create interactive and visually appealing applications. It demonstrates the use of JavaScript for DOM manipulation and integrating a 3D library to enhance the user experience.

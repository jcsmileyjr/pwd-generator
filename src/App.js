import "./App.css";

/** TODO
 * Setup the background color - DONE
 * Setup general layout (input, slider, checkboxs)
 * Setup mobile and desktop view
 * Setup the structure elements
 * Add general styles
 * Test responsive design
 * Add state and functionality for input
 * Functionality for copy button
 * Add state and functionality for slider
 * Link Slider and input functionality
 * "Include Symbol" functionality
 * etc. for each checkbox
 *
 * @returns
 */
function App() {
  return (
    <main className="App">
      <div className="passwordInput--container">
        Password Input Container
      </div>
      <div className="passwordSlider--container">
        Password Slider Container
      </div>
      <div className="passwordCheckboxs--container">
        Password Checkboxes Container
      </div>
    </main>
  );
}

export default App;

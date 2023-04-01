import "./App.css";
import CopyIcon from './assets/copy.png';

/** TODO
 * Setup the background color - DONE
 * Setup general layout (input, slider, checkboxs) - DONE
 * Setup mobile and desktop view - DONE
 * Setup the structure elements - DONE
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
 * 
 * Resources:
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_rangeslider
 */
function App() {
  return (
    <main>
      <div className="passwordInput--container">
        <input type="text" className="input--style" />
        <img src={CopyIcon} className="copyIcon--style" alt="Clickable button to copy password to clipboard" />
      </div>
      <div className="passwordSlider--container">
        <input type="range" min="1" max="15" value="9" className="slider" />
        <p className="charaterText--style">12 characters</p>
      </div>
      <div className="passwordCheckboxs--container">
        Password Checkboxes Container
      </div>
    </main>
  );
}

export default App;

import "./App.css";
import CopyIcon from './assets/copy.png';

/** TODO
 * Setup the background color - DONE
 * Setup general layout (input, slider, checkboxs) - DONE
 * Setup mobile and desktop view - DONE
 * Setup the structure elements - DONE
 * Add general styles
 * Test responsive design
 * Add initial tests (should pass)
 * Add functional tests (should fail)
 * Add state and functionality for input
 *  - onChange
 * Functionality for copy button
 * Add state and functionality for slider
 * Link Slider and input functionality
 * "Include Symbol" functionality
 * etc. for each checkbox
 * 
 * Resources:
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_rangeslider
 * https://moderncss.dev/pure-css-custom-checkbox-style/
 */
function App() {
  return (
    <main>
      <div className="passwordInput--container">
        <input type="text" className="input--style" name="pwd-viewer" />
        <img src={CopyIcon} className="copyIcon--style" alt="Clickable button to copy password to clipboard" />
      </div>
      <div className="passwordSlider--container">
        <input type="range" min="1" max="15" value="9" className="slider" name="pwd-slider" />
        <p className="charaterText--style">12 characters</p>
      </div>
      <div className="passwordCheckboxs--container">
        <label htmlFor="symbolCheckbox">
          <input type="checkbox" name="symbolCheckbox" />
          Include Symbols <span className="charater--style">(@#$%)</span>
        </label>
        <label htmlFor="numberCheckbox">
          <input type="checkbox" name="numberCheckbox" />
          Include Numbers <span className="charater--style">(1234)</span>
        </label>
        <label htmlFor="lowerCaseCheckbox">
          <input type="checkbox" name="lowerCaseCheckbox" />
          Include Lowercase Characters <span className="charater--style">(abcd)</span> 
        </label>
        <label htmlFor="upperCaseCheckbox">
          <input type="checkbox" name="upperCaseCheckbox" />
          Include UpperCase Characters <span className="charater--style">(ABCD)</span> 
        </label>
        <label htmlFor="excludeCheckbox">
          <input type="checkbox" name="excludeCheckbox" />
          Exclude Similar Characters <span className="charater--style">(ABCD)</span> 
        </label>
      </div>
    </main>
  );
}

export default App;

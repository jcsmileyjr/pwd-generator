import "./App.css";
import CopyIcon from './assets/copy.png';
import {useState} from "react";

/** TODO
 * Setup the background color - DONE
 * Setup general layout (input, slider, checkboxs) - DONE
 * Setup mobile and desktop view - DONE
 * Setup the structure elements - DONE
 * Test responsive design - DONE
 * Add initial tests (should pass) - DONE
 *  1. That the UI elements are displayed
 * Add functional tests (should fail) - DONE
 *  1. Test that the output changes
 * Add state - DONE
 * Add general styles
 *  1. Missing checkbox styles
 * functionality for input
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

  const [symbolCheckbox, setSymbolCheckbox] = useState(false);
  const [numberCheckbox, setNumberCheckbox] = useState(false);
  const [lowerCaseCheckbox, setLowerCaseCheckbox] = useState(false);
  const [upperCaseCheckbox, setUpperCaseCheckbox] = useState(false);
  const [excludeCheckbox, setExcludeCheckbox] = useState(false);
  const [displayedPassword, setDisplayedPassword] = useState("HelloWorld")

  return (
    <main>
      <div className="passwordInput--container">
        <p type="text" aria-label="view-password" className="input--style">{displayedPassword}</p>
        <img src={CopyIcon} className="copyIcon--style" alt="Clickable button to copy password to clipboard" />
      </div>
      <div className="passwordSlider--container">
        <input type="range" aria-label="password character range" min="1" max="15" value="9" className="slider" name="pwd-slider" />
        <p className="charaterText--style">12 characters</p>
      </div>
      <div className="passwordCheckboxs--container">
        <label htmlFor="symbolCheckbox">
          <input type="checkbox" id="symbolCheckbox" onChange={() => setSymbolCheckbox(!symbolCheckbox)} />
          Include Symbols <span className="charater--style">(@#$%) </span>
        </label>
        <label htmlFor="numberCheckbox">
          <input type="checkbox" id="numberCheckbox" onChange={() => setNumberCheckbox(!numberCheckbox)} />
          Include Numbers <span className="charater--style">(1234)</span>
        </label>
        <label htmlFor="lowerCaseCheckbox">
          <input type="checkbox" id="lowerCaseCheckbox" onChange={() => setLowerCaseCheckbox(!lowerCaseCheckbox)} />
          Include Lowercase Characters <span className="charater--style">(abcd)</span> 
        </label>
        <label htmlFor="upperCaseCheckbox">
          <input type="checkbox" id="upperCaseCheckbox" onChange={() => setUpperCaseCheckbox(!upperCaseCheckbox)} />
          Include UpperCase Characters <span className="charater--style">(ABCD)</span> 
        </label>
        <label htmlFor="excludeCheckbox">
          <input type="checkbox" id="excludeCheckbox" onChange={() => setExcludeCheckbox(!excludeCheckbox)} />
          Exclude Similar Characters <span className="charater--style">(ABCD)</span> 
        </label>
      </div>
    </main>
  );
}

export default App;

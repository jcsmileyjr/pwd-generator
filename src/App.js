import "./App.css";
import CopyIcon from './assets/copy.png';
import {useState, useEffect} from "react";

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
 * Functionality for inputs
 * Functionality for copy button
 * Add state and functionality for slider - DONE
 * Link Slider and input functionality
 * "Include Symbol" functionality
 * etc. for each checkbox
 * 
 * Resources:
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_rangeslider
 * https://moderncss.dev/pure-css-custom-checkbox-style/
 * https://relatablecode.com/how-to-make-a-simple-slider-component-in-react
 * 
 */
function App() {

  const [symbolCheckbox, setSymbolCheckbox] = useState(false);
  const [numberCheckbox, setNumberCheckbox] = useState(false);
  const [upperCaseCheckbox, setUpperCaseCheckbox] = useState(false);
  const [excludeCheckbox, setExcludeCheckbox] = useState(false);
  const [displayedPassword, setDisplayedPassword] = useState("Test");
  const [characterLimit, setCharacterLimit] = useState(10);

  useEffect(() => {
    // Returns a base word based on the character limit and revised based on the value of checkboxes 
    const updatedPassword = () => {
      let baseword = 'excommunication';
      let excludedPositions = [];
      
      //return number of letters based on the characterLimit state
      baseword = baseword.substring(0, characterLimit);

      // if the symbol checkbox is checked, randomly change one position with a random symbol. Save that position to be excluded later
      if(symbolCheckbox){
        const randomIndex = checkRandomIndex(excludedPositions);
        excludedPositions.push(randomIndex);
        baseword = includeSymbolInPassword(baseword, randomIndex);
      }

      if(numberCheckbox){
        const randomIndex = checkRandomIndex(excludedPositions);
        excludedPositions.push(randomIndex);
        baseword = includeNumbersInPassword(baseword, randomIndex, excludedPositions);
      }

      if(upperCaseCheckbox){
        const randomIndex = checkRandomIndex(excludedPositions);
        excludedPositions.push(randomIndex);
        baseword = includeUpperCaseInPassword(baseword, randomIndex, excludedPositions);
      }

      if(excludeCheckbox){
        baseword = excludeSimilarCharactersInPassword(baseword);
      }

      setDisplayedPassword(baseword);
    }

    updatedPassword();
    
  },[symbolCheckbox, numberCheckbox, upperCaseCheckbox, excludeCheckbox, characterLimit])

  const checkRandomIndex = (excludeArray) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * characterLimit);
      console.log(randomIndex)
    }
    while(excludeArray.includes(randomIndex) === true);
    return randomIndex;
  }

  const includeSymbolInPassword = (originalBaseWord, randomIndex) => {
    const symbols = ["@", "#", "$", "%"];
    const randomSymbol = symbols[Math.floor(Math.random() * 4)];
    return replacecharacter(originalBaseWord, randomIndex, randomSymbol);
  }

  const includeNumbersInPassword = (originalBaseWord, randomIndex) => {
    const numbers = [1,2,3,4,5,6,7,8,9];
    let randomNumber  = numbers[Math.floor(Math.random() * numbers.length)]
    return replacecharacter(originalBaseWord, randomIndex, randomNumber);
  }

  const includeUpperCaseInPassword = (originalBaseWord, randomIndex) => {
    let oldLetter = originalBaseWord[randomIndex].toUpperCase();
    return replacecharacter(originalBaseWord, randomIndex, oldLetter);
  }

  const excludeSimilarCharactersInPassword = (originalBaseWord) => {
    let unsortedArrayOfBaseWord = originalBaseWord.split("");
    let currentfound = [];

    unsortedArrayOfBaseWord.filter((letter) => {
      if(currentfound.includes(letter) === false){
        currentfound.push(letter);
      }
    })

    return currentfound.join("");
  }

  const replacecharacter = (originalWord, index, replacement) => {
    return originalWord.substring(0, index) + replacement + originalWord.substring(index + 1);
  }

  // const getRandomCharacter = ()=> {
  //   return Math.floor(Math.random() * characterLimit);
  // }

  return (
    <main>
      <div className="passwordInput--container">
        <p type="text" aria-label="view-password" className="input--style">{displayedPassword}</p>
        <img src={CopyIcon} className="copyIcon--style" alt="Clickable button to copy password to clipboard" />
      </div>
      <div className="passwordSlider--container">
        <input type="range" aria-label="password character range" min="5" max="15" className="slider" name="pwd-slider" onChange={(e) => setCharacterLimit(e.target.value)} value={characterLimit} />
        <p className="charaterText--style">{characterLimit} characters</p>
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

//Please read the readme file i have added proper documentation which include a brief document explaining the architecture
//of the project and design decisions
// Importing necessary dependencies from React and other packages
import React, { useState, useEffect } from "react";
import Button from "./components/Button"; // Custom Button component
import Confetti from "react-confetti-explosion"; // Confetti effect for celebrations
import "./App.css"; // Importing CSS for styling
import { Textfit } from "react-textfit"; // Text fitting component for dynamic font size

function App() {
  // State for the current input data of the calculator, updated as user inputs data
  const [data, setData] = useState("");
  
  // State for the memory storage of the calculator, used to store and recall values
  const [memory, setMemory] = useState(0);
  
  // State to control the display of confetti animation, shown based on specific conditions
  const [showConfetti, setShowConfetti] = useState(false);
  
  // State to toggle secondary functions (e.g., advanced mathematical functions)
  const [isSecond, setIsSecond] = useState(false);
  
  // State to toggle between degrees and radians for trigonometric calculations
  const [inDegrees, setInDegrees] = useState(true);
  
  // State to toggle between light and dark themes of the calculator interface
  const [theme, setTheme] = useState("light");
  
  // State to store the history of calculations performed by the user
  const [history, setHistory] = useState([]);

  // Effect to show confetti when the data contains both 5 and 6
const checkConfetti = () => {
  // Regular expression to match if both 5 and 6 are present in the data, in any order
  const regex = /\b5\b.*\b6\b|\b6\b.*\b5\b/;
  
  // Test if the current data matches the regex
  if (regex.test(data)) {
    // If true, set showConfetti to true to trigger the confetti animation
    setShowConfetti(true);
    
    // Hide the confetti animation after 3 seconds
    setTimeout(() => setShowConfetti(false), 3000);
  }
};

// Effect to update the document class and body background color when the theme changes
useEffect(() => {
  // Set the document's root element class to the current theme
  document.documentElement.className = theme;
  
  // Change the body's background color based on the current theme
  document.body.style.backgroundColor = `${theme === 'dark' ? '#1a202c' : '#f7fafc'}`;
}, [theme]); // Run this effect whenever the theme changes

// Function to handle button clicks and update the current data
function handleButton(e) {
  // Concatenate the button's value to the current data
  setData(data.concat(e.target.value));
}

// Function to evaluate the current expression, update data and history, and check for confetti
function calculation() {
  try {
    // Evaluate the expression in data and convert the result to a string
    const result = eval(data).toString();
    
    // Check if the confetti should be shown based on the result
    checkConfetti();
    
    // Update the history state with the current calculation
    setHistory([...history, `${data} = ${result}`]);
    
    // Update the data state with the result
    setData(result);
  } catch (error) {
    // If there's an error during evaluation, set data to "Error"
    setData("Error");
  }
}


  // Function to calculate percentage
  function percentage() {
    const result = (parseFloat(data) / 100).toString();
    setData(result);
  }

  // Function to clear all data
  function clear_all() {
    setData("");
  }

  // Function to change the sign of the current data
  function change_sign() {
    const result = (parseFloat(data) * -1).toString();
    setData(result);
  }

  // Function to clear memory
  function memoryClear() {
    setMemory(0);
  }

  // Function to add current data to memory
  function memoryAdd() {
    setMemory(memory + parseFloat(data));
    setData("");
  }

  // Function to subtract current data from memory
  function memorySubtract() {
    setMemory(memory - parseFloat(data));
    setData("");
  }

  // Function to recall memory value
  function memoryRecall() {
    setData(memory.toString());
  }

  // Function to toggle secondary functions
  function toggleSecond() {
    setIsSecond(!isSecond);
  }

  // Function to toggle between radians and degrees
  function toggleRadDeg() {
    setInDegrees(!inDegrees);
  }

  // Function to calculate square
  function square() {
    const result = Math.pow(parseFloat(data), 2).toString();
    setData(result);
  }

  // Function to calculate cube
  function cube() {
    const result = Math.pow(parseFloat(data), 3).toString();
    setData(result);
  }

  // Function to calculate power of y
  function powerY() {
    const [base, exponent] = data.split("^");
    const result = Math.pow(parseFloat(base), parseFloat(exponent)).toString();
    setData(result);
  }

  // Function to calculate exponent
  function exp() {
    const result = Math.exp(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate power of 10
  function tenPower() {
    const result = Math.pow(10, parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate reciprocal
  function reciprocal() {
    const result = (1 / parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate square root
  function sqrt() {
    const result = Math.sqrt(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate cube root
  function cbrt() {
    const result = Math.cbrt(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate y root of x
  function yRootX() {
    const [y, x] = data.split("√");
    const result = Math.pow(parseFloat(x), 1 / parseFloat(y)).toString();
    setData(result);
  }

  // Function to calculate natural logarithm
  function ln() {
    const result = Math.log(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate base-10 logarithm
  function logTen() {
    const result = Math.log10(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate factorial
  function factorial() {
    const n = parseInt(data);
    if (n === 0 || n === 1) {
      setData("1");
      return;
    }
    let result = 1;
    for (let i = n; i > 1; i--) {
      result *= i;
    }
    setData(result.toString());
  }

  // Function to calculate sine
  function sin() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.sin(angle * (Math.PI / 180)) : Math.sin(angle);
    setData(result.toString());
  }

  // Function to calculate cosine
  function cos() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.cos(angle * (Math.PI / 180)) : Math.cos(angle);
    setData(result.toString());
  }

  // Function to calculate tangent
  function tan() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.tan(angle * (Math.PI / 180)) : Math.tan(angle);
    setData(result.toString());
  }

  // Function to calculate hyperbolic sine
  function sinh() {
    const result = Math.sinh(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate hyperbolic cosine
  function cosh() {
    const result = Math.cosh(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate hyperbolic tangent
  function tanh() {
    const result = Math.tanh(parseFloat(data)).toString();
    setData(result);
  }

  // Function to insert the value of Euler's number
  function insertE() {
    setData(data.concat(Math.E.toString()));
  }

  // Function to insert the value of Pi
  function insertPi() {
    setData(data.concat(Math.PI.toString()));
  }

  // Function to generate a random number
  function generateRandom() {
    const result = Math.random().toString();
    setData(result);
  }

  // Function to insert scientific notation
  function scientificNotation() {
    setData(data.concat("e"));
  }

  // Function to toggle the theme between light and dark
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    // Main container div with dynamic classes based on the theme and screen size
    <div className={`container ${theme} h-screen w-screen overflow-hidden`}>
      
      {/* // Calculator wrapper div */}
      <div className="calculator">
        
      {/* <div className="w-1 h-1 bg-red-500"></div>
      <div className="w-1 h-1 bg-yellow"></div>
      <div className="w-1 h-1 bg-green-500"></div> */}
         {/* Textfit component for dynamically adjusting font size based on content */}

         <div className=" flex gap-1 -mb-5 ml-2">
              <div className="w-1 h-1 bg-red-500 rounded-full w-3 h-3"></div>
              <div className="w-1 h-1 bg-yellow rounded-full w-3 h-3"></div>
              <div className="w-1 h-1 bg-green-500 rounded-full w-3 h-3"></div>
           </div>
        <Textfit className={`display w-[100%] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] ${theme === 'dark' ? 'bg-white' : 'bg-dark_grey text-white'}`}>
          {data ? data : '0'}
           {/* // Display the current data or '0' if data is empty */}
           
        </Textfit>
        
        {/* // Render the Confetti component if showConfetti is true */}
        {showConfetti && <Confetti />}
        
        {/* // Custom Button component with all the necessary props and event handlers */}
        <Button
          handleButton={handleButton} // Function to handle button clicks
          calculation={calculation} // Function to evaluate expressions
          percentage={percentage} // Function to calculate percentage
          change_sign={change_sign} // Function to change the sign of the current data
          clear_all={clear_all} // Function to clear all data
          memoryClear={memoryClear} // Function to clear memory
          memoryAdd={memoryAdd} // Function to add current data to memory
          memorySubtract={memorySubtract} // Function to subtract current data from memory
          memoryRecall={memoryRecall} // Function to recall memory value
          toggleSecond={toggleSecond} // Function to toggle secondary functions
          isSecond={isSecond} // State indicating if secondary functions are enabled
          square={square} // Function to calculate square
          cube={cube} // Function to calculate cube
          powerY={powerY} // Function to calculate power of y
          exp={exp} // Function to calculate exponent
          tenPower={tenPower} // Function to calculate power of 10
          reciprocal={reciprocal} // Function to calculate reciprocal
          sqrt={sqrt} // Function to calculate square root
          cbrt={cbrt} // Function to calculate cube root
          yRootX={yRootX} // Function to calculate y root of x
          ln={ln} // Function to calculate natural logarithm
          logTen={logTen} // Function to calculate base-10 logarithm
          factorial={factorial} // Function to calculate factorial
          sin={sin} // Function to calculate sine
          cos={cos} // Function to calculate cosine
          tan={tan} // Function to calculate tangent
          sinh={sinh} // Function to calculate hyperbolic sine
          cosh={cosh} // Function to calculate hyperbolic cosine
          tanh={tanh} // Function to calculate hyperbolic tangent
          insertE={insertE} // Function to insert the value of Euler's number
          insertPi={insertPi} // Function to insert the value of Pi
          generateRandom={generateRandom} // Function to generate a random number
          scientificNotation={scientificNotation} // Function to insert scientific notation
          toggleRadDeg={toggleRadDeg} // Function to toggle between radians and degrees
          toggleTheme={toggleTheme} // Function to toggle between light and dark themes
          theme={theme} // Current theme state
        />
      </div>
      
      {/* // History section to display the history of calculations */}
      <div className="history relative overflow-x-hidden">
        <h2 className={`${theme === "light" ? 'dark' : 'fixed z-10'}`}>History</h2>
        <ul className="absolute top-10 left-2">
          {history.map((item, index) => (
            <li key={index}>{item}</li> // Map through history array and display each item
          ))}
        </ul>
      </div>
    </div>
  );
}
  export default App;
  
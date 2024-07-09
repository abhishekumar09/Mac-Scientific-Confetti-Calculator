import React from 'react';
// Assuming the CSS is saved in Button.css

// Button component receiving various props for handling calculator functionalities
const Button = ({
  handleButton,       // Function to handle button clicks
  calculation,        // Function to evaluate expressions
  percentage,         // Function to calculate percentage
  change_sign,        // Function to change the sign of the current data
  clear_all,          // Function to clear all data
  memoryClear,        // Function to clear memory
  memoryAdd,          // Function to add current data to memory
  memorySubtract,     // Function to subtract current data from memory
  memoryRecall,       // Function to recall memory value
  toggleSecond,       // Function to toggle secondary functions
  isSecond,           // State indicating if secondary functions are enabled
  square,             // Function to calculate square
  cube,               // Function to calculate cube
  powerY,             // Function to calculate power of y
  exp,                // Function to calculate exponent
  tenPower,           // Function to calculate power of 10
  reciprocal,         // Function to calculate reciprocal
  sqrt,               // Function to calculate square root
  cbrt,               // Function to calculate cube root
  yRootX,             // Function to calculate y root of x
  ln,                 // Function to calculate natural logarithm
  logTen,             // Function to calculate base-10 logarithm
  factorial,          // Function to calculate factorial
  sin,                // Function to calculate sine
  cos,                // Function to calculate cosine
  tan,                // Function to calculate tangent
  sinh,               // Function to calculate hyperbolic sine
  cosh,               // Function to calculate hyperbolic cosine
  tanh,               // Function to calculate hyperbolic tangent
  insertE,            // Function to insert the value of Euler's number
  insertPi,           // Function to insert the value of Pi
  generateRandom,     // Function to generate a random number
  scientificNotation, // Function to insert scientific notation
  toggleRadDeg,       // Function to toggle between radians and degrees
  toggleTheme,        // Function to toggle between light and dark themes
  theme,              // Current theme state
}) => {

  // List of all buttons to be rendered
  const buttons = [
    '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '/',
    '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '*',
    '¹/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-',
    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '=', 'Theme'
  ];

  return (
    // Container for the buttons with responsive grid layout
    <div className="grid grid-cols-10 md:grid-cols-10 h-[50vh] w-[100%] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]">
      {buttons.map((btn, index) => (
        // Individual button element with dynamic classes and event handling
        <button
          className={`border border-black text-[12px] md:font-normal md:text-xl ${theme === 'dark' ? 'bg-dark_grey text-white' : 'bg_white text-white'} ${
            index === 16 || index === 17 || index === 18 || index === 26 || index === 27 || index === 28 || index === 36 || index === 37 || index === 38 || index === 46 || index === 47 ? 'bg-light' : ''
          } ${index === 9 || index === 19 || index === 29 || index === 39 || index === 48 ? 'bg-yellow' : ''} ${
            index === 46 ? 'col-span-2' : ''
          } ${index === 49 ? 'col-span-10' : ''} hover:bg-gray-400`}
          key={index}
          value={btn}
          
          // OnClick event to handle button functionality based on button value
          onClick={(e) => {
            if (btn === 'C') clear_all();                   // Clear all data
            else if (btn === '+/-') change_sign();          // Change sign of data
            else if (btn === '%') percentage();             // Calculate percentage
            else if (btn === '=') calculation();            // Evaluate expression
            else if (btn === 'mc') memoryClear();           // Clear memory
            else if (btn === 'm+') memoryAdd();             // Add to memory
            else if (btn === 'm-') memorySubtract();        // Subtract from memory
            else if (btn === 'mr') memoryRecall();          // Recall memory
            else if (btn === '2nd') toggleSecond();         // Toggle secondary functions
            else if (btn === 'x²') square();                // Calculate square
            else if (btn === 'x³') cube();                  // Calculate cube
            else if (btn === 'xʸ') powerY();                // Calculate power of y
            else if (btn === 'eˣ') exp();                   // Calculate exponent
            else if (btn === '10ˣ') tenPower();             // Calculate power of 10
            else if (btn === '¹/x') reciprocal();           // Calculate reciprocal
            else if (btn === '²√x') sqrt();                 // Calculate square root
            else if (btn === '³√x') cbrt();                 // Calculate cube root
            else if (btn === 'ʸ√x') yRootX();               // Calculate y root of x
            else if (btn === 'ln') ln();                    // Calculate natural logarithm
            else if (btn === 'log₁₀') logTen();             // Calculate base-10 logarithm
            else if (btn === 'x!') factorial();             // Calculate factorial
            else if (btn === 'sin') sin();                  // Calculate sine
            else if (btn === 'cos') cos();                  // Calculate cosine
            else if (btn === 'tan') tan();                  // Calculate tangent
            else if (btn === 'e') insertE();                // Insert Euler's number
            else if (btn === 'EE') scientificNotation();    // Insert scientific notation
            else if (btn === 'Rad') toggleRadDeg();         // Toggle radians/degrees
            else if (btn === 'sinh') sinh();                // Calculate hyperbolic sine
            else if (btn === 'cosh') cosh();                // Calculate hyperbolic cosine
            else if (btn === 'tanh') tanh();                // Calculate hyperbolic tangent
            else if (btn === 'π') insertPi();               // Insert Pi
            else if (btn === 'Rand') generateRandom();      // Generate random number
            else if (btn === 'Theme') toggleTheme();        // Toggle theme
            else handleButton(e);                           // Handle other button clicks
          }}
        >
          {btn} 
          {/* // Display button label */}
        </button>
      ))}
    </div>
  );
};

export default Button;

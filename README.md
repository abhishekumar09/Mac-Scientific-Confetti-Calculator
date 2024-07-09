# macOS Calculator Clone
# Calculator Application

## Project Overview
This is a scientific calculator application built with React. It supports basic arithmetic operations, memory functions, and advanced scientific calculations like trigonometry, logarithms, and factorials. It also features a light/dark theme toggle and displays a confetti animation when certain conditions are met.

## Architecture
The application consists of the following main components:
- `App.js`: The main component that holds the state and renders the calculator interface.
- `Button.js`: A custom button component used to create the calculator buttons.
- `Confetti.js`: A third-party library used to display confetti animations.
- `App.css`: Contains the styles for the application.

### State Management
The application uses the `useState` and `useEffect` hooks from React to manage the state and side effects. The main state variables include:
- `data`: Stores the current input data of the calculator.
- `memory`: Stores the memory value of the calculator.
- `showConfetti`: Controls the display of the confetti animation.
- `isSecond`: Toggles secondary functions on the calculator.
- `inDegrees`: Toggles between degrees and radians for trigonometric calculations.
- `theme`: Toggles between light and dark themes.
- `history`: Stores the history of calculations.

## Design Decisions
- **React**: Chosen for its component-based architecture and state management capabilities.
- **Confetti Library**: Used for its ease of integration and visual appeal.
- **CSS**: Used for styling the application, with a focus on responsiveness and theme support.
- **Eval**: Used for evaluating arithmetic expressions. Although generally avoided due to security risks, it is used here with caution.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/utkarsh1code/MacOS-Scientific-Confetti-Calculator.git
2. Install dependencies: 
   ```bash
    npm install
3. Run the project:
   ```bash
    npm run dev

    
## Usage Instructions
- Use the buttons to input numbers and operations.
- Click the `=` button to evaluate the expression.
- Use the memory functions (MC, M+, M-, MR) to store and recall values.
- Toggle the secondary functions and theme using the respective buttons.
- The history of calculations is displayed on the right side of the screen.
- When the input contains both '3' and '4', a confetti animation is triggered.

## Features
- Arithmetic operations
- Memory functions
- Trigonometric calculations (in degrees and radians)
- Logarithmic and exponential functions
- Factorials and powers
- Light/Dark theme toggle
- Confetti animation for specific conditions




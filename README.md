# Smart Calculator

A modern, responsive calculator with basic arithmetic operations and a clean interface built with HTML, CSS, and JavaScript.

## Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Clean Interface**: Modern design with responsive layout
- **Error Handling**: Prevents invalid operations and division by zero
- **Keyboard Support**: Use your keyboard to input numbers and operations
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Clear Functionality**: Reset the calculator with a single click

## Project Structure

```
smart-calculator/
├── index.html          # Main HTML file
├── style.css          # CSS styles
├── script.js          # JavaScript logic
└── README.md          # This file
```

## Installation

No installation required! Simply open `index.html` in your web browser.

### For Development

If you want to modify the code:

1. Clone or download the project files
2. Open the project in your favorite code editor
3. Make changes to HTML, CSS, or JavaScript files
4. Open `index.html` in a browser to see your changes

## Usage

### Basic Operations

1. **Addition**: Click numbers, then `+`, then another number, then `=`
2. **Subtraction**: Click numbers, then `-`, then another number, then `=`
3. **Multiplication**: Click numbers, then `×`, then another number, then `=`
4. **Division**: Click numbers, then `÷`, then another number, then `=`

### Keyboard Support

- **Numbers**: 0-9
- **Operators**: `+`, `-`, `*`, `/`
- **Equals**: `=` or `Enter`
- **Clear**: `Escape` or `Delete`
- **Decimal**: `.`

### Example Calculation

To calculate `15 + 7`:
1. Click `1`, then `5`
2. Click `+`
3. Click `7`
4. Click `=` or press Enter
5. Result: `22` will be displayed

## Code Overview

### HTML Structure
The calculator has a clean, semantic structure with:
- Display area for current input and result
- Number buttons (0-9)
- Operation buttons (+, -, ×, ÷)
- Control buttons (Clear, Equals, Decimal)

### CSS Styling
- Modern gradient design with subtle shadows
- Responsive grid layout for buttons
- Hover and active states for better UX
- Smooth transitions for interactive elements

### JavaScript Logic
- Event listeners for button clicks and keyboard input
- Calculation functions for each operation
- Input validation and error handling
- State management for current operation and values

## Browser Compatibility

Works on all modern browsers including:
- Chrome 60+
- Firefox 55+
- Safari 10+
- Edge 79+

## License

This project is open source and available for personal and educational use.

## Contributing

Feel free to fork this project and submit pull requests with improvements.

## Troubleshooting

### Common Issues

1. **Calculator not responding**: Ensure JavaScript is enabled in your browser
2. **Buttons not working on mobile**: Try tapping instead of clicking
3. **Display shows "Error"**: You've attempted an invalid operation (like division by zero)

### Solutions

- Refresh the page to reset the calculator
- Use the Clear (C) button to reset current calculation
- Check browser console for JavaScript errors if issues persist

## Future Enhancements

Potential features for future versions:
- Memory functions (M+, M-, MR, MC)
- Scientific operations (square root, exponents, etc.)
- Theme switcher (light/dark mode)
- Calculation history
- Percentage calculations

---

Enjoy calculating!
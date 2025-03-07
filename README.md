# Calculator App

## Project Description
The Calculator App is a simple yet powerful application that allows users to perform basic arithmetic operations. It is designed to be user-friendly and efficient.

## Installation & Run Instructions
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the app
   ```bash
   npx expo start
   ```

## Folder Structure
- **app/**: Contains the main application files.
- **components/**: Contains reusable UI components.
  - **UI/**: Contains UI components like Display and CustomButton.
- **assets/**: Contains images and fonts used in the application.

## Component Documentation

### Display Component
- **Purpose**: Responsible for displaying the current input and result of the calculations.
- **Functionality**: Updates the displayed value based on user input and calculation results.
- **Props**:
  - `value`: The current value to be displayed (string).
- **Methods**: 
  - `updateDisplay(value)`: Updates the display with the new value.
- **Code Example**:
  ```jsx
  <Display value={currentValue} />
  ```
- **Stylesheet**: The associated stylesheet defines the layout and appearance of the display area.

### CustomButton Component
- **Purpose**: Represents a button in the calculator, handling user interactions.
- **Functionality**: Triggers actions based on user clicks.
- **Props**:
  - `label`: The text to be displayed on the button (string).
  - `onClick`: Function to be called when the button is clicked (function).
- **Methods**: 
  - `handleClick()`: Handles the button click event.
- **Code Example**:
  ```jsx
  <CustomButton label="1" onClick={() => handleButtonClick('1')} />
  ```
- **Stylesheet**: The associated stylesheet defines the button's appearance and hover effects.

## Functionalities
- Perform addition, subtraction, multiplication, and division.
- Clear the current input.
- Display results in real-time.

## Build Process
### Installation of EAS CLI
To install the EAS CLI, run:
```bash
npm install -g eas-cli
```

### Login
Log in to your EAS account:
```bash
eas login
```

### Build Configuration
Configure the build:
```bash
eas build:configure
```

### Production Build
To create a production build for Android, run:
```bash
eas build --platform android
```

### Preview Build
For preview builds, ensure your `eas.json` configuration includes:
```json
"preview": {
  "android": {
    "buildType": "apk"
  },
  "distribution": "internal",
  "channel": "preview"   
}
```
Then run:
```bash
eas build --platform android --profile preview
```

## Stylesheet Explanation
Each component has an associated stylesheet that defines its layout, colors, and other visual properties. The styles are modular and reusable across different components.

## Contribution Guidelines
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License Information
This project is licensed under the MIT License.

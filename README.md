```
# Utility Libraries Package

This package provides utility libraries for common operations in JavaScript.

## Installation

You can install the package via npm:

```bash
npm install utility-andsthislib-js
```

## Usage

```javascript
const { DateHelper, RandomDataGenerator } = require('utility-andsthislib-js');

// Get current date
const currentDate = DateHelper.getCurrentDate();

// Format date
const formattedDate = DateHelper.formatDate(currentDate);

// Generate random number between 1 and 100
const randomNumber = RandomDataGenerator.generateRandomNumber(1, 100);

// Generate random string with length 10
const randomString = RandomDataGenerator.generateRandomString(10);

console.log("Current Date:", formattedDate);
console.log("Random Number:", randomNumber);
console.log("Random String:", randomString);
```

## Features

- **DateHelper**: Provides methods for working with dates, such as getting the current date and formatting dates.
- **RandomDataGenerator**: Offers functions for generating random numbers and strings with customizable parameters.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

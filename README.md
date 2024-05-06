# Geolocation API

This package provides functionalities to interact with geolocation data in JavaScript.

## Installation

You can install the package via npm:

```bash
npm install geolocation-api
```

## Usage

### Getting User Location

To get the user's location based on their IP address:

```javascript
const { getUserLocation } = require('geolocation-api');

getUserLocation().then(location => {
    console.log('User location:', location);
});
```

The `getUserLocation` function returns an object containing the user's city, country, and coordinates.

### Calculating Distance

To calculate the distance between two sets of coordinates:

```javascript
const { calculateDistance } = require('geolocation-api');

const coord1 = { lat: 40.7128, lon: -74.006 };
const coord2 = { lat: 34.0522, lon: -118.2437 };

const distance = calculateDistance(coord1, coord2);
console.log('Distance:', distance, 'meters');
```

The `calculateDistance` function takes two sets of coordinates (latitude and longitude) as input and returns the distance between them in meters.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
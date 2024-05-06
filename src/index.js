// geolocation-api.js

const axios = require('axios');

// Function to get the user's location based on their IP address
async function getUserLocation() {
    try {
        const response = await axios.get('http://ip-api.com/json');
        const { city, country, lat, lon } = response.data;
        return { city, country, coordinates: { lat, lon } };
    } catch (error) {
        console.error('Error fetching user location:', error);
        return null;
    }
}

// Function to calculate the distance between two sets of coordinates
function calculateDistance(coord1, coord2) {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = coord1.lat * Math.PI / 180; // φ, λ in radians
    const φ2 = coord2.lat * Math.PI / 180;
    const Δφ = (coord2.lat - coord1.lat) * Math.PI / 180;
    const Δλ = (coord2.lon - coord1.lon) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in meters
    return distance;
}

module.exports = {
    getUserLocation,
    calculateDistance
};
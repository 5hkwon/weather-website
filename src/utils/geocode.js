const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiNWhrd29uIiwiYSI6ImNqeHB1bm1rdTBsb28zZGxmd2NqZmo0a3AifQ.iKaXFYR0VmECvYKeTpOQsA&limit=1'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to services', {})
        } else if (body.features.length === 0) {
            callback('Wrong address. Try again anothor!', {})
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
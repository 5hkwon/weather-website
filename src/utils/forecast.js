const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/720f456a6ec1fba73b3abe57c1e58f77/' + latitude +  ',' + longitude + '?units=si'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to wether services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.') 
        }
    })
}

module.exports = forecast
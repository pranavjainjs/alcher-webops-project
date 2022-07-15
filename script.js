// document.body.addEventListener('load', findLocation);

const ACCESS_TOKEN = 'pk.8abb152d62923fd639258172ddc3175f';
const locTag = document.querySelector('#location');

const findLocation = () => {

    const success = (position) => {
        console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log(lat + ' ' + lon)

        const geoApiUrl = 'https://us1.locationiq.com/v1/reverse?key=' + ACCESS_TOKEN + '&lat=' + lat + '&lon=' + lon + '&format=json';
    
        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            locTag.innerHTML = "<b>" + data.address.city + ', ' + data.address.postcode + "</b>";
        })
    }

    

    const error = () => {
        locTag.textContent = 'gib me location access'
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

window.addEventListener('load', findLocation);
document.getElementById('location').addEventListener('click', findLocation);

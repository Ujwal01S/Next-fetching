console.log('location file loaded');

function getLocation() {
    if(navigator.getLocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    }else{
        X.innerHTML = 'Geolocation is not supported by this browser';
    }
}

function showPosition(position) {
    console.log(position);
}

getLocation();
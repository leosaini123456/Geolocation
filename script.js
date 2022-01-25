// api : a9215c62232541d7a644fdf1d6eea9c1
// https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=a9215c62232541d7a644fdf1d6eea9c1
// website  https://opencagedata.com/api


let loc  = document.getElementById("location");

loc.addEventListener("click",function()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else{
        location.innerHTML = `Your Browzer Not Supported`;
    }

});

function onSuccess(position)
{
    console.log(position);
    let long = position.coords.longitute;
    let lat = position.coords.latitude;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=a9215c62232541d7a644fdf1d6eea9c1`)
    .then(res => res.json())
    .then(result => 
        {
            let state = result.results[0].components.state;
            let country = result.results[0].components.country;
            let postcode = result.results[0].components.postcode;

            loc.innerHTML = `${state} ${country} ${postcode} `
        }) 
}
function onError(error)
{
    // console.log(error);
    if(error.code == 1)
    {
        loc.innerHTML = `Please Allow Your Browzer For Pop-up`;
    }
}   
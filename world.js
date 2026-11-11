document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#lookup').addEventListener('click', function(){ // deals with the country lookup button
        country_lookup('country');
    })

    document.querySelector('#city-lookup').addEventListener('click', function(){ //deals with the city look up button
        country_lookup('cities');
    })
})

function country_lookup(type) {
    let country = document.querySelector('#country').value;
    let url = "world.php?country=" + encodeURIComponent(country);

    if (type === 'cities')
    {
        url += "&lookup=cities";
    }

    fetch(url)
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.querySelector('#result').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
}
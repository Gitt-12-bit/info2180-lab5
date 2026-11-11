document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#lookup').addEventListener('click', function(){
        country_lookup();
    })
})

function country_lookup() {
    let country = document.querySelector('#country').value;
    let url = "world.php?country=" + encodeURIComponent(country);

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
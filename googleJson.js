const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBS6HPZZVGh8z518gvoed7VcXv18v2GROs&location=49.8421698,24.0327971&radius=1500&keyword=cafe';

const resFilter = data => data.results.map(result => (
        {
            // googleId: result.id,
            // googlePlaceId: result.place_id,
            name: result.name,
            rating: result.rating,
            address: result.vicinity
        }
    )
);

const container = document.getElementById('container');

const renderUsers = data => {
    container.innerHTML = '';
    for (var i=0; i<data.length; i++){
        var div = document.createElement('div');
        div.innerHTML = `
        <strong>Name:</strong> <span>${data[i].name}</span>
        <strong>Rating:</strong> <span>${data[i].rating}</span>
        <strong>Address:</strong> <span>${data[i].address}</span>
        `;
        div.setAttribute('id', data[i].id);
        div.style.cursor = 'pointer';
        container.appendChild(div);
    }
}

fetch(url, {mode:'no-cors'}).then(response => response.json())
          .then(data => resFilter(data))
          .then(data => renderUsers(data))
          .catch(err => {throw new Error(err)});
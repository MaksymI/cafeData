const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBS6HPZZVGh8z518gvoed7VcXv18v2GROs&location=49.8421698,24.0327971&radius=1500&keyword=cafe';
const url2 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBS6HPZZVGh8z518gvoed7VcXv18v2GROs&pagetoken=CoQC_wAAAJGKffDeIhuk49nHQoLwkEmBNGjEm71WNpQl_y5mxYUNPgbFAxqR7VIKA2lC-wbKdd_DDMUN8VNgzvQwYBRdH0P3Xj6F0AQM7hWifBK2K5AANhQ92mcjFqVuV9LmjGNFMTBnag9FfjicKnGeP3EsKjY2P9t3-nlqeCvzHEnW3w-rqyKklb21P-c9AmQ-mdiZzbC_5vb7p7KDEe2DtzZY-1yGYlA0yn6POLnoP5TegttONv2uezwmYQKnkbhCxfnZNRZ-tYj17fpchD__XPVAmR-oV6HE8ll00fbMUEv4ziRX4vzx0fCft_JYV1t1jM7ZCZkwoo4YfWCTnZUBEHmGF_cSEJKgRb5PWk_UD113xWU2VLsaFKrreJGv0tzuY5bAD7SbkB0nXdlz';

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

fetch(url, {mode:'no-cors'})
                            .then(data => resFilter(data))
                            .then(data => renderUsers(data))
                            .catch(err => {throw err});
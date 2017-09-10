const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBS6HPZZVGh8z518gvoed7VcXv18v2GROs&location=49.8421698,24.0327971&rankby=distance&keyword=cafe';
const url2 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBS6HPZZVGh8z518gvoed7VcXv18v2GROs&pagetoken=CoQC_wAAAJGKffDeIhuk49nHQoLwkEmBNGjEm71WNpQl_y5mxYUNPgbFAxqR7VIKA2lC-wbKdd_DDMUN8VNgzvQwYBRdH0P3Xj6F0AQM7hWifBK2K5AANhQ92mcjFqVuV9LmjGNFMTBnag9FfjicKnGeP3EsKjY2P9t3-nlqeCvzHEnW3w-rqyKklb21P-c9AmQ-mdiZzbC_5vb7p7KDEe2DtzZY-1yGYlA0yn6POLnoP5TegttONv2uezwmYQKnkbhCxfnZNRZ-tYj17fpchD__XPVAmR-oV6HE8ll00fbMUEv4ziRX4vzx0fCft_JYV1t1jM7ZCZkwoo4YfWCTnZUBEHmGF_cSEJKgRb5PWk_UD113xWU2VLsaFKrreJGv0tzuY5bAD7SbkB0nXdlz';
const url3 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBS6HPZZVGh8z518gvoed7VcXv18v2GROs&pagetoken=CqQDnwEAAH6gCdY2w4LfXljNZteoNxF1emxdDkLW8PIftd-W5BXJl2ngCnmQ4k7j5rhO7oJ5fFI5R2ka6y4i74NjfZqx_20GJigkDSMqGExFyhr4HSZwWin3GPkVwQqXwBm3X16lbjY4ugIhpyvOAy6qZyrzoXpS7MzHk-TdJwaOu1_8ryI5NCGugg_b_If-SByW9iZrIJDupxRCGdufvFLoZ1TCvnwejZm1NLSTRIKdmPc6PS2Y3U4-zEOxQCs-3YUJIC4eqs-mbNXrFzMKhj0ylsMnq5sEn4OmqVogsjKMGFqIDbUqLmqhTUexJgfgnyZDBulz32H9l1SfNTT6dDP5YfA6o992soEzf3ENYhl80xGUrikdQXGrdQy92OAavmFkRc9Iozvqo9mlKLKgec3vJdAerGnWT4SbMyllbyUYoJ_TahVijFnj0juvZao8d1Tr07Yqyy5n3iT8uzEJJ6jnqGnmvPEWfelmVFPJtIs0GIXnwGPhTsJ19U32K-O9-OjHtjRY_cnVqJIR0U52x1lsFwJB5NFQ1CwVZk44tKvIrPSsyEWeEhC5WTISSbR3_x1_VdSzmcoZGhTEw_Yen_l4DreN0D8WKivD8_G_gA';

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
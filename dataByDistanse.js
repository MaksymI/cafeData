const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBS6HPZZVGh8z518gvoed7VcXv18v2GROs&location=49.8421698,24.0327971&rankby=distance&keyword=cafe';

let allData = [];
const resFilter = data => data.results.map(result => (
        {
            id: result.id,
            // googlePlaceId: result.place_id,
            location: result.geometry.location,
            name: result.name,
            rating: result.rating,
            address: result.vicinity
        }
    )
);

allData.push(...resFilter(data1), ...resFilter(data2), ...resFilter(data3));
// allData.sort((a, b) => b.rating - a.rating);
console.log(allData);
console.log(allData.length);

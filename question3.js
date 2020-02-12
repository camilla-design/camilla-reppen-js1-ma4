const creatorsUrl = "https://api.rawg.io/api/games/4200";

fetch(creatorsUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.dir(json);
    })
    .catch(function(error) {
        console.log(error);
    })

function createGameDetails(json) {
    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".resultsContainer");

    let html = "";

    results.forEach(function(result) {
        let imageUrl = "https://via.placeholder.com/1000";

        if(result.image) {
            imageUrl = result.image;
        }

        html += `<div class="container">
                    <h1>${result.name}</h1>
                    <div class="image" style="background-image: url('${background_image}')"></div>
                    <div class="description">Description goes here</div>
                </div>`;
    });
    resultsContainer.innerHTML = html;
}



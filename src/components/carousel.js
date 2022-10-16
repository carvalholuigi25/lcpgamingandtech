import * as features from '../features/index';

function Carousel(urlt = "https://localhost:3001") {
    if (document.querySelector('#mycarouselblk')) {
        var dataxind = ""; var dataxinn = ""; var active = "";  var ariacur = "";

        features.asyncFetchData("games", "GET").then(data => {
            if(data != null) {
                data.forEach(md => {
                    if(md.screenshots.length > 0) {
                        for(var i = 0; i < md.screenshots.length; i++) {
                            active = i == (md.id-1) ? "active" : "";
                            ariacur = i == (md.id-1) ? "aria-current='true'" : "";
            
                            dataxind += `<button type="button" data-bs-target="#carMainGames" data-bs-slide-to="${md.id-1}" aria-label="Slide ${md.id-1}" class="${active}" ${ariacur}></button>`;
                            dataxinn += `
                            <div class="carousel-item ${active}">
                                <img src="${urlt}/${md.screenshots[i]}" class="d-block w-100" alt="${md.title}">
                            </div>`;
                        }
                    }
                });

                document.querySelector('#mycarouselblk').innerHTML = `
                <div id="carMainGames" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        ${dataxind}
                    </div>
                    <div class="carousel-inner">
                        ${dataxinn}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carMainGames" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carMainGames" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>`;
            } else {
                document.querySelector('#mycarouselblk').innerHTML = `
                <div id="carMainGames">
                    <h1>No data avaliable for carousel Games!</h1>
                </div>`;
            }
        }).catch(err => console.log(err));
    }
}

export { Carousel }
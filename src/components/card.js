import * as features from '../features/index';
import { loadTNS } from '../scripts/my_functions';

function CardCompanies(urlt = "https://localhost:3001") {
    if(document.querySelector('#mycardblk')) {
        var datacomp = "";

        features.asyncFetchData("companies", "GET").then(data => {
            if(data != null) {
                data.forEach(mdc => {
                    datacomp += `
                    <div class="col-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card cardcomp">
                            <a href="gaming.html?companyId=${mdc.id}">
                                <img src="${urlt}/${mdc.image}" class="img-fluid" alt="${mdc.name}" />
                            </a>
                        </div>
                    </div>`;
                });

                document.querySelector('#mycardblk').innerHTML = `
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        ${datacomp}
                    </div>
                </div>`;
            } else {
                document.querySelector('#mycardblk').innerHTML = `
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <h1>No data avaliable for games companies!</h1>
                        </div>
                    </div>
                </div>`;
            }
        });
    }
}

function CardGamesRec(urlt = "https://localhost:3001") {
    if(document.querySelector('#mycardgamesrecblk')) {
        var datagamesrec = "";

        features.asyncFetchData("games", "GET").then(data => {
            if(data != null) {
                data.forEach(mdcgr => {
                    if(mdcgr.screenshots.length > 0) {
                        for(var i = 0; i < mdcgr.screenshots.length; i++) {
                            datagamesrec += `
                                <div class="colrec">
                                    <span class="status btn">novo</span>
                                    <a href="gaming.html?id=${mdcgr.id}&companyId=${mdcgr.companyId}">
                                        <img src="${urlt}/${mdcgr.screenshots[i]}" class="d-block w-100 img-fluid" alt="${mdcgr.title}" />
                                    </a>
                                </div>
                            `;
                        }
                    }
                });

                document.querySelector('#mycardgamesrecblk').innerHTML = `
                <div class="row my-slider myslidergamesrec">
                    ${datagamesrec}
                </div>`;

                if(document.querySelector('.myslidergamesrec')) {
                    loadTNS('.myslidergamesrec');
                }
            } else {
                document.querySelector('#mycardgamesrecblk').innerHTML = `
                <div class="row my-slider">
                    <div class="col-12">
                       <h1>No data avaliable for recommended games!</h1>
                    </div>
                </div>`;
            }
        });
    }
}

function CardGamesOriginals(urlt = "https://localhost:3001") {
    if(document.querySelector('#mycardgamesorigblk')) {
        var datagamesorig = "";

        features.asyncFetchData("games", "GET").then(data => {
            if(data != null) {
                data = data.sort((x, y) => y.id - x.id);

                data.forEach(mdcgo => {
                    if(mdcgo.screenshots.length > 0) {
                        for(var i = 0; i < mdcgo.screenshots.length; i++) {
                            datagamesorig += `
                                <div class="colorig">
                                    <span class="status btn">novo</span>
                                    <a href="gaming.html?id=${mdcgo.id}&companyId=${mdcgo.companyId}">
                                        <img src="${urlt}/${mdcgo.screenshots[i]}" class="d-block w-100 img-fluid" alt="${mdcgo.title}" />
                                    </a>
                                </div>
                            `;
                        }
                    }
                });

                document.querySelector('#mycardgamesorigblk').innerHTML = `
                <div class="row my-slider myslidergamesorig">
                    ${datagamesorig}
                </div>`;

                if(document.querySelector('.myslidergamesorig')) {
                    loadTNS('.myslidergamesorig');
                }
            } else {
                document.querySelector('#mycardgamesorigblk').innerHTML = `
                <div class="row my-slider">
                    <div class="col-12">
                       <h1>No data avaliable for original games!</h1>
                    </div>
                </div>`;
            }
        });
    }
}

export { CardCompanies, CardGamesRec, CardGamesOriginals }
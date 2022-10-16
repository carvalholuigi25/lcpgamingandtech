const bootstrap = require('bootstrap');

function Navbar() {
    if(document.querySelector('#mynavbarblk')) {
        document.querySelector('#mynavbarblk').innerHTML = `
            <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/images/logo-no-background.png" alt="LCP Gaming and Tech Logo" class="img-fluid" width="50" height="50" />
                </a>
                <button class="navbar-toggler d-lg-none btntognav" type="button" data-bs-toggle="collapse" data-bs-target="#navMain" aria-controls="navMain"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navMain">
                    <form class="d-flex my-lg-0 ms-auto">
                        <input class="form-control" type="text" placeholder="Search">
                        <button class="btn btn-outline-success btn-search" type="submit">
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                    <ul class="navbar-nav ms-auto mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html#mhome" aria-current="page">
                                <i class="bi bi-house"></i>
                                Home <span class="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#mgaming">
                                <i class="bi bi-controller"></i>
                                Gaming
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#mtech">
                                <i class="bi bi-laptop"></i>
                                Tech
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }
}

export { Navbar }
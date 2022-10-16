function Footer() {
    if (document.querySelector('#mycopyrightblk')) {
        document.querySelector('#mycopyrightblk').innerHTML = `
        <footer class="copyright" id="copyright">
            <div class="container-fluid p-3 mt-3 mb-3">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 t-left">
                        <h1>Links</h1>
                        <ul class="mt-3">
                            <li>
                                <a class="link active" href="index.html#mhome" aria-current="page">
                                    <i class="bi bi-house"></i>
                                    Home <span class="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li class="mt-3">
                                <a class="link" href="index.html#mgaming">
                                    <i class="bi bi-controller"></i>
                                    Gaming
                                </a>
                            </li>
                            <li class="mt-3">
                                <a class="link" href="index.html#mtech">
                                    <i class="bi bi-laptop"></i>
                                    Tech
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 t-left">
                        <h1>About</h1>
                        <p class="tformatted mt-3">
                            Olá, sejam muito bem vindos ao Luigi Gaming'n'Tech. 
                            Este website é sobre os jogos, tecnologia e programação e serve para mostrar e partilhar sobre os jogos, tecnologia e programação. 
                            Algumas dúvidas? Enviem o vosso email para: <a href="mailto:luiscarvalho239@gmail.com">luiscarvalho239@gmail.com</a>.
                        </p>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 t-left">
                        <h1>Social networks</h1>
                        <ul class="listsn mt-3">
                            <li>
                                <a href="https://discord.gg/EcTsH6D8" alt="LCP Gaming and Tech Official Discord" title="LCP Gaming and Tech Official Discord" target="_blank">
                                    <i class="bi bi-discord"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- <div class="row mt-3">
                    <div class="col-12 t-center">
                        <h1>Comunidade</h1>
                        <div class="blkcommunity mt-3">
                            <iframe src="https://discord.com/widget?id=1024063324297642024&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                        </div>
                    </div>
                </div> -->
            </div>
            <p>Created by <a href="mailto:luiscarvalho239@gmail.com">Luigi Carvalho</a> - &copy;${new Date().getUTCFullYear()} - LCP</p>
        </footer>`;
    }
}

export { Footer }
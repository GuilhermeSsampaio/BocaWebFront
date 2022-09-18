export const Cabecalho =({busca, buscaODA}) => {
  var logoboca=require('./img/logo.png');
  var perfil=require('./img/img-perfil.png');
    return(
        <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        </head>
        <body>
            <nav class="navbar navbar-expand-lg navbar-light text-white">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#"><img src={logoboca} class="d-inline-block" alt='Logo BocaWeb'></img>BocaWeb Front</a>
                        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a href="http://www.bocaweb.com.br/oda" target="_blank" class="nav-link  btn-dark"> <i class="fas fa-info-circle"></i> Conheça o BocaWeb </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" target="_blank" class="nav-link  btn-dark"> <i class="fas fa-toolbox"></i>  Administração </a>
                            </li>
                            <li class="nav-item">
                                <a href="http://www.bocaweb.com.br/contato" target="_blank" class="nav-link  btn-dark"> <i class="fas fa-envelope"></i> Contato </a>                  
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <div>
                                <div class="input-group">
                                    <input name="busca" type="text" class="form-control" value={busca} placeholder="Pesquise uma ODA" aria-label="Search" aria-describedby="search-addon1" onChange={buscaODA}></input>
                                    <span class="input-group-text bg-white" id="basic-addon1"><i class="fa fa-search"></i></span>
                                </div>
                            </div>
                        </form>
                        <div class="dropdown">
                            <a class="dropdown-toggle d-flex align-items-center hidden-arrow text-white" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img src={perfil} class="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy"/>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <a class="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </body>
        </html>
    )
}
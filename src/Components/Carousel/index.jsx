export const Carousel =() => {
    var introducao=require('./img/ad_blog.jpg');
    var significado=require('./img/significado.PNG');
    var tirinha=require('./img/tirinha.PNG');
      return(
          <html>
          <head>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
              <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          </head>
          <body>
              <div class="row d-flex justify-content-center">
                  <div id="myCarousel" class="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img width="100%" height="100%" src={introducao} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="Pegunta o conhecimento sobre audiodescrição"/>
                        </div>
  
                        <div class="carousel-item">
                          <img width="100%" height="100%" src={significado} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="Significa de audiodescrição"/>
                        </div>
  
                        <div class="carousel-item">
                          <img width="100%" height="100%" src={tirinha} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="Tirinha mostrando uma descrição da escola"/>
                        </div>
                      </div>
  
                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
          </body>
          </html>
      )
  }
export const RodaPe =() => {
  var logoboca=require('./img/logo.png');
    return(
        <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        </head>
        <body>
    <footer>
   <div class="footer-wrap">
      <div class="container first_class">
         <div class="row">
            <div class="col-md-4 col-sm-6">
               <h3>Seja um colaborador do BocaWeb</h3>
               <p>Informe o seu e-mail para entrar em contato com a nossa equipe.</p>
            </div>
            <div class="col-md-4 col-sm-6">
            <form class="newsletter d-flex">
               <input class="form-control" type="text" placeholder="E-mail"/>
                  <a class="newsletter_submit_btn" href="http://www.bocaweb.com.br/contato" target="_blank"><i class="fa fa-paper-plane"></i></a>
            </form>
            </div>
            <div class="col-md-4 col-sm-6">
               <div class="col-md-12">
                  <div class="standard_social_links">
                     <div>
                        <li class="round-btn btn-facebook"><a href="https://www.facebook.com/ifms.dr" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li class="round-btn btn-linkedin"><a href="https://www.linkedin.com/company/instituto-federal-de-educa%C3%A7%C3%A3o-ci%C3%AAncia-e-tecnologia-de-mato-grosso-do-sul./" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                        <li class="round-btn btn-twitter"><a href="https://twitter.com/ifms" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li class="round-btn btn-instagram"><a href="https://www.instagram.com/ifmsdourados/" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                        <li class="round-btn btn-whatsapp"><a href="http://www.bocaweb.com.br/" target="_blank"><i class="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                        <li class="round-btn btn-envelop"><a href="mailto:ricardo.nascimento@ifms.edu.br" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                     </div>
                  </div>   
               </div>
            </div>
         </div>
      </div>

      <div class="second_class">
         <div class="container second_class_bdr">
         <div class="row">
            <div>
               <div class="footer-logo d-flex justify-content-center"><img src={logoboca} alt="logo BocaWeb"/>
               </div>
               <p class="d-flex justify-content-center">IFMS Dourados – Trabalho de Frameworks2 – Guilherme Sampaio e Pedro Mota.</p>
            </div>
         </div>
      </div>
      </div>
      
      <div class="row">
         <div class="container-fluid">
         <div class="copyright"> © 2022 Copyright 2019 - 2022 | BocaWeb - Desenvolvido por Ricardo Nascimento - UFGD / IFMS - Todos os direitos reservados</div>
         </div>
      </div>
   </div>
   </footer>
   </body>
    </html>
    )
}
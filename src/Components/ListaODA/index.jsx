export const ListaOda = ({lista})=>{
    return(
      <div>
          <div className = 'lista'>
            <section class="py-5">
              <div class="container">
                <div class="row">
                  <p className="totalObjeto">{lista.length} Objetos Cadastrados </p>
                    {lista.map(oda => (
                      <div class="col-lg-6 mx-auto">
                        <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                          <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
                            <div className='objetoOda' key={oda.id}>
                              <h1 className="titulo">Nome: {oda.nome}</h1>
                              <p className="usuario"><i class="fa fa-user"></i> <strong>Usuário:</strong> {oda.usuario}</p>
                              <p class="mb-0 mt-2 font-italic"><strong>Descrição:</strong> {oda.descricao}</p>
                              <footer class="pt-2 mt-2">
                                <p><strong>Data de inclusão:</strong> {oda.data_inclusao}</p>
                                <p><strong>Palavras chave:</strong> {oda.palavras_chave}</p>
                              </footer>
                            </div>
                        </blockquote>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          </div>
      </div>
    )
}

import './App.css';
import { Component } from 'react';
import { RodaPe } from './Components/RodaPe/rodaPe';
import { Cabecalho } from './Components/Cabecalho/cabecalho';
// import { Busca } from './Components/Busca';
import { ListaOda } from './Components/ListaODA';
import { Carousel } from './Components/Carousel/index';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

class App extends Component{
  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAS();
  }

  carregaODAS(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
    console.log([busca])
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAS()
  }

  render(){
    const { odas} = this.state;
    return(
      <section>
        {/* <div className='cabecalho'>
          <Cabecalho/>
        </div> */}
        <Cabecalho
           busca = {this.state.busca}
           buscaODA = {this.buscaODA}
        />
        <Carousel />
          {/* <Busca
            busca = {this.state.busca}
            buscaODA = {this.buscaODA}
          /> */}
         <ListaOda
            lista = {odas}
        /> 
        <div className='footer'>
          <RodaPe/>
        </div>
      </section>
    )
  }
}

export default App;

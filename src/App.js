//Alunos: PEDRO MOTA E GUILHERME SAMPAIO
import React, {useState, useEffect} from 'react';
import './App.css';
// import { Component } from 'react';
import { RodaPe } from './Components/RodaPe/rodaPe';
import { Cabecalho } from './Components/Cabecalho/cabecalho';
// import { Busca } from './Components/Busca';
import { ListaOda } from './Components/ListaODA';
import { Carousel } from './Components/Carousel/index';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// import { render } from '@testing-library/react';

export default function App(){
  const [busca, setBusca] = useState('');
  const [odas, setOdas] = useState([]);

  useEffect(()=> {
    carregaODAS();
    document.title = 'Bocaweb front'
  })

  const carregaODAS = async () => {
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => setOdas(odas))
  };

  const buscaODA = (evento) => {
    setBusca(evento.target.value)
    carregaODAS();
  };
    return(
      <section>
        
        <Cabecalho
            busca = {busca}
            buscaODA = {buscaODA}
        />
        <Carousel />
          
          <ListaOda
            lista = {odas}
        /> 
        <div className='footer'>
          <RodaPe/>
        </div>
      </section>
    )
  }




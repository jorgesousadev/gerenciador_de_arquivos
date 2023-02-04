import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Menu from './Menu';
import AdicionarArquivo from './AdicionarArquivo';


function App() {

  const [arquivos, setArquivos] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:5000/arquivos`)
      .then((response) => {
          setArquivos(response.data);
          console.log(response.data)
      })
  }, []) 
  
  const getArquivo = () => {
    axios.get(`http://localhost:5000/arquivos`)
        .then((getArquivo) => {
            setArquivos(getArquivo.data);
        })
  }

  const onDelete = (nome) => {
    axios.delete(`http://localhost:5000/arquivos/${nome}`)
    .then(() => {
        getArquivo();
    })
  }

  return (
    <Router>
      <Menu />
      <AdicionarArquivo />
      <Routes>
        <Route exact path="/" element={<Home arquivos={arquivos} onDelete={onDelete} />}/>
      </Routes>
    </Router>
  );
}

export default App;

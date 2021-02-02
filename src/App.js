import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import  Menu from './components/menu'
import  './estilo/estilo.css'

function App() {

  const [inputFrutas, setInputFrutas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");
  
//Redux
  const frutas = useSelector((state) => state.frutaReducer.frutas);
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
  
 
  
  const dispatch = useDispatch();


  function adicionarFruta(event) {
    event.preventDefault();

  const objFruta = {
      nome: inputFrutas
    }

    dispatch({type: "ADICIONAR",value:objFruta});

  }

  function alterarTitulo(event) {

    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }

  return (


    <div >

<section>
     
     <h1> <Menu/> </h1>
      
      <form>
         <label><strong> Título: </strong> </label>
         <input 
         placeholder="Digite um titulo" 
         value = {inputTitulo} 
         onChange = {alterarTitulo}
         />
      </form>

      <br></br>
     
      <form onSubmit = {adicionarFruta}>
      <label><strong>Adicionar: </strong> </label>
        <input 
        placeholder="Digite uma fruta..."
        value = {inputFrutas} 
        onChange = {(event) => setInputFrutas(event.target.value)} 
         />
         <br></br><br></br>
        
        <button>
           <strong> Enviar </strong>
        </button>

        <br></br>

      <p><strong> Suas {stateTitulo} : </strong> </p> 

      </form>

        {frutas.map ((fruta,index) => {
          return (
            <li key={index}>{fruta.nome}</li>
            )
        })}
      </section>
      <br></br>
      <footer>
        <p>&copy;Thays/Monitoria</p>
    </footer>
</div>
  );
}

export default App;

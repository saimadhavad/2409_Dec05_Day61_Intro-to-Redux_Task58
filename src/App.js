// import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    let dispatch = useDispatch();
    let inputRef = useRef();
    let storeObj = useSelector( (store)=> {
      return store;
    });


  return (
    <div className="App">
      <h1 className='headingOne'>REDUX-1</h1>

      <input type='text' placeholder='Enter ACTOR / CRICKETER / POLITICIAN NAME' ref={inputRef}></input>
      <div className='buttonDiv'>
        <button className='btnGrp' type='button'
          onClick={ () => {
            dispatch({type:"addActor",data:inputRef.current.value})
          }}        
        >ADD ACTOR</button>   
        <button className='btnGrp' type='button'
          onClick={ () => {
            dispatch({type:"addCricketer",data:inputRef.current.value})
          }}
        >ADD CRICKETER</button>  
        <button className='btnGrp' type='button'
          onClick={ () => {
            dispatch({type:"addPolitician", data:inputRef.current.value})
            
          }}
        >ADD POLITICIAN</button>  
      </div>
      {/* RETRIVING DATA FROM THE STORE USING useSelector() */}
      <div>
          <h1>ACTOR : {storeObj.actors.join(", ")}</h1>
          <h1>CRICKETER :{storeObj.cricketers.join(", ")}</h1>
          <h1>POLITICIAN :{storeObj.politicians.join(", ")}</h1>
      </div>
      </div>

  );
}

export default App;

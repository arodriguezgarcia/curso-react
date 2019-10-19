import React, { useState, useEffect } from 'react';

function ChangeLetters() {
  const [myString, setMyString] = useState('');
  const changeAtoB = (myNewString) => setMyString(myNewString.replace(/a/g, 'b'));

  return (
    <div>
      <input type="text"  onChange={(e) => changeAtoB(e.target.value)}></input>
      Result: {myString} 
    </div>
  );
}

function Comp1(props) {
  useEffect(() => {
    return () => {
      console.log('Desmontado');
    }
  }, []);

  useEffect(() => console.log('Actualizando'));

  return (
    <>
      Componente 1 (prop1: {props.prop1.toString()})
    </>
  );
}

function useCallAPI(url) {
  const [data, setData] = useState([]);

  const getData = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData(url);
  }, []);

  return data;
}

function MyTodos() {
  const data = useCallAPI('https://jsonplaceholder.typicode.com/todos')

  return (
    <ul>
      {data.length ? data.slice(0, 10).map((el, key) => (
        <li key={key}>{el.id}. {el.title}</li>
      )) : ''}
    </ul>
  );
}

function Ejercicio17() {

  const [showComp1, setShowComp1] = useState(true);
  const [prop1, setProps1] = useState(false);

      return (
        <>
          <h1 className="ejercicio">17. Hooks</h1>
          <ChangeLetters />
          <br />
          {showComp1 ? <Comp1 prop1={prop1} /> : ''}
          <button onClick={() => setShowComp1(false)}>Ocultar</button>
          <button onClick={() => setProps1(!prop1)}>Change prop</button>
          <br />
          <MyTodos />
        </>
      )
} 

export default Ejercicio17;

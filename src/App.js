import './App.css';
import {useState} from 'react';

function App(props)  {
  
      const [name, setName] = useState("Shivam");

      const handleChange = () => {
        setName("Smit")
      }

      const nameChange = (event) =>{
           const changeName =  event.target.value
           setName(changeName)
      }

      return (
        <div>
          My name is {name} {props.name};<br/>

          <input type='text' placeholder='write' onChange={nameChange}></input>
          <button onClick={handleChange}>Change</button>

        </div>
      );
}

export default App;

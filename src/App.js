import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Person from "./components/svgcomponents/Person";
import Email from "./components/svgcomponents/Email";
import Location from "./components/svgcomponents/Location";
import Phone from "./components/svgcomponents/Phone";

function App() {
  const [person, setPerson] = useState({});
  const [users, setUsers] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [list , setList] = useState([]);
  const getApi = async () => {
    try {
      const response = await axios("https://randomuser.me/api/");
      setUsers(response.data.results[0]);
      setPerson(response.data.results[0].name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleClick = () => {
    getApi();
  };

  const addList = () => {
    setList([...list, users])
  }

  const mouserOver = () => {
    setPerson(users.name);
  };

  const personOut = () => {
    setPerson({});
  };

  const overLocation = () => {
    setPerson(users.location);
  };

  const outLocation = () => {
    setPerson({});
  };


  const overEmail = () => {
    setEmail(users.email)
  }

  const outEmail = () => {
    setEmail("")
  }


  const overPhone = () => {
    setPhone(users.phone)
  }

  const outPhone = () => {
    setPhone("")
  }

  return (
    <div className="App">
      <img src={users?.picture?.medium} className="img" />
      <p>I live in </p>
      <h3>{users?.location?.country}</h3>

      <h3>
        {person.city} {person.state}
      </h3>
      <h3>
        {person.title} {person.first} {person.last}
      </h3>
      <h3>{email}</h3>
      <h3>{phone}</h3>

      <div className="svgcontainer">
        <Person mouseover={mouserOver} personOut={personOut} />
        <Email overEmail = {overEmail} outEmail = {outEmail}/>
        <Location overLocation={overLocation} outLocation={outLocation} />
        <Phone overPhone = {overPhone} outPhone = {outPhone}/>
      </div>

      <div className="buttoncontainer">
        <button onClick={handleClick}>NEW USER</button>
        <button onClick={addList}>ADD USER</button>
      </div>

      <div className="list">
          <ul>
          {
            list?.map((item, index) => {
              return <li className="li" key={index}>{item.name.first} | {item.name.last} | {item.email} | {item.location.city} | {item.phone}</li>
            })
          }
          </ul>
      </div>
    </div>
  );
}

export default App;

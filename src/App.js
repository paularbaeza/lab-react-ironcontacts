import './App.css';
import allContacts from "./contacts.json";
import {useState} from "react"


function App() {

  const [contactsToDisplay, setContactsToDisplay] =useState(allContacts.slice(0,5))
  return (
    <div className="App">
      <h1>IronContacts</h1>
      {contactsToDisplay.map((eachContact)=> {
        return (
          <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          <tr>
           <td><img src={eachContact.pictureUrl} alt="contact" width="100" /></td>
           <td><p>{eachContact.name}</p></td>
           <td> <p>{eachContact.popularity.toFixed(2)}</p></td>
           <td>{eachContact.wonOscar  ? "🏆" : ""}</td>
           <td>{eachContact.wonEmmy ? "🏆" : ""}</td>
          </tr>
          </table>
        )
      })}

    </div>
  );
}

export default App;

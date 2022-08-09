import './App.css';
import allContacts from "./contacts.json";
import {useState} from "react"


function App() {

  const [contactsToDisplay, setContactsToDisplay] =useState(allContacts.slice(0,5))
  
  
  return (
    <div className="App">
      <h3>Contacts</h3>
      {contactsToDisplay.map((eachContact)=> {
        return (
          <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <tr>
           <td><img src={eachContact.pictureUrl} alt="contact" width="100" /></td>
           <td><p>{eachContact.name}</p></td>
           <td> <p>{eachContact.popularity.toFixed(2)}</p></td>
          </tr>
          </table>
        )
      })}

    </div>
  );
}

export default App;

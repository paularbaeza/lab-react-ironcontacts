import './App.css';
import allContacts from "./contacts.json";
import {useState} from "react"


function App() {

  const [contactsToDisplay, setContactsToDisplay] =useState(allContacts.slice(0,5))

  const addContact =()=> {
    let randomContactIndex =Math.floor(Math.random() * allContacts.length)
    let randomContact = allContacts[randomContactIndex]  

    const contactsDisplayedCopy = [...contactsToDisplay]
    contactsDisplayedCopy.unshift (randomContact)

    setContactsToDisplay(contactsDisplayedCopy)
  }


  const popularitySorted =() => {
    const contactsDisplayedCopy = [...contactsToDisplay]

    contactsDisplayedCopy.sort ((contact1, contact2)=> contact1.popularity > contact2.popularity ? 1 : -1)
    setContactsToDisplay(contactsDisplayedCopy)
  }

  const nameSorted =() => {
    const contactsDisplayedCopy = [...contactsToDisplay]

    contactsDisplayedCopy.sort ((contact1, contact2)=> contact1.name > contact2.name ? 1 : -1)
    setContactsToDisplay(contactsDisplayedCopy)

  }


 const deleteContact = (id) => {

  const contactsDisplayedFiltered = contactsToDisplay.filter((eachContact)=> {
    if (eachContact.id !== id) 
    {return eachContact}

  
 })
 setContactsToDisplay (contactsDisplayedFiltered)
}


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={popularitySorted}>Sort by popularity</button>
      <button onClick={nameSorted}>Sort by name</button>


      {contactsToDisplay.map((eachContact)=> {
        return (
          <table key = {eachContact.id}>
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr>
           <td><img src={eachContact.pictureUrl} alt="contact" width="100" /></td>
           <td><p>{eachContact.name}</p></td>
           <td> <p>{eachContact.popularity.toFixed(2)}</p></td>
           <td>{eachContact.wonOscar  ? "🏆" : ""}</td>
           <td>{eachContact.wonEmmy ? "🏆" : ""}</td>
           <td><button onClick={() => deleteContact(eachContact.id)}>Delete</button></td>
          </tr>
          </tbody>
          </table>
        )
      })}

    </div>
  );
}

export default App;

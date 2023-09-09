import { useState } from 'react'
import ContactList from './components/ContactList'
import './App.css'
import SelectedContact from './components/SelectedContact'


function App() {
  //state at the top of component tree
  const [selectedContactId, setSelectedContactId] = useState(null);
  //pass the setter down to contact list component
  // left setSelectedContactId is how the ContactList component will refer to it
  //right side = {} is the data from the aparent, aka setSelectedContactID

  return (

      <div className="contactTable">
      {selectedContactId ? <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/> : <ContactList setSelectedContactId={setSelectedContactId}/> }

      </div>
      
  )
}

export default App

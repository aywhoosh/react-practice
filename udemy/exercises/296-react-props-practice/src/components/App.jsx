import React from "react";
import Card from "./Card";
import contacts from "../contacts.jsx"
import Avatar from "./Avatar.jsx";



function App() {
  const contactCards = contacts.map((contact) => (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  ));
  
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://media1.tenor.com/m/26CDRRLdQV4AAAAC/gatitos-gatos.gif"/>
      {contactCards}
    </div>
  );
}

export default App;

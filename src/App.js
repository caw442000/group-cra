import React, { useState } from 'react';


import './App.css';
import Header from "./Components/Header"
import Photo from "./Components/Photo"


const  App = () => {

  const [profileName, setProfileName] = useState("Cedric")
  const [title, setTitle] = useState("Nasa Photo Of The Day")
  return (
    <div className="App">
     <Header name={profileName} title ={title}/>
     <Photo title= {title}/>
    </div>
  );
}

export default App;

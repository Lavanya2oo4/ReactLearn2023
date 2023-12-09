import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
// imported useState
import React, { useState } from 'react';
import Form from './Components/Form.js';
import About from './Components/About.js';
import Alert from './Components/Alert.js';



function App() {

    const [mode, setMode] = useState("light")

    function switchFunc() {
        if (mode === "light") {
            setMode("dark")
            document.body.style.backgroundColor ="#404040"
            document.body.style.color = "white"

            showAlert("Dark Mode Enabled","success")
        }
        else {
            setMode("light")
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"

            showAlert("Light Mode Enabled","success")

        }
    }



    //FUnction to show alert

    const [alert,setAlert]=useState(null) 
    //initially I have no alert to show

    function showAlert(msg,type){
        setAlert({
            message:msg,
            type:type
        })

        setTimeout(()=>{
            setAlert(null)
        },1500)
    }

    


    return (
        <>

            <Navbar siteName="EasyEdit" firstLink="Help" mode={mode} switchFunc={switchFunc} showAlert={showAlert}/>

            <Alert alert={alert}/>

            <Form mode={mode} alertFunc={showAlert} />
        </>
    )

}

export default App;

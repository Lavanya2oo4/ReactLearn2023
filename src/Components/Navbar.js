import React from 'react'
import navIcon from './images/navIcon.png'

import PropTypes from 'prop-types'    //importing prop types

export default function Navbar(props) {

  function changeTheme1() {
    document.body.style.backgroundColor = "#70A6D3"
  }
  function changeTheme2() {
    document.body.style.backgroundColor = "#93CEA2"
  }
  function changeTheme3() {
    document.body.style.backgroundColor = "#D27A1E"
  }
  function changeTheme4() {
    document.body.style.backgroundColor = "#D07FC8"
  }
  function changeTheme5() {
    document.body.style.backgroundColor = "#9C969B"
  }
  function changeTheme6() {
    document.body.style.backgroundColor = "#916BB5"
  }
  function changeTheme7() {
    document.body.style.backgroundColor = "#F9E79F"
  }
  function changeTheme8() {
    document.body.style.backgroundColor = "#85C1E9"
  }

  function resetTheme() {
    if (props.mode == "light") {
   
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"

      props.showAlert("Light Mode Enabled","success")
    }
    else{
      document.body.style.backgroundColor = "#404040"
      document.body.style.color = "white"

      props.showAlert("Dark Mode Enabled", "success")
    }
  }

  return (
    <div>


      <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={props.mode}>
      

        <div>
          <a className="navbar-brand" href="#" id="siteName"><img src={navIcon} id="navIcon" />{props.siteName}</a>
        </div>



        <div className="form-check form-switch" id="ryt">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.switchFunc} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>


          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2" role="group" aria-label="First group">
              <h5>Choose Custom Theme &nbsp;</h5>
              <button type="button" className="btn btn-primary colorBtn " onClick={changeTheme1} style={{ backgroundColor: "#70A6D3", color: "#70A6D3" }} >.</button>
              <button type="button" className="btn btn-primary colorBtn" onClick={changeTheme2} style={{ backgroundColor: "#93CEA2", color: "#93CEA2" }} >.</button>
              <button type="button" className="btn btn-primary colorBtn" onClick={changeTheme3} style={{ backgroundColor: "#D27A1E", color: "#D27A1E" }} >.</button>
              <button type="button" className="btn btn-primary colorBtn" onClick={changeTheme4} style={{ backgroundColor: "#D07FC8", color: "#D07FC8" }} >.</button>
              <button type="button" className="btn btn-primary colorBtn" onClick={changeTheme5} style={{ backgroundColor: "#9C969B", color: "#9C969B" }} >.</button>
              <button type="button" className="btn btn-primary colorBtn" onClick={changeTheme6} style={{ backgroundColor: "#916BB5", color: "#916BB5" }} >.</button>
              <button type="button" className="btn btn-primary colorBtn" onClick={changeTheme7} style={{ backgroundColor: "#F9E79F", color: "#F9E79F" }} >.</button>
              <button type="button" className="btn btn-primary colorBtn" onClick={changeTheme8} style={{ backgroundColor: "#85C1E9", color: "#85C1E9" }} >.</button>
              <button type="button" className="btn btn-primary reset" onClick={resetTheme}>Reset</button>
            </div>
          </div>

        </div>

      </nav>


    </div>
  )



}



//proptypes
// (specifying data type that can be entered)

// Navbar.PropType={
//      siteName:PropTypes.string,
//      firstLink:PropTypes.string,
// }


//makes it compulsory to enter a value
Navbar.PropType = {
  siteName: PropTypes.string.isRequired,
  firstLink: PropTypes.string.isRequired,
}


//default values if values not passed in app.js

// Navbar.defaultProps={
//     siteName:"Please assign a name",
//     firstLink:"Please assign first Link"
// }




import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

export default function Navbar(props){

  const boxStyle = {
    width: '30px',
    height: '30px',
    margin: '0px 10px',
    cursor: 'pointer',
    borderRadius: '50%'
  }

    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li> */}
            </ul>
              <div className="colorBox bg-primary" onClick={() => {props.toggleMode('primary')}} style={boxStyle}></div> 
              <div className="colorBox bg-success" onClick={() => {props.toggleMode('success')}} style={boxStyle}></div> 
             <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> {/*If props.mode is light then dark else light */}
              <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
            </div>
          </div>
        </div>
      </nav>
    )
}


// We use this so that we can make sure that we aren't sending something unwanted by mistakenly while sending prop values
// If you add is required at the end then if we don't have any default props and aren't giving any value while using them then there will be an error in console.
Navbar.propTypes = {title: PropTypes.string.isRequired, 
                    placeholder: PropTypes.string }

// So these are the props which will be used if we haven't given any values to the props while using it 
Navbar.defaultProps = {
    title: 'Set title here',
    placeholder: 'Set a placeholder here'
}
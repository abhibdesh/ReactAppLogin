import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [Username, setText] = useState("");
    const UserNameOnchange =(event) =>{
            setText(event.target.value.toUpperCase())
    }
    const Validate = () =>{
        alert("asdgh")
    }
  return (
    <div className={`col-lg-12 col-sm-12 col-xl-12 form-check form-switch text-${
      props.mode === "light" ? "dark" : "light"
    }`}>
    <div className="blank" style={{backgroundColor: props.enabledMode === "light" ? "white" : "grey"}}>
      <div className="row">
        <h1 style={{color: props.enabledMode === "light" ? "white" : "white"}}>{props.heading}</h1>
        <div className="col-lg-5">
          <label style={{color: props.enabledMode === "light" ? "white" : "white"}}>{props.label1}:</label>
        </div>
        <div className="col-lg-5">
          <input
            type="text"
            className="form-control"
            id="txtName"
            placeholder="Username"
            value={Username}
            onChange={UserNameOnchange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <label style={{color: props.enabledMode === "light" ? "white" : "white"}}>{props.label2}:</label>
        </div>
        <div className="col-lg-5">
          <input
            type="password"
            className="form-control"
            id="txtPassword"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="row">
        <input
          type="button"
          className="btn btn-primary"
          value={props.btnVal}
          id="btnSubmit"
          onClick={Validate}
        ></input>
      </div>
    </div>
  </div>
  )
}


TextForm.propTypes={
    heading : PropTypes.string,
    label1 : PropTypes.string,
    label2 : PropTypes.string,
    btnVal : PropTypes.string
}

TextForm.defaultProps  = {
    heading : 'Sign In',
    label1 : 'User Id',
    label2 : 'Pin',
    btnVal : 'Login'
}

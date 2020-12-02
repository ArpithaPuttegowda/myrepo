import React, { useState } from "react";
import TextField from "./textfield"
import {Field,reduxForm} from "redux-form"
import Validation from './validation'
const App=(props)=>{
  const [data,setData]=useState({})
  const fnData=(data)=>{
   alert(JSON.stringify(data))
   setData(data)
  }
return <>
<form onSubmit={props.handleSubmit(fnData)}>
<div className="container-fluid">
 <Field lbl="Name" component={TextField} name="name"/>
 <Field lbl="Password" component={TextField} name="password"/>
 <Field  lbl="Email" component={TextField} name="email"/>
 <div className="offset-sm-4 col-sm-4">
<input disabled={props.validate} type="submit" className="btn btn-primary" value="Registration" />
 </div>
 </div>
 </form>
</>
}
const App1=reduxForm({
  form:'registration',
  validate:Validation
})(App)
export default App1;
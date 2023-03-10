import './style.css';
import React, {useState} from "react";


function Form({useenm_inp_dsp,
    pwd_inp_dsp,
    date1_inp_dsp,
    date2_inp_dsp,
    text_inp_dsp,
    email_inp_dsp,
    submit_dsp,
    submit_txt,
    className, id,
    method}){
    return <div className='d_form'
    style={{
        padding: "15px",
        display: 'flex'

        
    }}>
        <form method={method} className="gff" style={{
            backgroundColor: "lime",
            paddingLeft:"15px",
            paddingRight:"15px",
            paddingBottom:"15px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
        <label for="usernm" style={{display: useenm_inp_dsp}}>Name:</label>
            <input type="text" style={{display: useenm_inp_dsp}} id="usernm"></input>
            <br></br>
            <label for="pwde" style={{display: pwd_inp_dsp}}>Password:</label>
            <input type="password" style={{display: pwd_inp_dsp}} id="pwde"></input>
            <br></br>
            <label for="date" style={{display: date1_inp_dsp}}>date:</label>
            <input type="date" style={{display: date1_inp_dsp}} id="date"></input>
            <br></br>
            <label for="email" style={{display: email_inp_dsp}}>E-Mail:</label>
            <input type="email" style={{display: email_inp_dsp}} id="email"></input>
            <br></br>
            <input type="submit" style={{display: submit_dsp}} id="smt" value={submit_txt}></input>
        </form>
    </div>
}

export default Form;
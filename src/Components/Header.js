import './style.css';
import React, {useState} from "react";

export default function Header({className,id, bgc, txt_color ,children, logo, links,phone, account, lnk1, lnk1_name,lnk2, lnk2_name,lnk3, lnk3_name,lnk4, lnk4_name,lnk5, lnk5_name,lnk6, lnk6_name,lnk7, lnk7_name,}){
console.log(links)
    const [open, setOpen] = useState(false)

    return(
        <header className={`hgjkxft ${className}`} style={{backgroundColor: bgc, color: txt_color}}>
            <div className="ffghjhfsgdf">
                {logo}
            </div>
            <div className="hhddgh">
            <a href={lnk1}>{lnk1_name}</a> {/* ссылки*/}
            <a href={lnk2}>{lnk2_name}</a>
            <a href={lnk3}>{lnk3_name}</a>
            <a href={lnk4}>{lnk4_name}</a>
            <a href={lnk5}>{lnk5_name}</a>
            <a href={lnk6}>{lnk6_name}</a>
            <a href={lnk7}>{lnk7_name}</a>
            {phone} {/*номер телефона */}
            <a href={`#${account}`}>@{account}</a> {/*ссылка на аккаунт */}
            </div>
            <div className="hhddgh_aa"> {/*Мобильная версия */}
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
            <i className="rrr_font fa-sharp fa-solid fa-caret-down"></i>
                        <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
                                
                   <DropdownItem ph={phone} ac ={account} ln1={lnk1} ln1_name={lnk1_name} ln2={lnk2} ln2_name={lnk2_name} ln3={lnk3} ln3_name={lnk3_name} ln4={lnk4} ln4_name={lnk4_name} ln5={lnk5} ln5_name={lnk5_name} ln6={lnk6} ln6_name={lnk6_name} ln7={lnk7} ln7_name={lnk7_name}/>
                
            </div>
            </div>
            </div>
        </header>
    )
}
// всплывающий список для 
function DropdownItem(props) {
    return(
        <li className="dropdownItem">
            <a href={props.ln1}>{props.ln1_name}</a>
            <a href={props.ln2}>{props.ln2_name}</a>
            <a href={props.ln3}>{props.ln3_name}</a>
            <a href={props.ln4}>{props.ln4_name}</a>
            <a href={props.ln5}>{props.ln5_name}</a>
            <a href={props.ln6}>{props.ln6_name}</a>
            <a href={props.ln7}>{props.ln7_name}</a>
            <a href={`#${props.ac}`}>@{props.ac}</a>
            {props.ph}
        </li>
    )
}


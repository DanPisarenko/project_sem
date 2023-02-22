import './style.css';
import React, {useState} from "react";

export default function Header({className,id, bgc, txt_color ,children, logo}){

    const [open, setOpen] = useState(false)

    return(
        <header className={`hgjkxft ${className}`} style={{backgroundColor: bgc, color: txt_color}}>
            <div className="ffghjhfsgdf">
                {logo}
            </div>
            <div className="hhddgh">
            {children}
            </div>
            <div className="hhddgh_aa">
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
            <i className="rrr_font fa-sharp fa-solid fa-caret-down"></i>
                        <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
                                
                   <DropdownItem ch={children}/>
                
            </div>
            </div>
            </div>
        </header>
    )
}
function DropdownItem(props) {
    return(
        <li className="dropdownItem">
            {props.ch}
        </li>
    )
}

import './style.css';
export default function Header({className,id, bgc, txt_color ,children, logo}){
    return(
        <header className={`hgjkxft ${className}`} style={{backgroundColor: bgc, color: txt_color}}>
            <div className="ffghjhfsgdf">
                {logo}
            </div>
            <div className="hhddgh">
            {children}
            </div>
            <div className="hhddgh_aa">
            {children}
            </div>
        </header>
    )
}

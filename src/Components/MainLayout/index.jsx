import React from 'react'
import Header from "../Header";



export default function MainLayuot({children}) {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                {children}
            </div>
        </div>

    );
}

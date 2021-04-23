import React from 'react'
import logoIcon from "../../assets/pizza-logo.svg";
import Button from "./Button";
import {NavLink} from "react-router-dom";

export default function Header () {
    return(
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <NavLink to={"/"}>
                        <img width="38" src={logoIcon} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </NavLink>
                </div>
                <div className="header__cart">
                    <NavLink to={"/cart"}>
                        <Button/>
                    </NavLink>
                </div>
            </div>
        </div>
    )

}
import React, {useEffect} from 'react'
import {BrowserRouter, Switch} from "react-router-dom";
import HomePage from "./Components/HomePage";
import Cart from "./Components/Cart";
import axios from "axios";
import setPizzas from './Redux/actions/pizzasAction'
import {useDispatch, useSelector} from "react-redux";

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
       axios.get("http://localhost:3000/db.json").then(({data}) => {
           dispatch(setPizzas(data.pizzas))
       })
    }, [])

    // const pizzas = useSelector(state=> state.pizzas.items)
    // const sortBy = useSelector(state=> state.filter)




    return (
        <BrowserRouter>
            <Switch>
                <HomePage exact path={"/"} />
                <Cart exact path={"/cart"}/>
            </Switch>
        </BrowserRouter>
    )
}


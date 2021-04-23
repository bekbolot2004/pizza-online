import React from 'react'
import Categories from "../Categories";
import SortPopup from "../SortPopup";
import MainLayuot from "../MainLayout";
import PizzaBlock from "../PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../Redux/actions/filtersAction";

export default function HomePage() {
    const dispatch = useDispatch()

    const {items, sortBy} = useSelector(({pizzas, filters}) => {
        return{
            items: pizzas.items,
            sortBy: filters,
        }
    })

    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    }

    return (
        <MainLayuot>
            <div className="container">
                <div className="content__top">
                    <Categories
                        onClickItem={onSelectCategory}
                        items={[
                            "Мясные",
                            "Вегетарианская",
                            "Гриль",
                            "Острые",
                            "Закрытые",
                        ]
                        }/>
                    <SortPopup items={[
                        {name: "популярности", type: "popular"},
                        {name: "цене", type: "price"},
                        {name: "алфавиту", type: "alphabet"},
                    ]}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items.map(p => <PizzaBlock key={p.id} {...p} />)}
                </div>
            </div>
        </MainLayuot>
    )

}
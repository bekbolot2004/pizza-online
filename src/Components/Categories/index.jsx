import React, {useState} from 'react'

export default function Categories ({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    };

    return(
        <div className="categories">
            <ul>
                <li className={activeItem === null ? "active" : ""}  onClick={() => onSelectItem(null)}>Все</li>
                {items && items.map((p, index) =>
                    <li className={activeItem === index ? "active" : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${items}_${index}`}
                    >{p}</li>
                )}
            </ul>
        </div>
    )

}
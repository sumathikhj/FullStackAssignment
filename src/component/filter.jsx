import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import '../css/Carousel.scss';

import wheat from '../asset/wheat.jpg';
import oil from '../asset/oil.jpg';
import rice from '../asset/rice.jpg';
import red from '../asset/red.jpg';
import pink from '../asset/pink.jpg';
import rose from '../asset/rose.jpg';
import lavender from '../asset/lavender.jpg';
import white from '../asset/white.jpg';
import colourful from '../asset/colourful.jpg';
import ghee from '../asset/ghee.jpg';
import sugar from '../asset/sugar.jpg';
import carrot from '../asset/carrot.jpg';
import cereal from '../asset/cereal.jpg';
import Eggplant from '../asset/Eggplant.jpg';
import potato from '../asset/potato.jpg';
import pumpkin from '../asset/pumpkin.jpg';
import tomato from '../asset/tomato.jpg';


import onion from '../asset/onion.jpg';

//const items = require('./data/products.json');
const items = [
    {

        name: 'Aashirvaad Atta',
        price:
            'Rs.400',
        image: wheat,
        type: 'grocery'

    },
    {

        name: "Saffola Oil",
        price:
            "Rs.600",
        image: oil,
        type: 'grocery'

    },
    {
        name: "Supreme Rice",
        price:
            'Rs.1300',
        image: rice,
        type: 'grocery'

    },
    {

        name: 'Ghee',
        price:
            'Rs.650',
        image: ghee,
        type: 'grocery'

    },
    {

        name: 'Cereal',
        price:
            'Rs.300',
        image: cereal,
        type: 'grocery'

    },
    {

        name: 'Sugar',
        price:
            'Rs.200',
        image: sugar,
        type: 'grocery'

    },
    {

        name: 'Carrot',
        price:
            'Rs.70',
        image: carrot,
        type: 'vegetable'

    },
    {

        name: 'Bringal',
        price:
            'Rs.50',
        image: Eggplant,
        type: 'vegetable'

    },
    {

        name: 'Onion',
        price:
            'Rs.35',
        image: onion,
        type: 'vegetable'

    },
    {

        name: 'Pumpkin',
        price:
            'Rs.60',
        image: pumpkin,
        type: 'vegetable'

    },
    {

        name: 'Potato',
        price:
            'Rs.70',
        image: potato,
        type: 'vegetable'

    },
    {

        name: 'Tomato',
        price:
            'Rs.40',
        image: tomato,
        type: 'vegetable'

    },
    {

        name: 'Rose Bouquet',
        price:
            'Rs.280',
        image: rose,
        type: 'flower'

    }, {

        name: 'Pink Bouquet',
        price:
            'Rs.200',
        image: pink,
        type: 'flower'

    },
    {

        name: 'Rainbow Bouquet',
        price:
            'Rs.350',
        image: colourful,
        type: 'flower'

    },
    {

        name: 'Red Bouquet',
        price:
            'Rs.200',
        image: red,
        type: 'flower'

    },
    {

        name: 'White Bouquet',
        price:
            'Rs.150',
        image: white,
        type: 'flower'

    },
    {

        name: 'Lavender Bouquet',
        price:
            'Rs.300',
        image: lavender,
        type: 'flower'

    }
]


const Filter = () => {
    //set and setState being initialized
    let filteredProduct = items.filter(product => product.type === "grocery")
    const [products, setProducts] = useState(items)
    const [filteredProducts, setFilteredProducts] = useState(filteredProduct)
    const [category, setCategory] = useState("grocery")
    //e = event for the value when select changes
    const handleFilterChange = (e, filterType) => {
        //changes state 
        switch (filterType) {
            case "category":
                setCategory(e.target.value)
                let filteredProduct = products.filter(product => product.type === e.target.value)
                filteredProduct = filteredProduct.filter(x => !!x);
                setFilteredProducts(filteredProduct)

                break;

            default: break;
        }


    }
    return (
        <React.Fragment>
            <header>Shopping Mart</header>
            <nav>
                <form className="filter">
                    <label for="category">Choose a category:</label>
                    <select name="category" id="category" onChange={(e) => handleFilterChange(e, "category")}> {/*listens for when input field is changed*/}
                        <option value="grocery">Grocery</option>
                        <option value="flower">Flowers</option>
                        <option value="vegetable">Vegetables</option>
                    </select>

                </form>
            </nav>
            <article>
<strong>{category.toUpperCase()}</strong>
                <div className='Carousel'>
                    

                    <Carousel filteredProducts={filteredProducts} activeIndex={filteredProducts.length} position={0} />
                </div>
            </article>
        </React.Fragment>
    )
}


export default Filter;
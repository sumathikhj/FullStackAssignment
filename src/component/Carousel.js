import React from 'react';
import '../css/filter.css';



/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
const slideWidth = 30;



const sleep = (ms = 0) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}


const createItem = (position, idx, activeIdx, filteredProducts) => {


    // console.log("filteredProducts[idx]"+filteredProducts)

    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`
        },
        category: filteredProducts[idx]
    }



    return item
}


const CarouselSlideItem = ({ pos, idx, activeIdx, filteredProducts }) => {

    const item = createItem(pos, idx, activeIdx, filteredProducts)

    return (

        <li className='carousel__slide-item' style={item.styles}>
            {item.category !== undefined && Number.isInteger(activeIdx) &&
                <div>
                    <div className='carousel__slide-item-img-link'>

                        <img src={item.category.image} alt={item.category.name} />
                    </div>
                    <div className='carousel-slide-item__body'>
                        <h4>{item.category.name}</h4>
                        <p>{item.category.price}</p>

                    </div>



                </div>}


        </li>

    )
}
const MiddleItem = ({ activeIdx, filteredProducts }) => {

    let positions = activeIdx == 0 ? 3 : 4;

    return (


        <div >
            {filteredProducts[positions] !== undefined &&
                <img className='img-magnifier-container ' className="center" src={filteredProducts[positions].image} />
            }
        </div>





    )
}



const Carousel = ({ filteredProducts, activeIndex }) => {
    const length = filteredProducts.length

    // var filteredProduct=[];
    //filteredProducts.push(...filteredProducts);
    // filteredProducts=[];


    const keys = Array.from(Array(length).keys())
    const [items, setItems] = React.useState(keys)
    const [isTicking, setIsTicking] = React.useState(false)
    const [activeIdx, setActiveIdx] = React.useState(activeIndex);


    const bigLength = items.length

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems(prev => {
                return prev.map((_, i) => prev[(i + jump) % bigLength])
            })
        }
    }

    const nextClick = (jump = 1) => {
        if (!isTicking && activeIdx <= items.length) {
            setIsTicking(true)
            setItems(prev => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength]
                )
            })
        }
    }

    const handleDotClick = idx => {
        if (idx < activeIdx) prevClick(activeIdx - idx)
        if (idx > activeIdx) nextClick(idx - activeIdx)
    }

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false))
    }, [isTicking])

    React.useEffect(() => {

        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore

    }, [items])


    return (
        <React.Fragment>

            <MiddleItem
                activeIdx={activeIdx}

                filteredProducts={filteredProducts}
            />

            <div className='carousel__wrap'>
                <div className='carousel__inner'>


                    <button
                        className='carousel__btn carousel__btn--prev'
                        onClick={() => prevClick()}>
                        <i className='carousel__btn-arrow carousel__btn-arrow--left' />
                    </button>
                    <div className='carousel__container'>
                        <ul className='carousel__slide-list'>
                            {items.map((pos, i) => (
                                <CarouselSlideItem
                                    key={i}
                                    idx={i}
                                    pos={pos}
                                    activeIdx={activeIdx}

                                    filteredProducts={filteredProducts}
                                />
                            ))}
                        </ul>
                    </div>
                    <button
                        className='carousel__btn carousel__btn--next'
                        onClick={() => nextClick()}>
                        <i className='carousel__btn-arrow carousel__btn-arrow--right' />
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Carousel;

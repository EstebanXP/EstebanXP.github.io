import React from 'react'
import { useState, useEffect } from "react";


const CarouselProductos = (props) => {
    const {children, show} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }
    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])
    return (
        <div className="carousel-container">
            <div className="carousel-content-wrapper">
                <div
                    className={`carousel-content show-${show}`}
                    style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                >
                    {children}
                </div>
            </div>
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                <button onClick={prev} className="left-arrow">
                    &lt;
                </button>
                <div className="carousel-content-wrapper">
                    { /*...*/ }
                </div>
                {/* You can alwas change the content of the button to other things */}
                <button onClick={next} className="right-arrow">
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default CarouselProductos
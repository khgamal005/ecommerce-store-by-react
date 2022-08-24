import React from 'react'
import { NavLink } from "react-router-dom"
const Search = ({ DataItems }) => {
    window.addEventListener("click", () => {   /*func to add and remove class active */
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })
    return (
        <>
            <div className="search">
                <div className="container d-flex">
                    <form className='ds-flex'>
                        <input placeholder='Search' type="text" />
                        <i className='fa fa-search'></i>
                    </form>
                    <NavLink to="/cart" className='cart'>
                        <i className='fa fa-shopping-cart'></i>
                        <span>{DataItems.length === 0 ? "" : DataItems.length} </span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Search
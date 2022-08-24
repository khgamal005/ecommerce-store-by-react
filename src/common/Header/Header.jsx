import React from 'react'
import NavBar from './NavBar'
import Search from './Search'
import "./Style.css"

const Header = ({ FilterItems, DataItems }) => {
    return (
        <>
            <header>
                <Search DataItems={DataItems} />
                <NavBar />
            </header>
        </>
    )
}

export default Header
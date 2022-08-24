import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const [mobile, setMobile] = useState(false)
    const ShowMobile = () => {
        setMobile(!mobile)
    }
    return (
        <>
            <nav>
                <div className='container ds-flex'>
                    <div className='logo'>
                        <NavLink to="/">
                            RIHO
                        </NavLink>
                    </div>
                    <div className='nav-links'>
                        <ul className={mobile ? "links-mobile" : "links flex"} onClick={() => setMobile(false)}>
                            <li className="d-flex">
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="d-flex">
                                <a href="#cars">
                                    Cars
                                </a>
                            </li>

                            <li className="d-flex">
                                <a href="#clothes">
                                    Clothes
                                </a>
                            </li>
                            <li className="d-flex">
                                <a href="#electroinc">
                                    Electroinc
                                </a>
                            </li>
                            <li className="d-flex">
                                <a href="#fashon">
                                    Fashon
                                </a>
                            </li>

                        </ul>
                        <button onClick={ShowMobile}>
                            {mobile ? <i className="fa fa-times close home-btn"></i> : <i className="fa fa-bars open"></i>}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
import React from "react";
import "./Navbar.css";


function Navbar() {
    return (
        <header>
            <nav className="Navbar">
                <h2>TechZone</h2>
                <ul className="Menu">
                    <li >
                        <a href="">Inicio</a>
                        <a href="">Productos</a>
                        <a href="">Quienes Somos</a>
                    </li>
                    <li className="Carrito">
                        <a href=""><img clas="" src="img/carrito.jpg" width="75px" alt="carrito" /></a>
                        <p>1</p>
                    </li>

                </ul>
            </nav>

        </header>


    )
}

export default Navbar
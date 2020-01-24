import React from "react"

const Header = (props) => {

    return (
        <nav>

            <h2>  Hello {props.name}: {props.title}</h2>


        </nav>

    )

};

export default Header;
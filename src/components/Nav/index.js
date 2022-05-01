import React from "react";

function Nav(props) {
    const {
        categories = [],
        CurrentCategory,
        setCurrentCategory
    } = props;

    return (
        <header className="flex-row px-2">
            <a href="/"><h2 className="px-2">Adam Payne</h2></a>
            <nav className="flex-row">
                <a href="/"><h3 className="px-2">About Me</h3></a>
                <a href="/"><h3 className="px-2">Portfolio</h3></a>
                <a href="/"><h3 className="px-2">Contact</h3></a>
                <a href="/"><h3 className="px-2">Resume</h3></a>
            </nav>
            
        </header>
    );
}

export default Nav;
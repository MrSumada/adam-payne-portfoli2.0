import React from "react";

function Nav(props) {
    const {
        categories = [],
        currentPage,
        setCurrentPage,
        handlePageChange
    } = props;

    return (
        <header className="flex-row px-2">
            <a href="/"><h2 className="px-2">Adam Payne</h2></a>
            <nav className="flex-row">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
                <a
                    href="#projects"
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </a>
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
                <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
                
            </nav>
            
        </header>
    );
}

export default Nav;
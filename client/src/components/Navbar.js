import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="navbar-brand">QUIZ Builder</Link>
        </nav>
    )
}

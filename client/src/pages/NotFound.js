import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            Ooops! That page does not exist!
            <Link to="/">Back to Home</Link>
        </div>
    )
}

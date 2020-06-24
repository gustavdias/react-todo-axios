import React from 'react';
import {Link} from 'react-router-dom'; 

//A functional component works just like a render() does
export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to='/'>Home </Link>
            |<Link style={linkStyle} to='/about'> About</Link>
        </header>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

const linkStyle = {
    color: '#fff',
    texDecoration: 'none',
}

//That is the same as:
// function Header() {
//     return (
//         <header>
//             <h1>TodoList</h1>
//         </header>
//     )
// }
// export default Header;
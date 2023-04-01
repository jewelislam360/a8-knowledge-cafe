import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav >
            <div className=' header border-bottom'>
                <h3 className='title'>Knowlage Cafe</h3>
                <img className='profile' src='https://img.freepik.com/premium-photo/adult-handsome-man-raising-hands-head-open-mouthed-feeling-extremely-lucky-surprised-excited-happy_1194-220325.jpg?w=740' alt="" />
            </div>
        </nav>
    );
};

export default Navbar;
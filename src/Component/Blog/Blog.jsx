import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='row blog'>
            <div>
                <h1 className='text-center fw-bold mb-4'>Question & Answer Blog</h1>
            </div>

            <div className='Regular shadow p-4 rounded mb-4'>
                <h2>1. Props vs state</h2>
                <h3 className='ms-3 mb-4'>Answer :</h3>
                <div className='ms-5'>
                    <h5 className='mb-3 text-secondary'> Props :The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</h5>
                    <h5 className='text-secondary'>State : Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component. </h5>
                </div>
            </div>
            <div className='Regular shadow p-4 rounded mb-4'>
                <h2>2. How does useState work?</h2>
                <h3 className='ms-3 mb-4'>Answer :</h3>
                <div className='ms-5'>
                    <h5 className='mb-3 text-secondary'>
                    useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. </h5>

                </div>
            </div>
            <div className='Regular shadow p-4 rounded mb-4'>
                <h2>3. Purpose of useEffect other than fetching data.</h2>
                <h3 className='ms-3 mb-4'>Answer :</h3>
                <div className='ms-5'>
                    <h5 className='mb-3 text-secondary'>

                    The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.
                    </h5>
                </div>
            </div>
            <div className='Regular shadow p-4 rounded mb-4'>
                <h2>4. How Does React work?</h2>
                <h3 className='ms-3 mb-4'>Answer :</h3>
                <div className='ms-5'>
                    <h5 className='mb-3 text-secondary'>

                    React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Blog;
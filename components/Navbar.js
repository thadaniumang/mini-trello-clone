// ReactJS
import { useState } from 'react';


// Navbar Component
const Navbar = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <nav className="-mx-2 -my-2 py-3 px-4 flex justify-between items-center text-white bg-blue-500 bg-opacity-50 mb-1">
            <div className="text-white flex items-center">
                <h1 className='font-bold text-xl'>Taco's Tacos</h1>
                <p className='ml-4 font-semibold'>
                    Taco & Co
                    <span className='mx-1 text-xs bg-gray-400 px-2 py-1 rounded-xl'>Free</span>
                    <span className='text-gray-600 mx-3'>/</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                    Team Visible
                </p>
            </div>
            <div className='relative'>
                <button className="p-2 font-medium rounded-lg hover:underline" onClick={() => setShowMore(!showMore)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-1"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                    Show More
                </button>
                {
                    showMore && (
                        <div className="absolute right-0 bg-white p-2 text-gray-800 rounded-lg">
                            <ul>
                                <li>Option 1</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;

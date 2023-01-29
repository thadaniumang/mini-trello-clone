import { useState, useContext } from 'react';

// Context
import { ToastContext } from "../context/ToastContext"


const AddCard = ({ setLists, listId, list }) => {
    const [title, setTitle] = useState('');

    const { toasts, addToast } = useContext(ToastContext);

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newList = {
            ...list,
            todos: [...list.todos, {
                id: "15",
                title: title
            }]
        }
        
        setLists(prevState => {
            let newState = [...prevState];
            newState[listId - 1] = newList;
            return newState;
        });

        addToast({
            message: "Card Added",
            time: 10000,
            id: toasts.length + 1,
            startTime: Date.now(),
        });

    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Title" id="title" name="title" value={title} onChange={handleChange} />
            <button type="submit">Add Card</button>
        </form>
    );
}
 
export default AddCard;
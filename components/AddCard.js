import {useState} from 'react';

const AddCard = ({ setLists, listId, list, lists }) => {
    const [title, setTitle] = useState('');

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
        })
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
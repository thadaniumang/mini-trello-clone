import { useState } from 'react'

// Components
import Card from './Card'
import AddCard from './AddCard'


// List Component
const List = ({ list, users, setLists, lists }) => {

    const [show, setShow] = useState(false)

    // Here, we may implement a function to add a card to the list
    // We have the listId from list.listId, so we can use that to add a card to the list
    // We can then update the state of the list by passing setList to this component from parent component
    // Or we can also mantain a global state for lists and cards and update that state

    const openComponent = () => {
        setShow(true);
    }

    return (
        <div>
            <div className="bg-gray-200 rounded-lg p-4 m-2">
                <h2 className="text-xl font-bold">{list.title}</h2>
                <div>
                    {list.todos && list.todos.map((todo) => (
                        <>
                            {todo.link && 
                            <a href={todo.link} target="_blank" rel="noreferrer">
                                <Card key={todo.id} todo={todo} users={users} listId={list.listId} setLists={setLists} />
                            </a>}
                            
                            {!todo.link && 
                            <Card key={todo.id} todo={todo} users={users} listId={list.listId} setLists={setLists} />}
                        </>
                    ))}
                </div>

                {/* The below text on click should open a Component right underneath with the ability to add title to create a card */}
                <button className="text-gray-600 mx-2" onClick={openComponent}>
                    Add a Card...
                </button>

                {show && <AddCard setLists={setLists} listId={list.listId} list={list} lists={lists} />}
            </div>
        </div>
    )
}

export default List
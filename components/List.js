// Components
import Card from './Card'


// List Component
const List = ({ list, users }) => {

    // Here, we may implement a function to add a card to the list
    // We have the listId from list.listId, so we can use that to add a card to the list
    // We can then update the state of the list by passing setList to this component from parent component
    // Or we can also mantain a global state for lists and cards and update that state

    return (
        <div>
            <div className="bg-gray-200 rounded-lg p-4 m-2">
                <h2 className="text-xl font-bold">{list.title}</h2>
                <div>
                    {list.todos.map((todo) => (
                        <>
                            {todo.link && 
                            <a href={todo.link} target="_blank" rel="noreferrer">
                                <Card key={todo.id} todo={todo} users={users} />
                            </a>}
                            
                            {!todo.link && 
                            <Card key={todo.id} todo={todo} users={users} />}
                        </>
                    ))}
                </div>

                {/* The below text on click should open a Component right underneath with the ability to add title to create a card */}
                <p className="text-gray-600 mx-2">
                    Add a Card...
                </p>
            </div>
        </div>
    )
}

export default List
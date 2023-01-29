// NextJS
import { useState, useContext } from "react"
import Image from "next/image"

// Context
import { ToastContext } from "../context/ToastContext"


// Card Component
const Card = ({ todo, users, listId, setLists }) => {

    const [show, setShow] = useState(false)
    const [title, setTitle] = useState(todo.title)

    const { toasts, addToast } = useContext(ToastContext);

    const openEditor = () => {
        setShow(true);
    }

    const handleUpdate = () => {
        setLists((prevState) => {
            let newState = [...prevState]

            const prevTodos = newState[listId - 1].todos
            
            let newTodos = prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
            newTodos = [...newTodos, { ...todo, title: title }]

            newState[listId - 1].todos = newTodos

            return newState
        })

        addToast({
            message: "Card Updated",
            time: 10000,
            id: toasts.length + 1,
            startTime: Date.now(),
        });
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }


    return (
        <>
            <div className="bg-white rounded-lg p-4 m-2">
                {todo.img && 
                    <div className="w-full mb-4">
                        <Image src={todo.img} width={1200} height={900} alt="task image" />
                    </div>
                }
                <button onClick={openEditor}>Edit</button>

                
                {!show && <h3 className="text-lg font-medium">{todo.title}</h3>}
                {show && <input type="text" value={title} id="title" name="title" onChange={handleTitle} />}
                
                <p>{todo.description}</p>

                <div className="flex mt-4 items-center flex-row-reverse justify-between rounded-full">
                    {users[todo.user - 1] && users[todo.user - 1].img && <Image src={users[todo.user - 1].img} width={40} height={40} className="rounded-full" alt="avatar" />}
                    {todo.date &&
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block text-gray-600 mr-2"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
                            <span className="text-gray-500 text-sm">{todo.date}</span>

                        </div>
                    }
                </div>
                {show && <button onClick={handleUpdate}>Update</button>}
            </div>
        </>
    )
}

export default Card
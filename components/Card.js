// NextJS
import Image from "next/image"


// Card Component
const Card = ({ todo, users }) => {
    return (
        <div className="bg-white rounded-lg p-4 m-2">
            {todo.img && 
                <div className="w-full mb-4">
                    <Image src={todo.img} width={1200} height={900} alt="task image" />
                </div>
            }
            <h3 className="text-lg font-medium">{todo.title}</h3>
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
        </div>
    )
}

export default Card
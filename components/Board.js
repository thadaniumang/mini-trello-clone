// Components
import List from './List'
import ClipLoader from "react-spinners/ClipLoader"


// Board Component
const Board = ({ lists, users, loading, setLists }) => {
	console.log(lists);
    console.log(typeof lists)

    if (loading) {
        return (
            <div className="my-5 mx-5 flex justify-center items-center">
                <ClipLoader color="#f81" size={150} />
            </div>
        )
    } else if (lists.length !== 0 && users.length !== 0) {
        return (
            <>
                <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {lists.map((list) => (
                        <List key={list.id} list={list} users={users} setLists={setLists} lists={lists} />
                    ))}
                </div>
            </>
        )
    }
}

export default Board;

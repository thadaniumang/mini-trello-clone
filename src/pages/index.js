// ReactJS and NextJS
import { useState, useEffect } from "react"
import Head from "next/head"

// Components
import Board from "components/Board"
import Navbar from "components/Navbar"


// This is the page component
export default function Home() {
	const [lists, setLists] = useState([])
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {

		// Fetching data from the API
		// We can also use axios instead of fetch

		// In a real API, we would fetch only those lists and cards 
		// That belong to this board / workspace
		const fetchLists = async () => {
			const res = await fetch("http://localhost:3000/lists");
			const data = await res.json();
			setLists(data);
		};

		// In a real API, we would fetch only those users
		// That are part of this board / workspace
		const fetchUsers = async () => {
			const res = await fetch("http://localhost:3000/users");
			const data = await res.json();
			setUsers(data);
		};

		fetchLists();
		fetchUsers();
		setLoading(false);
	}, []);
	
	return (
		<>
			<Head>
				<title>Todo App</title>
			</Head>
			<main>
				<Navbar />
				<Board lists={lists} setLists={setLists} users={users} loading={loading} />
			</main>
		</>
	)
}

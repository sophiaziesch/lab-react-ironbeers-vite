import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
	const [beers, setBeers] = useState([]);

	async function getAllBeers() {
		try {
			const response = await fetch(API_URL);
			if (response.status === 200) {
				const allBeers = await response.json();
				setBeers(allBeers);
				console.log(allBeers);
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getAllBeers();
	}, []);

	return (
		<>
			<h1>All Beers</h1>
			<input
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				name="search"
				type="search"
			/>
			{beers.map((oneBeer) => (
				<div className="beer-card" key={oneBeer._id}>
					<Link to={`/beers/${oneBeer._id}`}>
						<img src={oneBeer.image_url} alt="oneBeer.name" />
						<h2>{oneBeer.name}</h2>
						<h3>{oneBeer.tagline}</h3>
						<p>Contributed by: {oneBeer.contributed_by}</p>
					</Link>
				</div>
			))}
		</>
	);
}

export default AllBeersPage;

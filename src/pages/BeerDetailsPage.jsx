import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

const fetchBeer = async (setter, id) => {
	try {
		const response = await fetch(`${API_URL}/${id}`);
		if (response.status === 200) {
			const beer = await response.json();
			setter(beer);
		}
	} catch (error) {
		console.error(error);
	}
};

const BeerDetailsPage = () => {
	const { beerId } = useParams();
	const [beer, setBeer] = useState(null);

	useEffect(() => {
		fetchBeer(setBeer, beerId);
	}, []);

	return beer ? (
		<div key={beer._id}>
			<img src={beer.image_url} alt={beer.name} />
			<h1>{beer.name}</h1>
			<h3>{beer.tagline}</h3>
			<p>{beer.first_brewed}</p>
			<p>{beer.attenuation_level}</p>
			<p>{beer.description}</p>
			<p>{beer.contributed_by}</p>
		</div>
	) : (
		<h1>Loading...</h1>
	);
};

export default BeerDetailsPage;

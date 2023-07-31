import { Link } from "react-router-dom";

function HomePage() {
	return (
		<>
			<h1>Beers</h1>
			<Link to={"/beers"}>
				<img src="/src/assets/beers.png" alt="Beers" />
				<h2>All Beers</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
					possimus hic nulla. Nam ipsam quos culpa! Delectus, recusandae
					necessitatibus esse vel unde quis impedit eaque nihil et expedita
					debitis earum!
				</p>
			</Link>
			<Link to={"/random-beer"}>
				<img src="/src/assets/random-beer.png" alt="Beers" />
				<h2>Random Beers</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
					possimus hic nulla. Nam ipsam quos culpa! Delectus, recusandae
					necessitatibus esse vel unde quis impedit eaque nihil et expedita
					debitis earum!
				</p>
			</Link>
			<Link to={"/new-beer"}>
				<img src="/src/assets/new-beer.png" alt="Beers" />
				<h2>New Beers</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
					possimus hic nulla. Nam ipsam quos culpa! Delectus, recusandae
					necessitatibus esse vel unde quis impedit eaque nihil et expedita
					debitis earum!
				</p>
			</Link>
		</>
	);
}

export default HomePage;

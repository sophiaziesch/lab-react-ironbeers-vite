import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AddBeerPage() {
	const navigate = useNavigate;

	const [name, setName] = useState("");
	const [tagline, setTagline] = useState("");
	const [description, setDescription] = useState("");
	const [firstBrewed, setFirstBrewed] = useState("");
	const [brewersTips, setBrewersTips] = useState("");
	const [attenuationLevel, setAttenuationLevel] = useState(0);
	const [contributedBy, setContributedBy] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(`${API_URL}/new`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					tagline,
					description,
					firstBrewed,
					brewersTips,
					attenuationLevel,
					contributedBy,
				}),
			});
			console.log(response);
			if (response.status === 200) {
				const parsed = await response.json();
				console.log(parsed);
				navigate(`/beers/${parsed._id}`);
				setName("");
				setTagline("");
				setDescription("");
				setFirstBrewed("");
				setbrewersTips("");
				setAttenuationLevel(0);
				setContributedBy("");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h1>Add New Beer</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						value={name}
						onChange={(event) => setName(event.target.value)}
						name="name"
						type="text"
					/>
				</label>
				<label>
					Tagline:
					<input
						value={tagline}
						onChange={(event) => setTagline(event.target.value)}
						name="tagline"
						type="text"
					/>
				</label>
				<label>
					Description:
					<textarea
						value={description}
						onChange={(event) => setDescription(event.target.value)}
						name="description"
						type="text"
					/>
				</label>
				<label>
					First Brewed:
					<input
						value={firstBrewed}
						onChange={(event) => setFirstBrewed(event.target.value)}
						name="first_brewed"
						type="text"
					/>
				</label>
				<label>
					Brewer's Tips:
					<input
						value={brewersTips}
						onChange={(event) => setBrewersTips(event.target.value)}
						name="brewers_tips"
						type="text"
					/>
				</label>
				<label>
					Attenuation Level:
					<input
						value={attenuationLevel}
						onChange={(event) => setAttenuationLevel(event.target.value)}
						name="attenuation_level"
						type="number"
					/>
				</label>
				<label>
					Contributed By:
					<input
						value={contributedBy}
						onChange={(event) => setContributedBy(event.target.value)}
						name="contributed_by"
						type="text"
					/>
				</label>
				<button type="submit">Add Beer</button>
			</form>
		</>
	);
}

export default AddBeerPage;

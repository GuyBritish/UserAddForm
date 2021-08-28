import React from "react";

import Card from "../UI/Card";

function AddUser(props) {
	const addUserHandler = (event) => {
		event.preventDefault();
	};
	return (
		<Card>
			<form onSubmit={addUserHandler}>
				<label for="username"> Username </label>
				<input type="text" id="username" />
				<label for="age"> Age (Years) </label>
				<input type="number" id="age" />
				<button type="submit"> Add User </button>
			</form>
		</Card>
	);
}

export default AddUser;

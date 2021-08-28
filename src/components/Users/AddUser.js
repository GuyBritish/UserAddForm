import React from "react";

function AddUser(props) {
	const addUserHandler = (event) => {
		event.preventDefault();
	};
	return (
		<form onSubmit={addUserHandler}>
			<label for="username"> Username </label>
			<input type="text" id="username" />
			<label for="age"> Age (Years) </label>
			<input type="number" id="age" />
			<button type="submit"> Add User </button>
		</form>
	);
}

export default AddUser;

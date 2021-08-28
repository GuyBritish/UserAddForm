import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

function AddUser(props) {
	const addUserHandler = (event) => {
		event.preventDefault();
	};
	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label for="username"> Username </label>
				<input type="text" id="username" />
				<label for="age"> Age (Years) </label>
				<input type="number" id="age" />
				<Button type="submit"> Add User </Button>
			</form>
		</Card>
	);
}

export default AddUser;

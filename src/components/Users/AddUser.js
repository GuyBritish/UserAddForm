import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

function AddUser(props) {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();
		console.log(enteredUsername, enteredAge);

		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label for="username"> Username </label>
				<input type="text" id="username" onChange={usernameChangeHandler} />
				<label for="age"> Age (Years) </label>
				<input type="number" id="age" onChange={ageChangeHandler} />
				<Button type="submit"> Add User </Button>
			</form>
		</Card>
	);
}

export default AddUser;

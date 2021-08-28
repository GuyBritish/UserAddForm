import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

function AddUser(props) {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();
		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0 ||
			+enteredAge < 1
		) {
			return;
		}
		const newUser = {
			id: `${enteredUsername}${enteredAge}`,
			name: enteredUsername,
			age: +enteredAge,
		};
		props.onAddUser(newUser);
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
			<form onSubmit={submitHandler}>
				<label htmlFor="username"> Username </label>
				<input
					type="text"
					id="username"
					onChange={usernameChangeHandler}
					value={enteredUsername}
				/>
				<label htmlFor="age"> Age (Years) </label>
				<input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} />
				<Button type="submit"> Add User </Button>
			</form>
		</Card>
	);
}

export default AddUser;

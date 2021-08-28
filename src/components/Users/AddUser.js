import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

function AddUser(props) {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const submitHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values)",
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (positive value)",
			});
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
		<div>
			{error && <ErrorModal title={error.title} message={error.message} />}
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
		</div>
	);
}

export default AddUser;

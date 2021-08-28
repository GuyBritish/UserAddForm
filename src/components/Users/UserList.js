import React from "react";

import Card from "../UI/Card";

import styles from "./UserList.module.css";

function UserList(props) {
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((user) => (
					<li> {`${user.name} (${user.age} year${user.age > 1 ? "s" : ""} old) `}</li>
				))}
			</ul>
		</Card>
	);
}

export default UserList;

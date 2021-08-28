import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
	const [userList, setUserList] = useState([]);
	const AddUserHandler = (user) => {
		setUserList((prevList) => {
			return [...prevList, user];
		});
	};

	return (
		<div>
			<AddUser onAddUser={AddUserHandler} />
			<UserList users={userList} />
		</div>
	);
}

export default App;

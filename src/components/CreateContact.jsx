import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

const CreateContact = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		notes: "",
	});
	const handleFirstNameChange = (e) => {
		e.preventDefault();
		let newFirstName = e.target.value;
		setValues((values) => ({ ...values, firstName: newFirstName }));
	};
	const handleLastNameChange = (e) => {
		e.preventDefault();
		let newLastName = e.target.value;
		setValues((values) => ({ ...values, lastName: newLastName }));
	};
	const handleEmailChange = (e) => {
		e.preventDefault();
		let newEmail = e.target.value;
		setValues((values) => ({ ...values, email: newEmail }));
	};
	const handlePhoneChange = (e) => {
		e.preventDefault();
		let newPhoneNumber = e.target.value;
		setValues((values) => ({ ...values, phone: newPhoneNumber }));
	};
	const handleNotesChange = (e) => {
		e.preventDefault();
		let newNote = e.target.value;
		setValues((values) => ({ ...values, notes: newNote }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				required
				id="outlined-required"
				label="First Name"
				value={values.firstName}
				onChange={handleFirstNameChange}
			/>
			<TextField
				required
				id="outlined-required"
				label="Last Name"
				value={values.lastName}
				onChange={handleLastNameChange}
			/>
			<TextField
				required
				id="outlined-required"
				label="Phone Number"
				value={values.phone}
				onChange={handlePhoneChange}
			/>
			<TextField
				required
				id="outlined-required"
				label="Email"
				value={values.email}
				onChange={handleEmailChange}
			/>
			<TextField
				required
				id="outlined-required"
				label="Notes"
				value={values.notes}
				onChange={handleNotesChange}
			/>
			<Button variant="outlined" size="large" type="submit">
				Submit
			</Button>
		</form>
	);
};

export default CreateContact;

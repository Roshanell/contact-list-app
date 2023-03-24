import { TextField } from "@mui/material";
import { useState } from "react";
const CreateContact = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		notes: "",
	});
	return (
		<div>
			<TextField
				required
				id="outlined-required"
				label="First Name"
				value={values.firstName}
			/>
			<TextField
				required
				id="outlined-required"
				label="Last Name"
				value={values.lastName}
			/>
			<TextField
				required
				id="outlined-required"
				label="Phone Number"
				value={values.phone}
			/>
			<TextField
				required
				id="outlined-required"
				label="Notes"
				value={values.notes}
			/>
		</div>
	);
};

export default CreateContact;

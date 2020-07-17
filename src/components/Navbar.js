import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function Navbar() {
	const [show, setShow] = useState(false);
	const [name, setName] = useState("");

	const handleShow = () => setShow(true);

	const handleClose = () => setShow(false);

	const onChangeName = (e) => setName(e.target.value);

	const onSubmitName = async (e) => {
		e.preventDefault();

		const newHeadphone = {
			name
		};
		setShow(false);

		try {
			const res = await axios.post("http://localhost:5000/headphones/add", newHeadphone);
			const burnInList = res.data;
			console.log(burnInList);
		} catch (err) {
			console.error(err);
		}

		window.location.replace('/');
	}

	return (
		<>
			<div className="d-flex justify-content-center rounded" style={{backgroundColor: "#071a52"}}>
				<h1 style={{color: "#17b978"}}>Headphone Burn-in Tracker</h1>
			</div>

			<div className="row my-4">
				<div className="col">
					<button className="btn btn-secondary" onClick={handleShow}>+ Create New</button>
				</div>
				<div className="col d-flex justify-content-end">
					<button className="btn btn-secondary">GitHub</button>
				</div>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create New</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={ onSubmitName }>
						<div className="form-group">
							<input type="text" className="form-control" id="name" required autofocus autocomplete="off" placeholder="Headphone" onChange={ onChangeName }/>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
}

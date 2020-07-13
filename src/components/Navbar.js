import React, { useState } from 'react'
import { Link } from "react-router-dom";
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
	}

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#071a52"}}>
				<Link to="/" className="navbar-brand" style={{color: "#17b978"}}>Headphone Burn-in Tracker</Link>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<a className="nav-link" style={{color: "grey", cursor: "pointer"}} onClick={handleShow}>Create New</a>
						</li>
						<li className="navbar-item">
							<a href="https://github.com/chiay/Headphone-Burn-In-Tracker" className="nav-link" style={{color: "grey"}}>GitHub</a>
						</li>
					</ul>
				</div>
			</nav>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create New</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={ onSubmitName }>
						<div className="form-group">
							<input type="text" className="form-control" id="name" required placeholder="Headphone" onChange={ onChangeName }/>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
}

import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleLogout = () => {
		actions.logout();
		navigate("/login");
	}

	return (
		<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">My Invoices</span>
				</Link>
				<div className="ml-auto">
					{!store.token ?
						<Link to="/login">
							<button className="btn btn-primary">Login</button>
						</Link>
						:
						<button
							className="btn btn-danger"
							onClick={handleLogout}
						>Log out</button>
					}
				</div>
			</div>
		</nav>
	);
};

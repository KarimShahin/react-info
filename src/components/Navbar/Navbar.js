import logo from "../../logo.svg";
import "./Navbar.css";
export default function Navbar() {
	return (
		<>
			<header>
				<nav className="navbar">
					<div className="brand-logo">
						<img className="brand-image" src={logo} />
						<h2 className="brand-name">ReactFacts</h2>
					</div>
					<h3 className="brand-subtitle">React Course - Project 1</h3>
				</nav>
			</header>
		</>
	);
}

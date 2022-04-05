import "./Main.css";

export default function Main() {
	return (
		<>
			<main className="container">
				<h1 className="main-header">Fun Facts About React</h1>
				<ul className="main-content-list">
					<li className="main-content-list-item">Was first released in 2013</li>
					<li className="main-content-list-item">Was originally created by Jordan Walke</li>
					<li className="main-content-list-item">Has well over 100K stars on GitHub</li>
					<li className="main-content-list-item">is maintained by Facebook</li>
					<li className="main-content-list-item">
						Powers thousands of enterprise apps, including mobile apps
					</li>
				</ul>
			</main>
		</>
	);
}

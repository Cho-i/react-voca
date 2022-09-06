import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<h1>
				<Link to="/">토익 영단어(고급)</Link>
			</h1>
			<div className="menu">
				<Link to="/" className="link">단어 추가</Link>
				<Link to="/" className="link">Day 추가</Link>
			</div>
		</div>
	)
}

export default Header;

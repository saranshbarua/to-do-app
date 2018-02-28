import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ToDoList from "./ToDoList";

var destination = document.querySelector("#container");

class ToDoApp extends React.Component {
	render(){
		return(
			<div className="container">
			<p className="header">Just Do It</p>
			<ToDoList />
			<p className="footer">
				Click on a to-do to delete it
				<br />
				{"< />"} by @saranshbarua
			</p>
			</div>	
		);
	}
}

ReactDOM.render(<ToDoApp />,destination);
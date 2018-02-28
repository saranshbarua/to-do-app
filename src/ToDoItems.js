import React from "react";
import "./index.css";

class ToDoItems extends React.Component{
	constructor(props,context){
		super(props,context);
		this.createTask = this.createTask.bind(this);
	}

	delete(key){
		this.props.delete(key);
	}

	createTask(item){
		return <li className="items" onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
	}

	render(){

		var Entries = this.props.entries;
		var listItems = Entries.map(this.createTask);

		return(
			<ul className="itemTable">
				{listItems}
			</ul>
		)
	}
}

export default ToDoItems;
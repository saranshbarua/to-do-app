import React from "react";
import "./index.css";

import ToDoItems from "./ToDoItems.js";

class ToDoList extends React.Component {

	constructor(props,context){
		super(props,context);

		this.state = {
		items: [],
		}

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	

	addItem(e) {
		var itemArray = this.state.items;

		if(this._inputElement.value !== "") {
			itemArray.unshift({
				text: this._inputElement.value,
				key: Date.now()
			});

			this.setState({
				items: itemArray
			});

			this._inputElement.value = "";
		}

		e.preventDefault();
	}

	deleteItem(key){
		var filteredItems = this.state.items.filter(function (item) {
		    return (item.key !== key);
		  });
		 
		  this.setState({
		    items: filteredItems
		  });
	}

	render(){
		return(
			<div className="wrapper">
			<div className="inputForm">
				<form className="form" onSubmit={this.addItem}>
					<input className="input" ref={(a) => this._inputElement = a} placeholder="Enter a To Do"></input>
					<button className="butt" type ="submit">Add</button>
				</form>
			</div>
			<ToDoItems className="itemTable" entries = {this.state.items} delete={this.deleteItem} />
			</div>
		);
	}
}

export default ToDoList;
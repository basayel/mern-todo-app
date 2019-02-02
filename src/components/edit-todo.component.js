import React, { Component } from "react";
import axios from "axios";

class EditTodo extends Component {

	constructor(props){
		super(props);

		this.state = {
			todo_description: '',
			todo_responsible: '',
			todo_priority: '',
			todo_completed: false
		}
	}

	componentDidMount(){

	}

	onChangeTodoDescription(e){
		this.setState({ todo_description: e.target.value });
	}

	onChangeTodoResponsible(e){
		this.setState({ todo_responsible: e.target.value });
	}

	onChangeTodoPriority(e){
		this.setState({ todo_priority: e.target.value });
	}

	onChangeTodoCompleted(e){
		this.setState({ todo_completed: !this.state.todo_completed });
	}

	onSubmit(e){
		e.preventDefault();
	}

	render(){
		return (
			<div>
				<p>Welcome to Edit Todo Component!</p>
			</div>
		)
	}
}

export default EditTodo;
import React from 'react';

import ToDotask from './ToDotask';
import ToDotaskAdd from './ToDotaskAdd';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			tasks: []
		}
		
		this.onTaskDelete = this.onTaskDelete.bind(this);
		this.onTaskAdd = this.onTaskAdd.bind(this);
	}
	
	componentDidMount() {
		fetch('tasks').then(function(res) {
			return res.json(); 
		}).then((data) => {
			this.setState({
				tasks: data
			});
		});
	}
	 
	onTaskDelete(_id) {
		this.setState({
			tasks:this.state.tasks.filter(function(task) {
				return task.id !== _id;
			})
		});
	}
	
	onTaskAdd(task) {
		this.setState({
			tasks: [...this.state.tasks, task]
		});
	}
	 
	render() {
		return (
			<div className="App">
				<ToDotaskAdd onTaskAdd={this.onTaskAdd} />
				<ul>
				{
					this.state.tasks.map((task) => {
						return (
							<ToDotask task={task} onTaskDelete={this.onTaskDelete} onTaskAdd={this.onTaskAdd} key={task._id} />
						)
					})
				}
				</ul>
			</div>
		);
	}
}

export default App;

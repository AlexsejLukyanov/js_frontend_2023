import React from 'react';

import ToDotask from './ToDotask';

class ToDoList extends React.Component {
	render() {
		return (
			<div className="List">
				<ul>
				{
					this.props.tasks.map((task) => {
						return (
							<ToDotask task={task} onTaskDelete={this.props.onTaskDelete} key={task._id} />
						)
					})
				}
				</ul>
			</div>
		);
	}
}

export default ToDoList;

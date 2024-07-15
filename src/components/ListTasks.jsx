import Task from "./Task";

const ListTasks = ({ tasks, deleteTask, taskDone }) => {
	return (
		<>
			<ul className="flex flex-col gap-4">
				{tasks.map((task) => (
					<Task
						id={task.id}
						key={task.id}
						name={task.name}
						completed={task.done}
						deleteTask={deleteTask}
						taskDone={taskDone}
					/>
				))}
			</ul>
		</>
	);
};

export default ListTasks;

import IconComponent from "../components/IconComponent";

const Task = ({ name, id, completed, deleteTask, taskDone }) => {
	return (
		<>
			<li
				className={`${
					completed == true
						? "bg-[rgba(64,251,114,0.1)] border-2 border-green-700"
						: "bg-[#242338]"
				} p-4 rounded-lg flex gap-2 items-center justify-between`}
			>
				<div className="task flex items-center gap-2">
					<div className="flex items-center">
						<input
							type="checkbox"
							value={completed}
							onChange={() => taskDone(id, completed, name)}
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
							focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
						/>
					</div>
					{name}
				</div>
				<button onClick={() => deleteTask(id)}>
					<IconComponent iconName="TrashIcon" />
				</button>
			</li>
		</>
	);
};

export default Task;

import Task from "./Task";
import { motion } from "framer-motion";

const ListTasks = ({ tasks, deleteTask, taskDone }) => {
	return (
		<>
			<motion.ul
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="flex flex-col gap-4"
			>
				{tasks.length > 0 ? (
					tasks.map((task) => (
						<Task
							id={task.id}
							key={task.id}
							name={task.name}
							completed={task.done}
							deleteTask={deleteTask}
							taskDone={taskDone}
						/>
					))
				) : (
					<span className="font-regular text-xl">
						No hay más tareas
					</span>
				)}
			</motion.ul>
		</>
	);
};

export default ListTasks;

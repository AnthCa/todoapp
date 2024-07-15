import { useState } from "react";
import "./App.css";
import NewTasks from "./components/NewTasks";
import { mockTasks } from "./data/mockTasks";
import ListTasks from "./components/ListTasks";
import { v4 as uuidv4 } from "uuid";
import Header from "./layout/Header";
import ProgressTasks from "./components/ProgressTasks";
import Footer from "./layout/Footer";
import HeaderSection from "./layout/HeaderSection";

// data
function App() {
	const [tasks, setTasks] = useState(mockTasks);

	function onAddTask(val) {
		const formTask = {
			id: uuidv4(),
			name: val,
			done: false,
		};
		setTasks([...tasks, formTask]);
	}

	function onDeleteTask(id) {
		setTasks(tasks.filter((t) => t.id !== id));
	}

	const onTaskDone = (id) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === id) {
					return {
						...task,
						done: !task.done,
					};
				}
				return task;
			})
		);
	};

	return (
		<>
			<div className="grid grid-rows-[80px,1fr,60px] min-h-screen relative">
				<div className="absolute w-full top-0 z-[-2] h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
				<Header />
				<main className="grid grid-cols-2 gap-24 place-content-start max-w-screen-xl mx-auto w-full pt-36">
					<div className="new-tasks">
						<NewTasks addNewTask={onAddTask} />
						<HeaderSection title="List todo" iconName="ListCheck" />
						<ListTasks
							tasks={tasks.filter((t) => t.done === false)}
							deleteTask={onDeleteTask}
							taskDone={onTaskDone}
						/>
					</div>
					<div className="finish-tasks relative">
						<ProgressTasks totalTasks={tasks} />
						<HeaderSection
							iconName="TasksDone"
							title="Tareas finalizadas"
						/>
						<ListTasks
							tasks={tasks.filter((t) => t.done === true)}
							deleteTask={onDeleteTask}
							taskDone={onTaskDone}
						/>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;

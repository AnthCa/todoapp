import { useState } from "react";
import IconComponent from "../components/IconComponent";

const NewTasks = ({ addNewTask }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		addNewTask(inputValue);
		setInputValue("");
	};

	return (
		<>
			<div className="header-section flex items-center gap-2 pb-4">
				<IconComponent iconName="EditIcon" />
				<h3 className="text-3xl">Agregar nueva tarea</h3>
			</div>

			<form
				className="flex items-center w-full mb-24"
				onSubmit={onSubmit}
			>
				<input
					type="text"
					name="task"
					value={inputValue}
					onChange={onInputChange}
					className="text-gray-100 text-sm rounded-l-lg block p-2.5 dark:bg-[#242338] h-[58px] w-full border-transparent focus:border-custom-blue focus:outline-none focus:ring-0 focus:border-2 focus:border-[#1c4ed8]"
					placeholder="Task one..."
				/>

				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800  focus-visible:border-none font-medium rounded-r-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center h-[58px] flex justify-center items-center"
				>
					<IconComponent iconName="AddIcon" />
				</button>
			</form>
		</>
	);
};

export default NewTasks;

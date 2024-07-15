import { useEffect } from "react";
import { useState } from "react";
import IconComponent from "../components/IconComponent";

const ProgressTasks = ({ totalTasks }) => {
	const [qtyTask, setQtyTask] = useState(totalTasks);

	useEffect(() => {
		const filteredTasks = totalTasks.filter((t) => t.done === true);
		setQtyTask(filteredTasks);
	}, [totalTasks]);

	let result = (qtyTask.length / totalTasks.length) * 100;

	return (
		<>
			<section className="progress mb-24">
				<div className="header-section flex items-center gap-4">
					<IconComponent iconName="ProgressIcon" />
					<h2 className="text-3xl">Progresso</h2>
				</div>
				<span className="text-xl font-semibold mt-4 block">
					Progress:{" "}
					<span className="text-green-500 font-bold">
						{result.toFixed(0)} %
					</span>
					{result === 100 ? (
						<div className="congrats-messagge animate-bounce flex items-center gap-2 bg-[rgba(64,251,114,0.2)] absolute -top-[13%] rounded-lg py-2 px-4 border border-green-500">
							{`Felicidades completaste el ${result.toFixed(0)}%`}
							<div className="icon">
								<IconComponent iconName="TrophieIcon" />
							</div>
						</div>
					) : (
						""
					)}
				</span>
				<div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-2">
					<div
						className="bg-green-500 h-1 rounded-full shadow-md shadow-green-500"
						style={{ width: `${result}%` }}
					></div>
				</div>
			</section>
		</>
	);
};

export default ProgressTasks;

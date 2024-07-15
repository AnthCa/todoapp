import { useEffect } from "react";
import { useState } from "react";
import IconComponent from "../components/IconComponent";
import { motion } from "framer-motion";

const ProgressTasks = ({ totalTasks = 0 }) => {
	const [qtyTask, setQtyTask] = useState(totalTasks);

	useEffect(() => {
		const filteredTasks = totalTasks.filter((t) => t.done === true);
		setQtyTask(filteredTasks);
	}, [totalTasks]);

	let result = (qtyTask.length / totalTasks.length) * 100;

	return (
		<>
			<section className="">
				<div className="header-section flex items-center gap-4">
					<span className="border-2 border-[#535281] rounded-md p-2 flex items-center justify-center">
						<IconComponent iconName="ProgressIcon" />
					</span>
					<h2 className="text-3xl">Progresso</h2>
				</div>
				<span className="text-xl font-semibold mt-4 block">
					Progress:{" "}
					<span className="text-green-500 font-bold">
						{result.toFixed(0) >= 0 ? result.toFixed(0) : "0"} %
					</span>
				</span>
				<div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-2">
					<div
						className="bg-green-500 h-1 rounded-full shadow-md shadow-green-500"
						style={{ width: `${result}%` }}
					></div>
				</div>

				{result === 100 ? (
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -100, opacity: 0 }}
						className="congrats-messagge font-bold text-2xl flex items-center gap-2 bg-[rgba(64,251,114,0.2)] absolute bottom-6 rounded-lg mt-12 py-2  px-4 border border-green-500"
					>
						{`Felicidades completaste el ${result.toFixed(0)}%`}
						<div className="icon">
							<IconComponent iconName="TrophieIcon" />
						</div>
					</motion.div>
				) : (
					""
				)}
			</section>
		</>
	);
};

export default ProgressTasks;

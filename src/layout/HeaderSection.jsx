import IconComponent from "../components/IconComponent";

const HeaderSection = ({ title, iconName }) => {
	return (
		<>
			<div className="header-section flex items-center gap-4 mb-12">
				<span className="border-2 border-[#535281] rounded-md p-2 flex items-center justify-center">
					<IconComponent iconName={iconName} />
				</span>
				<h2 className="text-3xl">{title}</h2>
			</div>
		</>
	);
};

export default HeaderSection;

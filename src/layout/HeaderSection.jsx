import IconComponent from "../components/IconComponent";

const HeaderSection = ({ title, iconName }) => {
	return (
		<>
			<div className="header-section flex items-center gap-4 mb-12">
				<IconComponent iconName={iconName} />
				<h2 className="text-3xl">{title}</h2>
			</div>
		</>
	);
};

export default HeaderSection;

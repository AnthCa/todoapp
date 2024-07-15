import icons from "../icons/icons";

const IconComponent = ({ iconName }) => {
	const Icon = icons[iconName];
	return Icon ? <Icon /> : null;
};

export default IconComponent;

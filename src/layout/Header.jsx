import IconComponent from "../components/IconComponent";
const Header = () => {
	return (
		<>
			<header className="border-b-[0.1px] border-[#2f2e49] py-6 flex items-center">
				<div className="w-full max-w-screen-xl mx-auto flex justify-between items-center">
					<h2 className="font-bold text-2xl flex gap-2 font-sans">
						<IconComponent iconName="CheckIcon" />
						TODOAPP
					</h2>

					<div className="flex gap-4">
						<IconComponent iconName="GithubIcon" />
						<IconComponent iconName="LinkedinIcon" />
						<IconComponent iconName="SendIcon" />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;

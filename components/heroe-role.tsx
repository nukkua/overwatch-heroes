interface Props {
	role: string;
	icon?: JSX.Element;
}
export const HeroeRole = ({ role, icon }: Props) => {
	return (
		<button className="flex gap-1 items-center justify-center p-2 h-[55px] bg-white text-blue-900 font-bold rounded" >
			{icon}
			<h2 className="text-md uppercase">{role}</h2>
		</button>
	)
}

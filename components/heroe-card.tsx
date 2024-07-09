import Image from "next/image";
import Link from "next/link";

type Icon = {
	support: JSX.Element;
	damage: JSX.Element;
	tank: JSX.Element;
}
const icon = {
	support:
		<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 15.25a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 1 0 1.5 0v-1.75h1.75a.75.75 0 1 0 0-1.5h-1.75V13.5a.75.75 0 0 0-1.5 0v1.75z" /><path fill="currentColor" fill-rule="evenodd" d="M7.25 5.461V6.7c-.37.028-.738.059-1.107.093a3.246 3.246 0 0 0-2.946 3.233v7.95a3.247 3.247 0 0 0 2.946 3.233c3.896.363 7.818.363 11.714 0a3.247 3.247 0 0 0 2.946-3.233v-7.95a3.246 3.246 0 0 0-2.946-3.233A63.222 63.222 0 0 0 16.75 6.7V5.46a1.75 1.75 0 0 0-1.49-1.73l-1.22-.183a13.75 13.75 0 0 0-4.08 0l-1.22.183a1.75 1.75 0 0 0-1.49 1.73m6.567-.43a12.25 12.25 0 0 0-3.634 0l-1.22.183a.25.25 0 0 0-.213.247v1.143a63.161 63.161 0 0 1 6.5 0V5.46a.25.25 0 0 0-.213-.247zm3.901 3.255a61.661 61.661 0 0 0-11.436 0a1.746 1.746 0 0 0-1.585 1.739v.225h14.606v-.225c0-.902-.687-1.656-1.585-1.74m1.585 3.464H4.697v6.225c0 .902.687 1.656 1.585 1.74a61.88 61.88 0 0 0 11.436 0a1.746 1.746 0 0 0 1.585-1.74z" clip-rule="evenodd" /></svg>
	,
	damage:
		< svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512" > <path fill="currentColor" d="M96 36.61L41.21 173.6c.26.6.84 1.4 2.15 2.5c2.16 1.8 6.2 4 11.49 5.8c10.57 3.5 25.9 5.5 41.15 5.5c15.2 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.3-1.2 1.9-1.9 2.2-2.5zm160 0L201.2 173.6c.3.6.9 1.3 2.2 2.5c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5c15.3 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.3-1.2 1.9-1.9 2.2-2.5zm160 0L361.2 173.6c.3.6.9 1.3 2.2 2.5c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5s30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.3-1.2 1.9-1.9 2.2-2.5zM41 195.7v17c0 1 .2 1.8 2.36 3.7c2.16 1.8 6.2 4 11.49 5.8c10.57 3.5 25.9 5.5 41.15 5.5c15.2 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c2.2-1.9 2.4-2.7 2.4-3.7v-17c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5c-16.75 0-33.42-2-46.85-6.5c-2.87-.9-5.59-2-8.15-3.2m160 0v17c0 1 .2 1.8 2.4 3.7c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5c15.3 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c2.2-1.9 2.4-2.7 2.4-3.7v-17c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5s-33.4-2-46.8-6.5c-2.9-.9-5.6-2-8.2-3.2m160 0v17c0 1 .2 1.8 2.4 3.7c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5s30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c2.2-1.9 2.4-2.7 2.4-3.7v-17c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5s-33.4-2-46.8-6.5c-2.9-.9-5.6-2-8.2-3.2M41 236v158.3l17.06 34.1l-16.71 33.4c.3.6.87 1.3 2.01 2.3c2.16 1.8 6.2 4 11.49 5.8c10.57 3.5 25.9 5.5 41.15 5.5c15.2 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.2-1 1.7-1.7 2.1-2.3l-16.8-33.4l17.1-34.1V236c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5c-16.75 0-33.42-2-46.85-6.5c-2.87-.9-5.59-2-8.15-3.2m160 0v158.3l17.1 34.1l-16.8 33.4c.4.6.9 1.3 2.1 2.3c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5c15.3 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.2-1 1.7-1.7 2.1-2.3l-16.8-33.4l17.1-34.1V236c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5s-33.4-2-46.8-6.5c-2.9-.9-5.6-2-8.2-3.2m160 0v158.3l17.1 34.1l-16.8 33.4c.4.6.9 1.3 2.1 2.3c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5s30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.2-1 1.7-1.7 2.1-2.3l-16.8-33.4l17.1-34.1V236c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5s-33.4-2-46.8-6.5c-2.9-.9-5.6-2-8.2-3.2" /></svg>,

	tank:
		< svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256" > <path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2a128.3 128.3 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160Z" /></svg >,

}
interface Props {
	name: string;
	portrait: string;
	role: string;
}
export const HeroeCard = ({ name, portrait, role }: Props) => {

	return (
		<Link href={`/heroes/${name}`} className="flex flex-col bg-white p-0.5 rounded-sm items-center  hover:scale-105 xl:hover:scale-[1.15] hover:transform hover:duration-300 hover:ease-in-out transition-transform h-[235px] md:p-1 md:h-[321px] lg:w-[208px] xl:h-[290px] xl:w-[196px]">
			<div className="flex overflow-hidden w-full h-full bg-blue-100">
				<img className="overflow-hidden object-cover scale-[1.02]" src={portrait} alt="" />
			</div>
			<div className="flex items-center gap-2">
				{icon[role]}
				<p className="font-bold uppercase my-3">{name}</p>

			</div>



		</Link>
	)
}

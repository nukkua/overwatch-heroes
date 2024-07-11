"use client"
import { FullHero } from "@/interfaces/HeroInfo";

const icon = {
	support:
		<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 15.25a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 1 0 1.5 0v-1.75h1.75a.75.75 0 1 0 0-1.5h-1.75V13.5a.75.75 0 0 0-1.5 0v1.75z" /><path fill="currentColor" fill-rule="evenodd" d="M7.25 5.461V6.7c-.37.028-.738.059-1.107.093a3.246 3.246 0 0 0-2.946 3.233v7.95a3.247 3.247 0 0 0 2.946 3.233c3.896.363 7.818.363 11.714 0a3.247 3.247 0 0 0 2.946-3.233v-7.95a3.246 3.246 0 0 0-2.946-3.233A63.222 63.222 0 0 0 16.75 6.7V5.46a1.75 1.75 0 0 0-1.49-1.73l-1.22-.183a13.75 13.75 0 0 0-4.08 0l-1.22.183a1.75 1.75 0 0 0-1.49 1.73m6.567-.43a12.25 12.25 0 0 0-3.634 0l-1.22.183a.25.25 0 0 0-.213.247v1.143a63.161 63.161 0 0 1 6.5 0V5.46a.25.25 0 0 0-.213-.247zm3.901 3.255a61.661 61.661 0 0 0-11.436 0a1.746 1.746 0 0 0-1.585 1.739v.225h14.606v-.225c0-.902-.687-1.656-1.585-1.74m1.585 3.464H4.697v6.225c0 .902.687 1.656 1.585 1.74a61.88 61.88 0 0 0 11.436 0a1.746 1.746 0 0 0 1.585-1.74z" clip-rule="evenodd" className="text-white" /></svg>
	,
	damage:
		< svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512" > <path fill="currentColor" d="M96 36.61L41.21 173.6c.26.6.84 1.4 2.15 2.5c2.16 1.8 6.2 4 11.49 5.8c10.57 3.5 25.9 5.5 41.15 5.5c15.2 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.3-1.2 1.9-1.9 2.2-2.5zm160 0L201.2 173.6c.3.6.9 1.3 2.2 2.5c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5c15.3 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.3-1.2 1.9-1.9 2.2-2.5zm160 0L361.2 173.6c.3.6.9 1.3 2.2 2.5c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5s30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.3-1.2 1.9-1.9 2.2-2.5zM41 195.7v17c0 1 .2 1.8 2.36 3.7c2.16 1.8 6.2 4 11.49 5.8c10.57 3.5 25.9 5.5 41.15 5.5c15.2 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c2.2-1.9 2.4-2.7 2.4-3.7v-17c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5c-16.75 0-33.42-2-46.85-6.5c-2.87-.9-5.59-2-8.15-3.2m160 0v17c0 1 .2 1.8 2.4 3.7c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5c15.3 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c2.2-1.9 2.4-2.7 2.4-3.7v-17c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5s-33.4-2-46.8-6.5c-2.9-.9-5.6-2-8.2-3.2m160 0v17c0 1 .2 1.8 2.4 3.7c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5s30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c2.2-1.9 2.4-2.7 2.4-3.7v-17c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5s-33.4-2-46.8-6.5c-2.9-.9-5.6-2-8.2-3.2M41 236v158.3l17.06 34.1l-16.71 33.4c.3.6.87 1.3 2.01 2.3c2.16 1.8 6.2 4 11.49 5.8c10.57 3.5 25.9 5.5 41.15 5.5c15.2 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.2-1 1.7-1.7 2.1-2.3l-16.8-33.4l17.1-34.1V236c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5c-16.75 0-33.42-2-46.85-6.5c-2.87-.9-5.59-2-8.15-3.2m160 0v158.3l17.1 34.1l-16.8 33.4c.4.6.9 1.3 2.1 2.3c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5c15.3 0 30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.2-1 1.7-1.7 2.1-2.3l-16.8-33.4l17.1-34.1V236c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5s-33.4-2-46.8-6.5c-2.9-.9-5.6-2-8.2-3.2m160 0v158.3l17.1 34.1l-16.8 33.4c.4.6.9 1.3 2.1 2.3c2.1 1.8 6.2 4 11.4 5.8c10.6 3.5 26 5.5 41.2 5.5s30.6-2 41.2-5.5c5.2-1.8 9.3-4 11.4-5.8c1.2-1 1.7-1.7 2.1-2.3l-16.8-33.4l17.1-34.1V236c-2.6 1.2-5.3 2.3-8.2 3.2c-13.4 4.5-30 6.5-46.8 6.5s-33.4-2-46.8-6.5c-2.9-.9-5.6-2-8.2-3.2" className="text-white" /></svg>,

	tank:
		< svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256" > <path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2a128.3 128.3 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160Z" className="text-white" /></svg >,

}


export const HeroeInfo = ({ hero }: { hero: FullHero }) => {
	return (
		<main className="flex flex-col w-full min-h-screen bg-black px-6 gap-10">
			<section className="flex flex-col items-center gap-4 mt-10">
				<img src={hero?.portrait} alt="" />
				<h1 className="text-white text-5xl font-bold">{hero?.name}</h1>
				<p className="text-white font-bold text-center">{hero?.description}</p>
				<div className="flex flex-col gap-4">
					<div className="flex gap-3 items-center">
						<div className="flex p-3 bg-gray-500 rounded-full">
							{icon[hero?.role]}

						</div>
						<span className="text-white capitalize font-bold">{hero?.role}</span>
					</div>
					<div className="flex gap-3 items-center">
						<div className="flex p-3 bg-gray-500 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" className="text-white" /></svg>

						</div>

						<span className="text-white font-bold">{hero?.location}</span>
					</div>
					<div className="flex gap-3 items-center">
						<div className="flex p-3 bg-gray-500 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M160 894c0 17.7 14.3 32 32 32h286V550H160zm386 32h286c17.7 0 32-14.3 32-32V550H546zm334-616H732.4c13.6-21.4 21.6-46.8 21.6-74c0-76.1-61.9-138-138-138c-41.4 0-78.7 18.4-104 47.4c-25.3-29-62.6-47.4-104-47.4c-76.1 0-138 61.9-138 138c0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v140h366V310h68v172h366V342c0-17.7-14.3-32-32-32m-402-4h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70s70 31.4 70 70zm138 0h-70v-70c0-38.6 31.4-70 70-70s70 31.4 70 70s-31.4 70-70 70" className="text-white" /></svg>
						</div>

						<span className="text-white font-bold">{hero?.birthday}</span>
					</div>

				</div>

			</section>
			<div className="border"></div>
			<section>
				<img src={hero?.story.chapters[0].picture} alt="" />

			</section>
			<div className="border"></div>
			<section>
				<img src={hero?.story.chapters[1].picture} alt="" />

			</section>
		</main>
	)
}

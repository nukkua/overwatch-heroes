import { Heroes, SliderHeroesRole } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Heroes - Overwatch 2",
	description: "All the heroes from the game Overwatch 2",
}

export default function HeroesPage() {

	return (
		<main className="flex flex-col items-center w-full min-h-screen bg-black gap-10 overflow-x-hidden">
			<section className="relative w-full h-[190px] overflow-hidden xl:h-[370px]">
				<img
					className="scale-[1.6] relative top-[-50px] w-full h-full object-cover xl:scale-100 xl:top-[-61px]"
					src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blta71591f6cdc5d595/632254b15f39a30d9cedbc7d/960_Header_V3.jpg?format=webply&quality=90"
					alt=""
				/>
				<h1 className="absolute inset-0 flex justify-center top-28 font-bold text-white text-3xl xl:text-6xl xl:top-44">HEROES</h1>
			</section>
			<div className="px-2">
				<SliderHeroesRole />
			</div>

			<p className="text-white font-bold text-center">Overwatch features an international cast of powerful heroes with captivating personalities and backstories. Explore the full roster below</p>
			<div className="px-2">
				<Heroes />
			</div>


		</main>
	)
}

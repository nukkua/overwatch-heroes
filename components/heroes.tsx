"use client"

import { useFetch } from "@/hooks/useFetch";
import { HeroeCard } from "./heroe-card";
import { Heroe } from "@/interfaces/Heroe";

interface Props {
	heroes: Heroe[]

}

export const Heroes = ({ heroes }: Props) => {

	return (
		<section className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-9">

			{heroes?.map((heroe) => (
				<HeroeCard
					id={heroe.key}
					name={heroe.name}
					role={heroe.role}
					portrait={heroe.portrait}
				/>

			))}


		</section>

	);
}

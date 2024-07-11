
import type { FullHero } from "@/interfaces/HeroInfo";
import { HeroeInfo } from '@/components/heroe-info'
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from "next/navigation";


const getHero = async (key: string): Promise<FullHero> => {
	const res = await fetch(`https://overfast-api.tekrop.fr/heroes/${key}`);
	const data = await res.json();

	if (data?.detail?.[0]?.msg?.includes("Input should")) {
		notFound();
	}

	return data;
}


export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	try {
		const key = await getHero(params.key);
		return {
			title: key.name,
		}

	} catch (e) {
		return {
			title: "Not found",
		}
	}


}

interface Props {
	params: { key: string },
	heroe: FullHero,
}

export default async function HeroePage({ params }: Props) {
	const { key } = params

	const hero = await getHero(key.toLowerCase())
	return (
		<HeroeInfo hero={hero} />
	)
}

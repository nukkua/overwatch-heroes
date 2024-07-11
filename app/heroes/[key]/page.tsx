
import type { FullHero } from "@/interfaces/HeroInfo";
import { HeroeInfo } from '@/components/heroe-info'
import type { Metadata, ResolvingMetadata } from 'next'


const getHero = async (key: string) => {
	const res = await fetch(`https://overfast-api.tekrop.fr/heroes/${key}`);
	const data = await res.json();

	return data;
}


export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const key: string = `Heroe: ${params.key.charAt(0).toUpperCase()}${params.key.slice(1)} `


	return {
		title: key,
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

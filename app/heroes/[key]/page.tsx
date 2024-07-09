
import { HeroeInfo } from '@/components/heroe-info'
import { useFetch } from '@/hooks/useFetch'
import type { Metadata, ResolvingMetadata } from 'next'

interface Props {
	params: { key: string }
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

export default function HeroePage({ params }: Props) {
	const { key: name } = params
	return (
		<HeroeInfo name={name} />
	)
}

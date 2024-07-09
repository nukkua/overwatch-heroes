"use client"

import { Heroe } from "@/interfaces/Heroe";
import { type FullHero } from "@/interfaces/HeroInfo";

import { useEffect, useState } from "react";

interface State<T> {
	data: T | null,
	isLoading: boolean,
	hasError: unknown | null,
}

export const useFetch = <T,>(url: string) => {

	const [state, setState] = useState<State<T>>({
		data: null,
		isLoading: true,
		hasError: null,
	});
	const getHeroes = async () => {

		try {
			const res = await fetch(url)
			const data = await res.json();
			setState({
				data,
				isLoading: false,
				hasError: null,
			})

		} catch (e) {
			setState({
				data: null,
				isLoading: false,
				hasError: e,
			})

		}



	}
	useEffect(() => {

		getHeroes();

	}, [url])
	return {
		...state

	}
}

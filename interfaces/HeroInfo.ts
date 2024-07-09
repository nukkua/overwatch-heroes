
export interface FullHero {
	name: string;
	description: string;
	portrait: string;
	role: string;
	location: string;
	birthday: string;
	age: number;
	hitpoints: Hitpoints;
	abilities: Ability[];
	story: Story;
}

export interface Ability {
	name: string;
	description: string;
	icon: string;
	video: Video;
}

export interface Video {
	thumbnail: string;
	link: Link;
}

export interface Link {
	mp4: string;
	webm: string;
}

export interface Hitpoints {
	armor: number;
	shields: number;
	health: number;
	total: number;
}

export interface Story {
	summary: string;
	media: Media;
	chapters: Chapter[];
}

export interface Chapter {
	title: string;
	content: string;
	picture: string;
}

export interface Media {
	type: string;
	link: string;
}

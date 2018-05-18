// @flow
export type aid = {
	_id: string,
	author: {
		name: string,
		picURL: string
	},
	demo?: true,
	fromMia?: true,
	where: {
		address: string,
		coordinates?: Array<number>,
		metroName?: string
	},
	reward: number,
	title: string,
	urgent?: true 
};

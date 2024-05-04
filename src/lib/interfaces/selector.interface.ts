export interface ISelectorOption {
	value: string;
	onClick: () => void;
}

export interface ISelector {
	title: string;
	icon: string;
	options: ISelectorOption[];
}

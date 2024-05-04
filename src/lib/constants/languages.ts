import type {
	ISelector,
	ISelectorOption,
} from '$lib/interfaces/selector.interface';

import { locale } from '$lib/i18n/i18n';

const changeLanguage = (lang: string): void => locale.set(lang);

const options: ISelectorOption[] = [
	{
		value: 'English',
		onClick: () => changeLanguage('en'),
	},
	{
		value: 'Spanish',
		onClick: () => changeLanguage('en'),
	},
];

const languages: ISelector = {
	title: 'Language',
	icon: 'language',
	options,
};

export default languages;

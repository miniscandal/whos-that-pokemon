import { isUrl } from '../validate-value-type';

function urlParse(url, index) {
	if (!isUrl) {
		return;
	}

	const newUrl = new URL(url);
	const pathname = newUrl.pathname;
	const urlSplit = pathname.split('/');
	const dividend = urlSplit[urlSplit.length - index];

	return dividend;
};

export { urlParse }

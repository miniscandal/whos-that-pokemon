function isArrayObject({ object }) {
	return (typeof object === 'object') && Array.isArray(object);
}

function isJsonObject({ object }) {
	return (typeof object === 'object') && !Array.isArray(object);
}

function isString({ value }) {
	return typeof value === 'string';
}

function isNumber({ value }) {
	return typeof value === 'number';
}

function isBlob({ blob }) {
	return blob instanceof Blob && blob.size > 0;
}

function isUrl({ }) {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
}

export {
	isArrayObject,
	isJsonObject,
	isString,
	isNumber,
	isBlob,
	isUrl
};

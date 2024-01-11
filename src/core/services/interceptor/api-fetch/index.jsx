import { errorHandling } from '../error-handling';

function request({ url, responseType, getData }) {
	const promise = fetch(url).then(
		response => {
			if (!response.ok) {
				promise.status = response.status;
				throw response;
			}
			return response;
		},
		reason => {
			promise.status = reason;
		},
	).then(
		response => {
			const types = {
				json: () => response.json(),
				blob: () => response.blob(),
			};
			return types[responseType]();
		}
	).then(
		data => {
			promise.status = 'fulfilled';
			promise.data = data;
		}
	).catch(
		error => {
			promise.reason = error;
		}
	);
	promise.status = 'pending';

	const read = () => {
		switch (promise.status) {
			case 'fulfilled':
				return { data: getData(promise.data) };
			case 'rejected':
				return { status: promise.status };
			case 'pending':
				throw promise;
			default:
				return { status: promise.status };
		}
	};

	return {
		read: () => errorHandling(read)
	};
}

export { request };

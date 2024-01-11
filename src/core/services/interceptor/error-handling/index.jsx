import { ErrorMessage } from '@shared-components/molecules/error-message';

function errorHandling(read) {
	const { data, status, } = read();
	if (status === 404) {
		return {
			error: {
				component: <ErrorMessage text="Not Found" />,
				status: true
			},
			data: {}
		}
	}
	if (status instanceof Error) {
		return {
			error: {
				component: <ErrorMessage text="Faile To Fetch" />,
				status: true
			},
			data: {}
		}
	};

	return { data, error: {} };
}

export { errorHandling };

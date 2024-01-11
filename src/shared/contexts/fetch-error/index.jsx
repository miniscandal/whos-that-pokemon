import { createContext } from 'react';

const FetchErrorContext = createContext({
	error: {}
});

function FetchErrorProvider({ errors, children }) {
	const value = {
		errors,
	};

	return (
		<FetchErrorContext.Provider value={value}>
			{children}
		</FetchErrorContext.Provider>
	);
}

export { FetchErrorContext, FetchErrorProvider };

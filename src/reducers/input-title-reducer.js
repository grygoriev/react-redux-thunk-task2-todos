export const inputTitleReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_INPUT_TITLE':
			return action.payload;
		default:
			return state;
	}
};

export const sortingReducer = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_SORTING':
			return !state;
		default:
			return state;
	}
};

import { setLoading } from './set-loading.js';

export const getTodosAsync = (dispatch) => {
	fetch('http://localhost:3005/todos')
		.then((loadedData) => loadedData.json())
		.then((loadedTasks) => {
			dispatch({ type: 'GET_TODOS', payload: loadedTasks });
		})
		.finally(dispatch(setLoading(false)));
};

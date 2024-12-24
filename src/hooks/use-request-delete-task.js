import { useState } from 'react';
import { getTodosAsync, setLoading } from '../actions/index.js';

const ULR = 'http://localhost:3005/todos';

export const useRequestDeleteTodo = (dispatch) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleteTodo = (id) => {
		setIsDeleting(true);
		dispatch(setLoading(true));

		fetch(`${ULR}/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				dispatch(getTodosAsync);
			})
			.finally(() => setIsDeleting(false));
	};

	return { isDeleting, requestDeleteTodo };
};

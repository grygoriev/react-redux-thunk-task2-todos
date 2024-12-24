import { useState } from 'react';
import { getTodosAsync, setLoading } from '../actions/index.js';

const ULR = 'http://localhost:3005/todos';

export const useRequestUpdateTodo = (dispatch) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTodo = (id, title) => {
		setIsUpdating(true);
		dispatch(setLoading(true));

		fetch(`${ULR}/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
				title: title,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				dispatch(getTodosAsync);
			})
			.finally(() => setIsUpdating(false));
	};

	return { isUpdating, requestUpdateTodo };
};

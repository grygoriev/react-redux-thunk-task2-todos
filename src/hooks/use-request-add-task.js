import { useState } from 'react';
import { getTodosAsync, setInputTitle, setLoading } from '../actions/index.js';

const ULR = 'http://localhost:3005/todos';

export const useRequestAddTask = (title, dispatch) => {
	const [isCreating, setIsCreating] = useState(true);

	const requestAddTask = () => {
		setIsCreating(true);
		dispatch(setLoading(true));

		fetch(ULR, {
			method: 'POST',
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
			.finally(() => {
				dispatch(setInputTitle(''));
			});
	};

	return { isCreating, requestAddTask, setIsCreating };
};

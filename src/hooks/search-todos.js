import { useDebounce } from './useDebounce.js';

export const searchTodos = (todos, searchInput) => {
	const debouncedSetSearchValue = useDebounce(searchInput, 500);

	return todos.filter(({ title }) =>
		title.toLowerCase().includes(debouncedSetSearchValue.trim().toLowerCase()),
	);
};

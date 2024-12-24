import { searchTodos } from './search-todos.js';

export const sortTodos = (todos, searchInput, isSorted) =>
	isSorted
		? searchTodos(todos, searchInput).sort((a, b) => a.title.localeCompare(b.title))
		: [...searchTodos(todos, searchInput)];

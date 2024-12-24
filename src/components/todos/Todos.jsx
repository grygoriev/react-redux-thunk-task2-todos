import styles from './Todos.module.css';
import { TodoItem } from '../../components';
import { sortTodos } from '../../hooks';
import { useSelector } from 'react-redux';
import { selectSearchInput, selectSortingStatus, selectTodos } from '../../selectors';

export const Todos = () => {
	const searchInput = useSelector(selectSearchInput);
	const isSorted = useSelector(selectSortingStatus);
	const todos = useSelector(selectTodos);

	const sortedTodos = sortTodos(todos, searchInput, isSorted);

	return (
		<>
			{sortedTodos.length > 0 ? (
				<ul className={styles.todosElements}>
					{sortedTodos.map(({ id, title }) => (
						<TodoItem key={id} id={id} title={title} />
					))}
				</ul>
			) : (
				<p>Не найдены задачи</p>
			)}
		</>
	);
};

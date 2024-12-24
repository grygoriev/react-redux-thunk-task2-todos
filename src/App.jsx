import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingStatus, selectTodos } from './selectors';
import { getTodosAsync, setLoading } from './actions';
import { useEffect } from 'react';
import { ControlPanel, Loader, Todos, InputForm } from './components';

export const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoadingStatus);
	const todos = useSelector(selectTodos);

	useEffect(() => {
		dispatch(setLoading(true));
		dispatch(getTodosAsync);
	}, [dispatch]);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					{todos.length > 0 ? (
						<>
							<ControlPanel />
							<Todos />
							<InputForm />
						</>
					) : (
						<InputForm />
					)}
				</div>
			)}
		</div>
	);
};

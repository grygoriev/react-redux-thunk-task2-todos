import styles from './InputForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputTitle } from '../../selectors';
import { useRequestAddTask } from '../../hooks';
import { setInputTitle } from '../../actions';

export const InputForm = () => {
	const dispatch = useDispatch();
	const inputTitle = useSelector(selectInputTitle);

	const { isCreating, requestAddTask, setIsCreating } = useRequestAddTask(
		inputTitle,
		dispatch,
	);

	const onChangeHandle = (value) => {
		dispatch(setInputTitle(value));
		if (value) {
			setIsCreating(false);
		}
	};

	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				placeholder="Введите новую задачу"
				name="title"
				value={inputTitle}
				onChange={(e) => onChangeHandle(e.target.value)}
			/>
			<button
				onClick={requestAddTask}
				disabled={isCreating}
				className={styles.button}
			>
				Добавить задачу
			</button>
		</form>
	);
};

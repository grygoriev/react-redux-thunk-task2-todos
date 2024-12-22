import styles from './InputForm.module.css';
import { useContext } from 'react';
import { AppContext } from '../../context';

export const InputForm = () => {
	const { inputTitle, onChangeHandle, requestAddTask, isCreating } = useContext(AppContext);

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

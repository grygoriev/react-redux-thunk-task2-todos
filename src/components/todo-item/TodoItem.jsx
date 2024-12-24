import styles from './TodoItem.module.css';
import { useState } from 'react';
import { useRequestDeleteTodo, useRequestUpdateTodo } from '../../hooks';
import { useDispatch } from 'react-redux';

export const TodoItem = ({ id, title }) => {
	const dispatch = useDispatch();
	const [editedTitle, setEditedTitle] = useState(title);
	const [isEditing, setIsEditing] = useState(false);

	const { isDeleting, requestDeleteTodo } = useRequestDeleteTodo(dispatch);
	const { isUpdating, requestUpdateTodo } = useRequestUpdateTodo(dispatch);

	const handleDeleteTodo = (id) => {
		requestDeleteTodo(id);
	};

	const handleSaveTodo = (id, newTitle) => {
		requestUpdateTodo(id, newTitle);
	};

	const handleSave = () => {
		setIsEditing(false);
		handleSaveTodo(id, editedTitle);
	};

	const handleCancel = () => {
		setIsEditing(false);
		setEditedTitle(title);
	};

	const handleEdit = () => {
		setIsEditing(true);
		setEditedTitle(title);
	};

	const isChanging = isUpdating || isDeleting;

	return (
		<li className={styles.todoElement} id={id}>
			{isEditing ? (
				<>
					<input
						className={styles.editInput}
						value={editedTitle}
						onChange={(e) => setEditedTitle(e.target.value)}
					/>
					<button
						className={styles.saveButton}
						onClick={handleSave}
						disabled={isChanging}
					>
						Сохранить
					</button>
					<button
						className={styles.cancelButton}
						onClick={handleCancel}
						disabled={isChanging}
					>
						Отмена
					</button>
				</>
			) : (
				<>
					<span>{title}</span>
					<div>
						<button
							className={styles.editButton}
							onClick={handleEdit}
							disabled={isChanging}
						>
							Изменить
						</button>
						<button
							className={styles.deleteButton}
							onClick={() => handleDeleteTodo(id)}
							disabled={isChanging}
						>
							Удалить
						</button>
					</div>
				</>
			)}
		</li>
	);
};

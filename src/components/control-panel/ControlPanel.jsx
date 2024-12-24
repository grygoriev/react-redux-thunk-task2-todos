import styles from './ControlPanel.module.css';
import { setSearchInput, setSorting } from '../../actions/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchInput, selectSortingStatus } from '../../selectors/index.js';

export const ControlPanel = () => {
	const dispatch = useDispatch();
	const searchInput = useSelector(selectSearchInput);
	const isSorted = useSelector(selectSortingStatus);

	const handleValueChange = (event) => {
		dispatch(setSearchInput(event.target.value));
	};

	return (
		<>
			<input
				type="text"
				value={searchInput}
				className={styles.searchInput}
				onChange={handleValueChange}
			/>
			<button
				onClick={() => dispatch(setSorting(!isSorted))}
				className={`${styles.sortButton} ${isSorted ? styles.sortButtonActive : ''}`}
			>
				Ая
			</button>
		</>
	);
};

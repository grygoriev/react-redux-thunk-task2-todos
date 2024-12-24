import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {
	inputTitleReducer,
	sortingReducer,
	searchInputReducer,
	todosReducer,
	loadingReducer,
} from './reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	inputTitle: inputTitleReducer,
	isSorted: sortingReducer,
	searchInput: searchInputReducer,
	todos: todosReducer,
	isLoading: loadingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

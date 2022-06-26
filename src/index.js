import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
// style sheet
import './index.css';

// This makes a middleware for us to use.
const sagaMiddleware = createSagaMiddleware();

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
};

// ---------- Component Functions ---------- // 
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }    
};

// ---------- REDUCERS ---------- // 
// all movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// ---------- Store ---------- // 
const storeInstance = createStore(
    combineReducers({
        movies,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// ---------- Runs rootsaga ---------- // 
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

import {createStore} from 'redux'
import {rootReducer} from './redux/rootReducer'

import './styles.css'
import {decrement, increment} from "./redux/actions";

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0)

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

store.subscribe(() => {
    const state = store.getState()

    counter.textContent = state
})

store.dispatch({ type: 'INIT_APPLICATION' })
import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({

name: 'anecdotes',
initialState,
reducers: {
addAnecdote(state,action){
const content = action.payload
state.push(content)
},
voteAnecdote(state,action){
const id = action.payload.id
 
  return state.map(anecdote => anecdote.id !== id
  ? anecdote
  : action.payload  
  
)
},
appendAnecdote(state,action){
  state.push(action.payload)
},
setAnecdotes(state, action) {
  return action.payload
}
}
})

export const {addAnecdote, voteAnecdote, appendAnecdote, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {

return async dispatch => {

const anecdotes = await anecdoteService.getAll()
anecdotes.sort((a, b) => b.votes - a.votes)
dispatch(setAnecdotes(anecdotes))

}
}

export const createAnecdote = (content) => {

return async dispatch => {

const newAnecdote = await anecdoteService.createNew(content)
dispatch(appendAnecdote(newAnecdote))

}

}

export const voteYourAnecdote = (id, anecdote) => {

return async dispatch => {
const updatedAnecdote = await anecdoteService.update(id,anecdote)
dispatch(voteAnecdote(updatedAnecdote))
}

}


export default anecdoteSlice.reducer




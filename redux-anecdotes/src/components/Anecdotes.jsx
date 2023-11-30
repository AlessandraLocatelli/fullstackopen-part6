import { voteYourAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch, useSelector } from "react-redux"
import { setNotification } from '../reducers/notificationReducer'



const AnecdoteList = () => {

  
  const anecdotes = useSelector((state) => state.anecdotes) 


  const dispatch = useDispatch()

  const vote = (anecdote) => {
   
    const updatedVotesAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1 
   }
   dispatch(voteYourAnecdote(updatedVotesAnecdote.id,updatedVotesAnecdote))
   dispatch(setNotification(`you voted for ${anecdote.content}`,5))
  }



  return (
    <div>
      { [...anecdotes]
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>


  )
}

export default AnecdoteList
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {getAnecdotes, updateAnecdote} from '../services/requests'
import MessageContext from "../MessageContext"
import {useContext} from "react"

const Anecdotes = () => {

    
   const [message, messageDispatch] = useContext(MessageContext)

    const queryClient = useQueryClient()
    
    const updateVoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updateAnecdote) => {
    queryClient.invalidateQueries({queryKey: ['anecdotes']})
    messageDispatch({type: 'SET', payload: `you voted ${updateAnecdote.content}`})
    setTimeout(() => messageDispatch({type: 'REMOVE'}),5000)
    }
    })
    
    
    const handleVote = (anecdote) => {
     
        updateVoteMutation.mutate({...anecdote, votes: anecdote.votes +1})
      
    }

    const anecdotesQuery = useQuery({
        queryKey: ['anecdotes'],
        queryFn: getAnecdotes
      })

      const anecdotes = anecdotesQuery.data || []

      return(
      <>
       {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      </>


      )

}


export default Anecdotes
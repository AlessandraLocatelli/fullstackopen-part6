import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote} from '../services/requests'
import MessageContext from "../MessageContext"
import {useContext} from "react"


const AnecdoteForm = () => {

  const [message, messageDispatch] = useContext(MessageContext)
   
  const queryClient = useQueryClient()

  const newAnecMutation = useMutation (
    {mutationFn: createAnecdote,
    onSuccess: (newAnec) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], [...anecdotes, newAnec])
       messageDispatch({ type: 'SET', payload: `anecdote ${newAnec.content} has beeen created` })
      setTimeout(() => messageDispatch({ type: 'REMOVE' }), 5000)
    },
    onError: (error) => {
      messageDispatch({type: 'ERROR',payload: error.response.data.error})
     }
    })

   const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecMutation.mutate({content, votes: 0})
   } 

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm

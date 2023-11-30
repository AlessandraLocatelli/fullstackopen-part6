import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'


const App = () => {
  
 return (
    <div>
      <h3>Anecdote app</h3>
      <Anecdotes/>
      <Notification />
      <AnecdoteForm />
    </div>
  )
}

export default App

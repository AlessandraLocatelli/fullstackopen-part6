import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import { MesssageContextProvider } from './MessageContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <MesssageContextProvider>
  <App />
  </MesssageContextProvider>
  </QueryClientProvider>
)
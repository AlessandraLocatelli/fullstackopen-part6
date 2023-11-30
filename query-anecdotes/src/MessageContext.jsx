import { createContext, useReducer } from 'react'

const messageReducer = (state, action) => {
  switch (action.type) {
    case "SET":
        return action.payload
    case 'ERROR': 
        return action.payload
    case "REMOVE":
        return ''
    default:
        return state
  }
}

const MessageContext = createContext()

export const MesssageContextProvider = (props) => {
  const [message, messageDispatch] = useReducer(messageReducer, '')

  return (
    <MessageContext.Provider value={[message, messageDispatch] }>
      {props.children}
    </MessageContext.Provider>
  )
}

export default MessageContext
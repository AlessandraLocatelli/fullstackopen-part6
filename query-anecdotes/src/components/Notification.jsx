
import { useContext } from "react"
import MessageContext from "../MessageContext"

const Notification = () => {

  const [message, messageDispatch] = useContext(MessageContext)
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (!message) return null

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification

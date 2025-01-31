import React , {useState , useContext} from 'react'
import userContext from '../context/userContext'
function LogIn() {
    const [username , setUserName] = useState("")
    const [password , setPassword] = useState("")
    const {setUser} = useContext(userContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    }
  return (
    <div>
        <h2>login</h2>
        <input 
        type="text" 
        value={username}
        onChange={(e) => setUserName(e.target.value) }
        placeholder='username' />
        <input 
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LogIn
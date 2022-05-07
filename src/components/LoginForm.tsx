import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser"

export default function LoginForm(){
    let [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    let [errorMessage, setErrorMessage] = useState(null)

    const {setCurrentUser} = useContext<any>(CurrentUser)

    const history = useHistory()

    const handleSubmit = async () => {
        const response = await fetch(`http://localhost:4000/authentication/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if(response.status === 200){
            setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            history.push('/')
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <label htmlFor="username">Username</label><br />
                <input id='username' name='username' onChange={(e) => setCredentials({...credentials, username: e.target.value})} /><br />
                <label htmlFor='password'>Password</label><br />
                <input id='password' name='password' type='password' onChange={(e) => setCredentials({...credentials, password: e.target.value})} /><br />
                {errorMessage ? <p>{errorMessage}</p> : null}
                <section>
                    <button onClick={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>SUBMIT</button>
                </section>
            </form>
        </div>
    )
}
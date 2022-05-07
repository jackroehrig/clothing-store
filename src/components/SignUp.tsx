import { useState } from "react"
import {useHistory} from 'react-router-dom'

export default function SignUp() {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    let history = useHistory()

    const handleSignUp = async () => {
        await fetch(`http://localhost:4000/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        })

        history.push(`/login`)
    }

    return (
        <div className="sign-up-form">
            <h2>Sign Up</h2>
            <form>
                <label htmlFor="username">Username</label><br />
                <input id='username' name='username' onChange={(e) => setUsername(e.target.value)} /><br />
                <label htmlFor='password'>Password</label><br />
                <input id='password' type='password' name='password' onChange={(e) => setPassword(e.target.value)} /><br />
                <section>
                    <button onClick={(e) => {
                        e.preventDefault()
                        handleSignUp()
                    }}>Submit</button>
                </section>
            </form>
        </div>
    )
}
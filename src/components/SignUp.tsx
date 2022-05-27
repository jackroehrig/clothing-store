import { useState } from "react"
import { useHistory } from 'react-router-dom'

export default function SignUp() {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    let [errorMessage, setErrorMessage] = useState(null)

    let history = useHistory()

    const handleSignUp = async () => {
        const response = await fetch(`https://blooming-bastion-32922.herokuapp.com/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })

        const data = await response.json()

        if (response.status === 409) {
            setErrorMessage(data.message)
        } else {
            history.replace(`/login`)
        }
    }

    return (
        <div className="sign-up-form">
            <h2>Sign Up</h2>
            <form>
                <label htmlFor="username">Username</label><br />
                <input id='username' name='username' onChange={(e) => setUsername(e.target.value)} /><br />
                <label htmlFor='password'>Password</label><br />
                <input id='password' type='password' name='password' onChange={(e) => setPassword(e.target.value)} /><br />
                {errorMessage ? <p style={{textAlign: 'center'}}>{errorMessage}</p> : null}
                <section>
                    <button onClick={(e) => {
                        e.preventDefault()
                        handleSignUp()
                    }}>SUBMIT</button>
                </section>
            </form>
        </div>
    )
}
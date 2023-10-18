import { useEffect, useRef, useState } from "react"
import { useUserData } from "../../features/userData/useUserData"
import { useSignIn } from "../../features/signIn/useSignIn"
import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"
import { useNavigate, Link } from "react-router-dom"
import styles from './SignInPage.module.scss'
import { MAIN_PAGE, SIGN_UP } from "../../variables/routes"

export const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('error')

    const inputEmail = useRef(null)
    const inputPassword = useRef(null)

    const changeInputEmail = (event) => setEmail(event.target.value)
    const changeInputPassword = (event) => setPassword(event.target.value)

    const { userData } = useUserData()
    const { signInError, signIn } = useSignIn()

    const navigate = useNavigate()

    useEffect(() => {
        setError(signInError)
    }, [signInError])

    useEffect(() => {
        userData && navigate(MAIN_PAGE)
    }, [userData, navigate])

    function handleSubmit() {
        const formData = {
            email: email,
            password: password
        }
        signIn(formData)
    }
    
    return (
        <main className={styles.sign_in}>
            <div className={styles.sign_in__section}>
                <h1>Sign In</h1>
                <p className={styles.sign_in__error}>{error}</p>
                <form action="">
                    <Input
                        label='Email'
                        ref={inputEmail}
                        placeholder='Your email'
                        value={email}
                        onChange={changeInputEmail}
                        type='email'
                    />
                    <Input
                        label='Password'
                        ref={inputPassword}
                        placeholder='Your password'
                        value={password}
                        onChange={changeInputPassword}
                        type='password'
                    />
                    <Button
                        text='Sign In'
                        onClick={handleSubmit}
                    />
                </form>
                <p className={styles.sign_in__link}>New to To Do?
                    <Link to={SIGN_UP}> Create an account</Link>
                </p>
            </div>
        </main>    
    )
}
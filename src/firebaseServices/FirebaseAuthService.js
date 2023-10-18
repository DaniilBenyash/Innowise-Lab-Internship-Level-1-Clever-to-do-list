import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export class FirebaseAuthService {
    constructor(email, password) {
        this.email = email
        this.password = password
        this.auth = getAuth()
    }

    async signIn() {
        const promiseSignIn = new Promise((res) => {
            signInWithEmailAndPassword(this.auth, this.email, this.password)
            .then((userCredential) => {
                res(userCredential.user)
            })
        })

        return await promiseSignIn
    }
    async signUp() {
        const promiseSignUp = new Promise((res) => {
            createUserWithEmailAndPassword(this.auth, this.email, this.password)
            .then((userCredential) => {
                res(userCredential.user)
            })
        })

        return await promiseSignUp
    }
}
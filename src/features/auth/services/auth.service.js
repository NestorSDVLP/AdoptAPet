import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseApp } from './firebase'

export const auth = getAuth(firebaseApp)

export const login = (email, password) => {

    return signInWithEmailAndPassword(
        auth,
        email,
        password
    )

}

export const logout = () => {

    return signOut(auth)

}
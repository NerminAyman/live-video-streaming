import {signInAnonymously, updateProfile} from "firebase/auth";
import {auth} from "./firebase-config.service";

export function singIn(username: string, dispatchUser: Function): any {
    signInAnonymously(auth).then(user => {
        console.log('signed in anonymously successfully');
        updateUsername(user.user, username).then(() => {
            console.log('Username updated successfully');
            dispatchUser(user.user);
        })
    })
}

export function updateUsername(user: any, username: string) {
    return updateProfile(user, {displayName: username});
}

export function signOut(dispatchUser: Function) {
    auth.signOut().then(() => {
        console.log('Signed out successfully');
        dispatchUser();
    })
}

export function isChannelFull() {
    return fetch('https://agora-channel-production.up.railway.app/home', {mode: "cors"});
}

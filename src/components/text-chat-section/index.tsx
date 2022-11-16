import './styles.scss';
import {signInAnonymously, updateProfile} from "firebase/auth";
import {auth} from "../../services/firebase-config.service";
import {useEffect} from "react";

export interface TextChatSectionProps {
    username: string,
}

export function TextChatSection(props: TextChatSectionProps) {
    useEffect(() => {
        if (props.username) {
            signInAnonymously(auth)
                .then(user => {
                    console.log('signed in anonymously successfully');
                    updateProfile(user.user, {displayName: props.username})
                        .then(() => {
                            console.log('updated user profile display name successfully')
                        }).catch(() => {
                        console.log('error while updating user profile display name');
                    });
                })
                .catch(() => {
                    console.log('error while signing in anonymously');
                });
        }
    }, [props.username]);

    useEffect(() => {
        return () => {
            auth.signOut().then(() => {
                console.log('Signed out successfully')
            })
        }
    }, []);

    return (
        <div className='text-chat-chat'>
            {/*<button onClick={addUser}>Add user</button>*/}
        </div>
    );
}

export default TextChatSection;

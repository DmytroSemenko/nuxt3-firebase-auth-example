import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, User} from 'firebase/auth'

export default function() {
  const { $auth } = useNuxtApp()

  const user = useState<User | null>("fb_user", () => null)

  const registerUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const userCreds = await createUserWithEmailAndPassword($auth, email, password)
      if (userCreds) {
        user.value = userCreds.user
        return true
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
      }
      return false
    }
    return false
  }

  const signInWithGoogle = async (): Promise<boolean> => {
    const provider = new GoogleAuthProvider();
    signInWithPopup($auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      user.value = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      return true;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return false;
    });
    return true;
  }

  return {
    user,
    registerUser,
    signInWithGoogle
  }
}
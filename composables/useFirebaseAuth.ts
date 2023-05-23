import { 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider,
    User
} from 'firebase/auth'

export default function() {
  const { $auth } = useNuxtApp();
  const rawUserAuthData = JSON.parse(localStorage.getItem('userAuth') ?? "{}");
  console.log(rawUserAuthData);
  const userAuthData = Object.keys(rawUserAuthData).length == 0 ? null : rawUserAuthData;
  const user = useState<User | null>("fb_user", () => userAuthData)

  const registerUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const userCreds = await createUserWithEmailAndPassword($auth, email, password)
      if (userCreds) {
        user.value = userCreds.user;
        return true;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
      }
      return false;
    }
    return false;
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    var result = await signInWithPopup($auth, provider);
    user.value = result.user;

    localStorage.setItem("userAuth", JSON.stringify(result.user));
  }

  return {
    user,
    registerUser,
    signInWithGoogle
  }
}
import './Login.css'
import { auth, userRef } from '../constants/firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDoc, getDocs, query, where } from 'firebase/firestore';
import { setUser } from '../features/authSlice';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
      if(currentUser) navigate("/")
  })

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const { user: { displayName, email, uid, photoURL }} = await signInWithPopup(auth, provider);
    
    if(email) {
        const firestoreQuery = query(userRef, where("uid", "==", uid));
        const fetchUsers = await getDocs(firestoreQuery);

        if(fetchUsers.docs.length === 0) {
            await addDoc(userRef, {
                uid,
                name: displayName,
                email,
                photoURL
            })
        }
        dispatch(setUser({uid, name:displayName, email, photoURL}))
        navigate('/')
    }
}

  return (
    <div className='login'>
      <button className='googleSignIn' onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default Login
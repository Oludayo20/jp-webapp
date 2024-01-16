import Layout from './component/Layout';
import { auth } from './firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import UseAuth from './hooks/useAuth';

function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // fetchUser(user.uid);
        UseAuth(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  return <Layout />;
}

export default App;

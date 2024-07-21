import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Login({ onLogin, onNavigateToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successful login
        onLogin(userCredential.user.email);
      })
      .catch((error) => {
        handleFirebaseError(error);
      });
  };

  const handleFirebaseError = (error) => {
    switch (error.code) {
      case 'auth/user-not-found':
        setError('User does not exist');
        break;
      case 'auth/wrong-password':
        setError('Incorrect password');
        break;
      case 'auth/invalid-email':
        setError('Invalid email');
        break;
      default:
        setError('Error logging in.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block font-bold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-bold text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button type="submit" className="w-full font-bold bg-blue-500 text-white py-2 rounded-lg mb-4">Login</button>
        <button
          type="button"
          onClick={onNavigateToSignup}
          className="w-full font-bold bg-gray-200 text-gray-700 py-2 rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
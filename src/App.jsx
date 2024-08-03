import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DynamicForm from './DynamicForm';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

function App() {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [formData, setFormData] = useState(null); 

  const formFields = [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      placeholder: 'Enter your username',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      required: true,
    },
  ];

  const handleFormSubmit = (data) => {
    if (navigator.onLine) {
      performSignIn(data);
    } else {
      alert('You are offline. The sign-in process will start when you are back online.');
      setIsSigningIn(true);
      setFormData(data);
    }
  };

  const performSignIn = (data) => {
    console.log('Signing in with', data);
  };

  useEffect(() => {
    const handleOnline = () => {
      if (isSigningIn && formData) {
        performSignIn(formData);
        setIsSigningIn(false);
        setFormData(null);
      }
    };

    window.addEventListener('online', handleOnline);
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, [isSigningIn, formData]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<DynamicForm fields={formFields} onSubmit={handleFormSubmit} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

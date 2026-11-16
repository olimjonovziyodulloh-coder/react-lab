import { useState } from 'react';

function Alert({ type, message }) {
  if (!message) return null;
  return (
    <p className={`alert ${type}`} role="status">
      {type === 'error' ? 'ERROR:' : 'OK:'} {message}
    </p>
  );
}

function Dashboard({ user }) {
  return (
    <div className="dashboard">
      {user && <p>Welcome, {user.name}!</p>}
      {!user && <p>Please log in.</p>}
    </div>
  );
}

function ConditionalDemo() {
  const [user, setUser] = useState(null);

  return (
    <div className="conditional-demo">
      <Alert type="error" message={user ? '' : 'You are not logged in.'} />
      <Alert type="success" message={user ? 'Logged in successfully.' : ''} />
      <div className="panel">
        <Dashboard user={user} />
        <button
          type="button"
          className="toggle-btn"
          onClick={() => setUser(user ? null : { name: 'Ziyodulloh' })}
        >
          {user ? 'Log out' : 'Log in'}
        </button>
      </div>
    </div>
  );
}

export default ConditionalDemo;

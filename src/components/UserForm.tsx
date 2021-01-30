import { useState, useImperativeHandle, forwardRef } from 'react';

const UserForm = forwardRef((props, ref) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useImperativeHandle(ref, () => ({
    clearState: () => {
      setUsername('');
      setPassword('');
    }
  }));

  return (
    <form className="user-form">
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
  );
});

export default UserForm;
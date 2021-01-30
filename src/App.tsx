import { useRef } from 'react';

import UserForm from './components/UserForm';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import { formRef } from './interfaces/formRef';

function App() {
  const formRef = useRef<formRef>();
  const [count, setCount] = useLocalStorageState('count', 0);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.clearState();
    }
  }

  return (
    <>
      <div className="app">
        <h1>{ count }</h1>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
      <hr/>
      <div className="user-form-container">
        <button style={{margin: '20px'}} onClick={resetForm}>
          Reset
        </button>
        <UserForm ref={formRef}/>
      </div>
    </>
  );
}

export default App;

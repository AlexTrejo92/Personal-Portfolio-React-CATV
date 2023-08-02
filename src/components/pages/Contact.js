import React, {useState} from 'react';

export default function Contact() {

  const [error, setError] = useState(false);

  function handleBlur(event) {
    console.log(event.target.value);
    const checking = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event.target.value)
    console.log(checking)
    if (checking) {
      setError(true);
    } else {
      setError(false)
    }
  }
  return (
    <div className='mainContent'>
      <h1>Contact:</h1>
      <h2 style={{padding: '15px'}}>Important: This section is under work!</h2>
      <h2 style={{padding: '15px'}}>Feel free to reach me at arq.alextrejo@gmail.com</h2>
      <h3 style={{padding: '5px'}}>Name:</h3>
      <form>
        <input></input>
      </form>
      <h3 style={{padding: '15px'}}>E-mail:</h3>
      <form>
        <input onBlur={handleBlur}>
        
        </input>
        <div className={error?'hide':''}>your email is invalid</div>
      </form>
      <h3 style={{padding: '15px'}}>Message</h3>
      <form>
        <input></input>
      </form>
    </div>
  );
}

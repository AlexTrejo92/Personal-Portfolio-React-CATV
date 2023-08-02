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
    <div>
      <form>
        <input onBlur={handleBlur}>
        
        </input>
        <div className={error?'hide':''}>has to be email</div>
      </form>
      <h1>Contact</h1>
      <p>
      CONTACT
      </p>
    </div>
  );
}

import React, { useState } from 'react';

function Test() {
  const [status, setStatus] = useState('');
  const handleStatus = () => {
    setStatus('Changed!!');
  };
  return (
    <>
      {status && <span>{status}</span>}
      <button onClick={() => handleStatus()}></button>
    </>
  );
}

export default Test;

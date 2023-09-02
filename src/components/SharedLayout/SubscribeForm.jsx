import { useEffect, useState } from 'react';
import axios from 'axios';
const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  useEffect(() => {
    if (isSubmiting) {
      sendForm(email);
      setIsSubmiting(false);
    }
    // eslint-disable-next-line
  }, [email, isSubmiting]);

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmiting(true);
  }

  async function sendForm() {
 
    try {
      const baseURL = 'https://drink-master-back-end.onrender.com';
      const res = await axios.post(`${baseURL}/subscribe`, { "email": email });
      res && setEmail('');
    } catch (error) {
      console.log('error send email');
    }
  }

  return (
    <form style={subskribeBlock} onSubmit={onSubmit}>
      <p style={subskribeBlockText}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
      <input
        style={subskribeBlockInput}
        id="email"
        name="email"
        type="email"
        placeholder="Enter the email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <button style={subskribeBlockButton} type="submit">
        Subscribe
      </button>
    </form>
  );
};

export default SubscribeForm;

const subskribeBlock = {
  width: '309px',
  height: '226px',
  // border: '1px solid White',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const subskribeBlockText = {
  textAlign: 'justify',
  marginBottom: '24px',
  fontSize: '18px',
};

const subskribeBlockInput = {
  width: '309px',
  height: '56px',
  borderRadius: '200px',
  marginBottom: '18px',
  border: '1px solid White',
  boxSizing: 'border-box',
  backgroundColor: 'inherit',
  color: '#F3F3F3',
  padding: '14px 24px',
};

const subskribeBlockButton = {
  width: '309px',
  height: '56px',
  borderRadius: '200px',
  border: '1px solid White',
  boxSizing: 'border-box',
  backgroundColor: 'inherit',
  color: '#F3F3F3',
};

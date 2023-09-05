import { useEffect, useState } from 'react';
import axios from 'axios';


import css from './SubscribeForm.module.css';
// import Toast from '../../Toast/Toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      const res = await axios.post(`${baseURL}/subscribe`, { email: email });

     

     

      if (res.status === 200) {
       const message = "Subscription email has been sent, please check your email"
        setEmail('');
        // const message = 'ok';
        toast.success(message);
      }

    } catch (error) {
      if (error.response) {
        //Если есть HTTP-ответ
        // setMessage(error.response.data.message);
        setEmail('');
        // const message = 'not ok';
        toast.warn(error.response.data.message);
      } else {
        toast.warn('error send email');
        // В противном случае, обработка ошибки без HTTP-ответа
        // setMessage('error send email');
        setEmail('');
      }
    }
  }

  return (
  <>
    <ToastContainer
      style={{ fontFamily: "inherit" }}
      icon={true}
      closeButton={false}
      theme={"dark"}
      autoClose={3000}
      hideProgressBar={true}
      closeOnClick
      pauseOnHover
      position={'top-center'}
    />
    <form className={css.subscribeBlock} onSubmit={onSubmit}>
      <p className={css.subscribeBlockText}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
      <input
        className={css.subscribeBlockInput}
        id="email"
        name="email"
        type="email"
        placeholder="Enter the email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <button className={css.subscribeBlockButton} type="submit">
        Subscribe
      </button>
    </form>
  </>
    
  );
};

export default SubscribeForm;

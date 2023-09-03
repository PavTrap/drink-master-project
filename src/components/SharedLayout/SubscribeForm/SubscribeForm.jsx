import { useEffect, useState } from 'react';
import axios from 'axios';

import css from './SubscribeForm.module.css';
import Toast from '../../Toast/Toast';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  const [message, setMessage] = useState(''); //Добавил один useState, в котором будет сообщения для  Toast

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

  // Старая функция
  // async function sendForm() {
  //   try {
  //     const baseURL = 'https://drink-master-back-end.onrender.com';

  //     const res = await axios.post(`${baseURL}/subscribe`, { email: email });

  //     res && setEmail('');
  //   } catch (error) {
  //     console.log('error send email');
  //   }
  // }

  async function sendForm() {
    try {
      const baseURL = 'https://drink-master-back-end.onrender.com';

      const res = await axios.post(`${baseURL}/subscribe`, { email: email });
      console.log(res.status);

      if (res.status === 200) {
        setMessage('Subscription email has been sent, please check your email');
        setEmail('');
      }
    } catch (error) {
      if (error.response) {
        //Если есть HTTP-ответ
        setMessage(error.response.data.message);
        setEmail('');
      } else {
        // В противном случае, обработка ошибки без HTTP-ответа
        setMessage('error send email');
        setEmail('');
      }
    }
  }

  return (
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

      {isSubmiting ? <Toast message={message} /> : null}
    </form>
  );
};

export default SubscribeForm;

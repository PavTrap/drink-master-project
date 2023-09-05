import { ToastContainer, Flip, } from 'react-toastify';


export default function StyledToaster() {
  return (
    <ToastContainer
      icon={false}
      theme={'dark'}
      autoClose={3000}
      closeButton={false}
      toastClassName={'toast'}
      position={'top-center'}
      hideProgressBar={true}
      transition={Flip}
      closeOnClick
      draggable={false}
    />
  );
}

import { useNavigate } from 'react-router-dom';
export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div style={littleStyles}>
      THIS IS NOT FOUND 404 PAGE
      <button
        style={button}
        onClick={() => {
          navigate('/');
        }}
      >
        {' '}
        Oops not found <br /> Whant to go to main page?
      </button>
    </div>
  );
}

const littleStyles = {
  height: '70vh',
  fontSize: '40px',

  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  flexWrap: 'no-wrap',
  alignItems: 'center',
  justifyContent: 'center',
};

const button = {
  padding: '20px',
  backgroundColor: 'lightblue',
};

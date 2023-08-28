import { MainTitle } from '../components/MainTitle/MainTitle';

export default function MainPage() {
  return <div style={littleStyles}><MainTitle title='Craft Your Perfect Drink with Drink Master'/></div>;
}

const littleStyles = {
  height: '70vh',
  fontSize: "40px",
  // border: '1px solid blue',
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'no-wrap',
  alignItems: 'center',
  justifyContent: 'center',
};


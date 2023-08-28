import { MainTitle } from '../components/MainTitle/MainTitle';
export default function FaoviteCocktailsPage() {
  return <div style={littleStyles}><MainTitle title="This is main page"/></div>;
}

const littleStyles = {
  height: '70vh',
  fontSize: '40px',
  // border: '1px solid blue',
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'no-wrap',
  alignItems: 'center',
  justifyContent: 'center',
};

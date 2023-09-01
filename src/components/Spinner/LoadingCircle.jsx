import loader from '../../assets/loading.gif';

export default function LoadingCircle({style}) {
  return <img style={spinner} src={loader} alt="Loading..." />;
}

const spinner = {
  width: '60%',
  height: '60%',
  mixBlendMode: 'lighten',
};

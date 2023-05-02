import { useParams } from 'react-router-dom';

const Friend = () => {
  const { id } = useParams();

  return <h2>Friend no: {id}</h2>;
};

export default Friend;

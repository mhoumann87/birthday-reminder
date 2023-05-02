import { Link } from 'react-router-dom';
import img from '../assets/img404.png';

const Missing = () => {
  return (
    <main className='missing'>
      <section className='container grid'>
        <div className='card shadow grid'>
          <img src={img} alt='404 image' />
          <Link to='/'>Go to frontpage</Link>
        </div>
      </section>
    </main>
  );
};

export default Missing;

import SocialMediaIcons from './SocialMediaIcons';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='shadow'>
      <div className='container flex'>
        <p>
          Copyright &copy;{year > 2023 ? `2023 - ${year}` : year} by{' '}
          <a href='https://www.michael-h.dk' target='_blank' rel='noreferrer'>
            Michael Houmann
          </a>
        </p>
        <SocialMediaIcons />
      </div>
    </footer>
  );
}

export default Footer;

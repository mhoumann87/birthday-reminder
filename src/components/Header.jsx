import NavBar from './NavBar';

function Header() {
  return (
    <header className='shadow'>
      <div className='container flex'>
        <h1>Birthday Reminder</h1>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;

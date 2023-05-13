const New = ({ handleSubmit }) => {
  return (
    <main className='grid'>
      <section className='card flex'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' id='name' placeholder='Enter Name' />
          <input type='text' name='day' id='day' />
          <input type='text' name='month' id='month' />
          <input type='text' name='year' id='year' />
          <input type='text' name='image-link' id='image-link' />
          <input type='text' name='phone' id='phone' />
          <input type='email' name='email' id='email' />
          <input type='text' name='web' id='web' />
          <input type='submit' value='Add Friend' />
        </form>
      </section>
    </main>
  );
};

export default New;

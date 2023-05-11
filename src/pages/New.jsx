const New = ({ handleSubmit }) => {
  return (
    <main className='grid'>
      <section className='card flex'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' id='name' placeholder='Enter Name' />
        </form>
      </section>
    </main>
  );
};

export default New;

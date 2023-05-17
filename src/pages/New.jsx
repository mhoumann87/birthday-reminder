import Input from '../components/Input';

const New = ({
  handleSubmit,
  setFriendName,
  friendName,
  friendDay,
  setFriendDay,
}) => {
  return (
    <main className='grid new-friend'>
      <section className='card flex shadow padding'>
        <h2>Add Friend</h2>
        <form onSubmit={handleSubmit} className='flex'>
          <Input
            type='text'
            name='name'
            info='Enter Name'
            required={true}
            value={friendName}
            onChange={setFriendName}
          />

          <Input
            type='number'
            name='day'
            info='Enter birthday day'
            required={true}
            value={friendDay}
            onChange={setFriendDay}
          />

          <label htmlFor='month' className='sr-only'>
            Enter birthday month
          </label>
          <input
            type='text'
            name='month'
            id='month'
            placeholder='Enter Birthday Month'
            required
          />

          <label htmlFor='year' className='sr-only'>
            Enter Birthday year
          </label>
          <input
            type='text'
            name='year'
            id='year'
            placeholder='Enter Birthday Year'
            required
          />

          <label htmlFor='image-link' className='sr-only'>
            Enter Image Link
          </label>
          <input
            type='text'
            name='image-link'
            id='image-link'
            placeholder='Enter Image Link'
          />

          <label htmlFor='phone' className='sr-only'>
            Enter Phone Number
          </label>
          <input
            type='text'
            name='phone'
            id='phone'
            placeholder='Enter Phone Number'
          />

          <label htmlFor='email' className='sr-only'>
            Enter Email Address
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Email'
          />

          <label htmlFor='web' className='sr-only'>
            Add Web Address
          </label>
          <input
            type='text'
            name='web'
            id='web'
            placeholder='Enter Web Address'
          />

          <input type='submit' value='Add Friend' />
        </form>
      </section>
    </main>
  );
};

export default New;

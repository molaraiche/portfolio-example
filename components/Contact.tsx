const Contact = () => {
  return (
    <section id='contacts'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className=' text-center text-5xl leading-[72px] font-PD font-bold text-bg/line'>
          Let&apos;s Collaborate
        </h1>
        <span className='w-[150px] h-1 bg-brand'></span>
      </div>
      <div className='flex items-center justify-center my-10'>
        <form className=' w-[40%]'>
          <div className='form-grp'>
            <label
              className='mb-2 font-nunito text-bg/line font-semibold'
              htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              className='h-14 rounded-lg outline-none focus:border-2 focus:border-brand pl-3  font-nunito text-base border border-[#E8ECF4]'
              name='name'
              id='name'
            />
          </div>
          <div className='form-grp'>
            <label
              className='mb-2 font-nunito text-bg/line font-semibold'
              htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              className='h-14 rounded-lg outline-none focus:border-2 focus:border-brand pl-3  font-nunito text-base border border-[#E8ECF4]'
              required
              name='email'
              id='email'
            />
          </div>
          <div className='form-grp'>
            <label
              className='mb-2 font-nunito text-bg/line font-semibold'
              htmlFor='message'>
              Message
            </label>
            <textarea
              name='message'
              className='h-28 min-h-28 rounded-lg outline-none focus:border-2 focus:border-brand pl-3 pt-3 font-nunito text-base resize-y border border-[#E8ECF4]'
              id='message'></textarea>
          </div>
          <div className='flex justify-end my-6'>
            <button className='py-2 px-6 bg-brand rounded-lg font-roboto text-lg font-medium'>
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

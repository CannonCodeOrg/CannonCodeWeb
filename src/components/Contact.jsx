import React from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const template_id = "template_28zxqsc"
    const public_api_key = process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY

    emailjs.sendForm(service_id, template_id, e.target, public_api_key)
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <section className="flex flex-col" id="contact">
      <div className="font-bold text-5xl mx-auto text-center px-[2em] pt-[3em] pb-[1.5em]">
        Let's get in touch
      </div>

      <form className="flex flex-col w-full max-w-[500px] mx-auto" onSubmit={sendEmail}>
        <input placeholder="Name" className="form-input" name="user_name" />
        <input placeholder="Email" className="form-input" name="user_email" />
        <textarea placeholder="Message" className="form-input h-[100px]" name="message" />

        <button className='mx-auto hover:bg-slate-800 hover:text-slate-700 px-5 py-2 rounded-md duration-300 bg-slate-900 text-slate-600 cursor-pointer'>Send</button>
      </form>
    </section>
  );
};

export default Contact;

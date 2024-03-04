import React from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const template_id = "template_28zxqsc"
    const public_api_key = process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY

    console.log(service_id, template_id, public_api_key, 'sending!')

    emailjs.sendForm(service_id, template_id, e.target, public_api_key)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <section className="flex flex-col" id="contact">
      <div className="font-bold text-5xl mx-auto text-center px-[2em] pt-[3em] pb-[1.5em]">
        Let's get in touch
      </div>

      <form className="flex flex-col" onSubmit={sendEmail}>
        <input placeholder="Name" className="form-input" name="user_name" />
        <input placeholder="Email" className="form-input" name="user_email" />
        <textarea placeholder="Message" className="form-input h-[100px]" name="message" />

        <button className='mx-auto bg-slate-800 text-slate-700 px-5 py-2 rounded-md duration-300 hover:bg-slate-900 hover:text-slate-700 cursor-pointer'>Send</button>
      </form>
    </section>
  );
};

export default Contact;

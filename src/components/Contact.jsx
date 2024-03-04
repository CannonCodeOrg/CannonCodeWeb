import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col" id="contact">
      <div className="font-bold text-5xl mx-auto text-center px-[2em] pt-[3em]
      pb-[1.5em]">
        Let's get in touch
      </div>

      {/* FORM */}
      <form className="flex flex-col">
        {/* INPUTS */}
        <input placeholder="Name" className="form-input" />
        <input placeholder="Email" className="form-input" />

        {/* TEXTAREA */}
        <textarea placeholder="Message" className="form-input h-[100px]" />
      </form>
    </section>
  );
};

export default Contact;

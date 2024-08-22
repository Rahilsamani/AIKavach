import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
        Have a Security Challenge? We Have the Solutions. Let's Collaborate
      </h1>
      <p>
        Share your concerns and let us know how we can help protect your digital
        presence
      </p>
      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;

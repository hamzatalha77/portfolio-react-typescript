import Reveal from '../utils/Reveal'
import { useRef,useState,useEffect } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
  const emailRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const [loading, setLoading] = useState(false);

  const sendEmail = () => {
    useEffect(() => emailjs.init("BZSXfUU-iJjQFFcpH"), []);
    // Add these
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      const serviceId = "service_dwdjncv";
      const templateId = "template_aeit1dd";
      try {
        setLoading(true);
        await emailjs.send(serviceId, templateId, {
         name: nameRef.current.value,
          recipient: emailRef.current.value
        });
        alert("email successfully sent check inbox");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#fffdf9]  dark:bg-[#191a19] text-[#b22725] dark:text-[#444544] flex justify-center items-center p-4"
    >
      <form
       
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <Reveal>
            <p className="text-4xl font-bold inline border-b-4 border-[#444544] dark:border-[#b22725]">
              Contact
            </p>
          </Reveal>

          <Reveal>
            <p className="text-[#000000] dark:text-[#f2f2f2] py-4">
              / Submit the form below or shoot me an email -
              hamzatalha.web7@gmail.com
            </p>
          </Reveal>
        </div>

        <input
         ref={nameRef}
          type="text"
          className="bg-[#ccd6f6] p-2"
          placeholder="Name"
          name="user_name"
        />

        <input
        ref={emailRef} 
          type="email"
          className="bg-[#ccd6f6] p-2 my-4"
          placeholder="Email"
          name="user_email"
        />

        <textarea
          name="message"
          className="bg-[#ccd6f6] p-2"
          rows={10}
        ></textarea>

        <Reveal>
          <button className="text-[#b22725] dark:text-[#ffffff]  dark:border-[#b22725] dark:bg-[#b22725] hover:bg-[#191a19] hover:border-[#191a19] dark:hover:bg-transparent border-[#b22725] dark:hover:border-[#b22725] border-2  px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collab
          </button>
        </Reveal>
      </form>
    </div>
  )
}

export default Contact

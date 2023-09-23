import Reveal from '../utils/Reveal'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Contact = () => {
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emailSent, setEmailSent] = useState(false)
  const [formData, setFormData] = useState({
    from_name: '',
    to_name: '',
    message: ''
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const sendEmail = (e: any) => {
    e.preventDefault()
    setLoading(true)
    if (!formData.from_name || !formData.to_name || !formData.message) {
      toast.error('Please fill in all fields')
      setLoading(false)
      return
    }
    emailjs
      .sendForm(
        'service_dwdjncv',
        'template_o4tbf5g',
        e.target,
        'BZSXfUU-iJjQFFcpH'
      )
      .then(
        (result) => {
          console.log(result.text)
          setEmailSent(true)
          setFormData({
            from_name: '',
            to_name: '',
            message: ''
          })
          toast.success('Email sent successfully')
        },
        (error) => {
          console.log(error.text)
          setEmailSent(false)
          toast.error('Email sending failed')
        }
      )
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#fffdf9]  dark:bg-[#191a19] text-[#b22725] dark:text-[#444544] flex justify-center items-center p-4"
    >
      <ToastContainer />
      <form onSubmit={sendEmail} className="flex flex-col max-w-[600px] w-full">
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
        <Reveal>
          <input
            type="text"
            className="bg-[#ccd6f6] p-2 w-full"
            placeholder="Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
          />
        </Reveal>
        <Reveal>
          <input
            type="email"
            className="bg-[#ccd6f6] p-2 my-4 w-full"
            placeholder="Email"
            name="to_name"
            value={formData.to_name}
            onChange={handleInputChange}
          />
        </Reveal>

        <Reveal>
          <textarea
            name="message"
            className="bg-[#ccd6f6] p-2 w-full"
            rows={10}
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </Reveal>

        <Reveal>
          <button className="text-[#b22725] dark:text-[#ffffff]  dark:border-[#b22725] dark:bg-[#b22725] hover:bg-[#191a19] hover:border-[#191a19] dark:hover:bg-transparent border-[#b22725] dark:hover:border-[#b22725] border-2  px-4 py-3 my-8 mx-auto flex items-center">
            {loading ? 'Sending...' : "Let's Collab"}
          </button>
        </Reveal>
      </form>
    </div>
  )
}

export default Contact

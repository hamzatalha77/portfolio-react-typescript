const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#fffdf9]  dark:bg-[#191a19] text-[#b22725] dark:text-[#444544] flex justify-center items-center p-4"
    >
      <form action="POST" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#444544] dark:border-[#b22725]">
            Contact
          </p>
          <p className="text-[#000000] dark:text-[#f2f2f2] py-4">
            / Submit the form below or shoot me an email -
            hamzatalha.web7@gmail.com
          </p>
        </div>
        <input
          type="text"
          className="bg-[#ccd6f6] p-2"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          className="bg-[#ccd6f6] p-2 my-4"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          className="bg-[#ccd6f6] p-2"
          rows={10}
        ></textarea>
        <button className="text-white border-2 hover:bg-[#b22725] hover:border-[#b22725] px-4 py-3 my-8 mx-auto flex items-center">
          Let's collabe
        </button>
      </form>
    </div>
  )
}

export default Contact

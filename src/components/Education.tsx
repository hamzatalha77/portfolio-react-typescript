import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import { GiDiploma } from 'react-icons/gi'
import { PiCertificateDuotone } from 'react-icons/pi'
import Reveal from '../utils/Reveal'

const EducationEntry = ({
  date,
  title,
  subtitle,
  description,
  isLeft,
  icon: Icon
}: any) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <div
      ref={ref}
      id="Education"
      className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'} my-8`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: isLeft ? -50 : 50 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="w-full md:w-5/12"
      >
        <Reveal>
          <div className="bg-[#444544] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-102">
            <div className="flex items-center mb-4">
              <div className="bg-[#b22725] p-3 rounded-full mr-4">
                <Icon className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100">{title}</h3>
                <p className="text-[#b22725]">{subtitle}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-2">{date}</p>
            <p className="text-gray-300">{description}</p>
          </div>
        </Reveal>
      </motion.div>
    </div>
  )
}

const Education = () => {
  const EducationData = [
    {
      date: '2021 - 2023',
      title: 'Master',
      subtitle: 'FST, CIGMA.',
      description: 'Master Degree in Software Engineering and Web Application',
      icon: GiDiploma
    },
    {
      date: '2020 – 2021',
      title: 'License Degree',
      subtitle: 'FST, CIGMA',
      description:
        'Professional University Degree in Database Administration and Web Technology',
      icon: PiCertificateDuotone
    },
    {
      date: '2017 – 2020',
      title: 'specialized technician',
      subtitle: 'OFPPT',
      description: 'Specialized Technician Diploma in Computer Programming',
      icon: FaGraduationCap
    },
    {
      date: '2017 – 2020',
      title: 'Bachalor Degree',
      subtitle: 'Lamsalla',
      description: "Bachelor's degree in life and earth sciences",
      icon: FaCertificate
    }
  ]

  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100
        lineRef.current.style.background = `linear-gradient(to bottom, #b22725 ${scrollPercentage}%, #9a2e2c ${scrollPercentage}%)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="Education"
      className="w-full min-h-screen dark:bg-[#191a19] text-[#b22725] dark:text-[#444544] py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-4xl font-bold inline border-b-4 border-[#444544] dark:border-[#b22725]">
            Educational Education
          </p>
        </Reveal>

        <div className="relative">
          <div
            ref={lineRef}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 transition-all duration-300"
          />
          {EducationData.map((item, index) => (
            <EducationEntry
              key={index}
              date={item.date}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              isLeft={index % 2 === 0}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education

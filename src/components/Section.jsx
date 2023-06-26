import React from 'react'
import { motion } from "framer-motion"
const Section = ({ h3, text, hasbtn = true, btn, img, imgsize = "70%", backgroundColor, headingColor, textColor, btnBgColor, btnColor }) => {
  const headingOptions = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: "0%",
      opacity: 1,
    }
  }

  const textOptions = {
    ...headingOptions,
    transiotion: {
      delay: 0.3,
    }
  }

  const buttonOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: "0%",
      opacity: 1,
    },
    transiotion: {
      delay: 0.3,
      ease: "easeIn"

    }
  }
  const imgOptions = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transiotion: {
      delay: 0.3,


    }
  }
  return (
    <section className="Section" style={{ backgroundColor: backgroundColor }}>
      <div>



        <motion.h3
          style={{ color: headingColor }}
          data-cursorpointer={true}
          {...headingOptions}
        >
          {h3}
        </motion.h3>

        <motion.p style={{ color: textColor }} data-cursorpointer={true} {...textOptions}>{text}</motion.p>
        {
          hasbtn && <motion.button style={{ color: btnColor, backgroundColor: btnBgColor }} data-cursorpointer={true} {...buttonOptions}>{btn}</motion.button>
        }
        <motion.div {...imgOptions} >
          <img style={{ width: imgsize }} src={img} alt="img" />
        </motion.div>
      </div>
    </section>
  )
}

export default Section
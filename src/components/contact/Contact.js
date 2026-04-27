import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setIsLoading(true);
      setErrMsg("");
      
      // Simulate/Wait for progress bar
      setTimeout(async () => {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "f28a0b41-5ac0-4071-b9e9-52f4d0709eea",
            name: username,
            phone: phoneNumber,
            email: email,
            subject: subject,
            message: message,
          }),
        }).then((res) => res.json());

        setIsLoading(false);

        if (res.success) {
          setSuccessMsg(`Thank you! Your Messages has been sent Successfully!`);
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
          
          // Remove success message after 1 second
          setTimeout(() => {
            setSuccessMsg("");
          }, 1500);
        } else {
          setErrMsg("Something went wrong! Please try again.");
        }
      }, 1000); // 1 second for progress bar
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="Get in Touch" />
      </div>
      <div className="w-full mt-10">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-10">
          <ContactLeft />
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lgl:w-[60%] h-full bg-gradient-to-br from-[#1e2024] to-[#141518] flex flex-col gap-8 p-6 lgl:p-10 rounded-3xl shadow-shadowOne border border-white/5 relative"
          >
            <form className="w-full flex flex-col gap-6">
              <div className="w-full flex flex-col lgl:flex-row gap-6">
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Your name</label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="w-full bg-[#141518] text-white px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-designColor transition-all duration-300"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Phone Number</label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className="w-full bg-[#141518] text-white px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-designColor transition-all duration-300"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full bg-[#141518] text-white px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-designColor transition-all duration-300"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Subject</label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="w-full bg-[#141518] text-white px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-designColor transition-all duration-300"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="w-full bg-[#141518] text-white px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-designColor transition-all duration-300 resize-none"
                  rows="6"
                ></textarea>
              </div>
              
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSend}
                  disabled={isLoading}
                  className={`w-full h-14 bg-gradient-to-r from-designColor to-[#ff4d6d] rounded-xl text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-designColor/20 transition-all duration-300 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.button>
                
                {isLoading && (
                  <div className="absolute -bottom-4 left-0 w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="h-full bg-designColor shadow-[0_0_10px_#ff014f]"
                    />
                  </div>
                )}
              </div>

              <AnimatePresence>
                {errMsg && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center font-medium flex items-center justify-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    {errMsg}
                  </motion.div>
                )}
                {successMsg && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-center font-medium flex items-center justify-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {successMsg}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
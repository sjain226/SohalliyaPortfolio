import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: "text-pink-500",
      bgColor: "bg-pink-100"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: CONTACT.address,
      href: null,
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: CONTACT.linkedin,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about technology!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 font-mono text-center">Get in Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                        <method.icon className="text-xl text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors font-mono">
                          {method.title}
                        </h4>
                        <p className="text-gray-300">{method.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 group">
                      <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mr-4 border border-gray-600 group-hover:scale-110 transition-transform duration-300">
                        <method.icon className="text-xl text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors font-mono">{method.title}</h4>
                        <p className="text-gray-300">{method.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

        
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
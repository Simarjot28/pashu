'use client'
import React from 'react'
import { motion } from 'framer-motion';

const SuccessStories = () => {
    const successStories = [
        {
          name: "Max",
          description: "Rescued from a drain during monsoon, now a therapy dog helping others",
          image: "https://images.ctfassets.net/e1jkpkpbs14h/1ujPwWIGSmT0GBUfo6IV3R/163ae92bc8c47ab25c6bd6bbbd03f665/real-life-flash-sitting.jpeg"
        },
        {
          name: "Bella",
          description: "Survived a car accident, now spreading joy in her forever home",
          image: "https://miro.medium.com/v2/resize:fit:1013/1*VRyTxHyD5EgNxdJiy9Q07w.png"
        },
        {
          name: "Rab",
          description: "Survived a deadly predator attack, now fully healed and happy",
          image: "https://www.petaasia.com/wp-content/uploads/2010/08/Cow3.jpg"
        }
      ];
    
  return (
    <div className="mb-20">
    <h2 className="text-4xl   font-bold text-center text-gray-800 mb-12">Success Stories</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {successStories.map((story, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white text-black  rounded-xl overflow-hidden shadow-lg"
        >
          <img src={story.image} alt={story.name} className=""   style={{ width: '480px', height: '250px', objectFit: 'cover' }}/>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
            <p className="text-gray-600">{story.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  )
}

export default SuccessStories
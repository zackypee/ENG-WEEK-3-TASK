import React from 'react'
import { useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import Nav from '../Apps/Nav';


  const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" }
];


const QuoteGenerate = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(randomIndex);
  }
  const quote = quotes[currentIndex];




  return (
    <div>
      <div>
        <Nav />
      </div>
   
      <div className='flex min-h-screen bg-gradient-to-r from-blue-500 to-cyan-400 justify-center items-center'>
        <div className='bg-gray-50  w-2/4  shadow-lg text-center p-5'>
          <p><FaQuoteLeft className='inline mr-2' />{quote.text}<span><FaQuoteRight className='inline ml-2' /></span></p>
          <p className='text-sm font-semibold mb-6'>- {quote.author}</p>

          <button className='bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-2 px-6 rounded-xl shadow-lg 
          hover:scale-105 hover:shadow-2xl transition transform duration-300 mb-4
          ' onClick={handleNextQuote}
          >Next Quote</button>

        </div>

      </div >
    </div>
  )
}

export default QuoteGenerate
import React from 'react'
import about from '../Images/about.jpg'
import about2 from '../Images/about2.jpg'
import BreadCrumb from './ReusableComponents/BreadCrumb';

const Aboutus = () => {
  const features = [
    {
      icon: "🏅", // Replace with an actual icon component or image
      title: "Original Product",
      description: "I am text block. Click edit button to change this text.",
      bgColor: "bg-gray-100", // Background color for the card
    },
    {
      icon: "✔", // Replace with an actual icon component or image
      title: "Quality Control",
      description: "I am text block. Click edit button to change this text.",
      bgColor: "bg-gray-100",
    },
    {
      icon: "🚚", // Replace with an actual icon component or image
      title: "Fast Delivery",
      description: "I am text block. Click edit button to change this text.",
      bgColor: "bg-[#003a34] text-white",
      descolor:'text-white'
    },
    {
      icon: "🎧", // Replace with an actual icon component or image
      title: "Support 24/7",
      description: "I am text block. Click edit button to change this text.",
      bgColor: "bg-gray-100",
    },
  ];

  return (
    <div>
      <BreadCrumb bgImage={about} title={'About Us'}/>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full md:w-[90%] mx-auto my-16">
        {/* Statistics Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <div className="border p-6 text-center">
            <h3 className="text-4xl font-bold">50K+</h3>
            <p className="text-gray-600">Products Sold Every Month</p>
          </div>
          <div className="border p-6 text-center">
            <h3 className="text-4xl font-bold">2K+</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="border p-6 text-center">
            <h3 className="text-4xl font-bold">1.1K+</h3>
            <p className="text-gray-600">Partners Join Us</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src={about2}
            alt="Room Aesthetics"
            className="w-full h-[411px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Best Choice for Room Aesthetics
          </h2>
          <p className="text-gray-600 mb-6">
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="bg-[#003a34] text-white p-4 rounded-md mb-6">
            <p>
              I am text block. Click edit button to change this text. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <ul className="list-none text-gray-600 space-y-3">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span> Consectetur
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span> Ullamcorper
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span> Dapibus Leo
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span> Elit Tellus
            </li>
          </ul>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-[90%] mx-auto my-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 text-center rounded-lg shadow-md ${feature.bgColor}`}
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className={`text-gray-600 ${feature.descolor ? feature.descolor : ''}`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aboutus

import React from 'react';
import b1 from '../../Images/b1.png';
import b2 from '../../Images/b2.png';
import b3 from '../../Images/b3.png';

const Slider = () => {
  return (
    <div className="w-full bg-[#efeee5]">
      <div className="main mt-[72px] w-full max-w-[1300px] py-8 flex flex-wrap justify-center items-center gap-4 mx-auto px-4">
       
        <div className="content1 flex-[1_1_300px] text-center md:text-left">
          <h1 className="text-[36px] md:text-[48px] lg:text-[61px] animate-fade-up font-bold text-[#1a1a1a]">
            Good Friday <br />
            Sale 50% <br />
            Off
          </h1>
          <div className="image flex gap-4 items-center animate-flip-down mt-4 justify-center md:justify-start">
            <img
              src={b1}
              alt=""
              className="w-[150px] h-[120px] md:w-[200px] md:h-[150px] lg:w-[237px] lg:h-[170px]"
            />
            <div>
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a]">
                3.2K <br />
              </h2>
              <span className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#1a1a1a]">
                Positive Review
              </span>
            </div>
          </div>
        </div>

       
        <div className="content1 flex-[1_1_300px] flex justify-center">
          <img
            src={b2}
            alt=""
            className="w-[200px] h-[280px] md:w-[250px] md:h-[350px] lg:w-[330px] lg:h-[419px]"
          />
        </div>

       
        <div className="content1 flex-[1_1_300px] animate-fade-up text-center md:text-left">
          <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#1a1a1a]">
            HousePlant Set Promo
          </h2>
          <img
            src={b3}
            alt=""
            className="w-[280px] h-[80px] md:w-[300px] md:h-[90px] lg:w-[364px] lg:h-[100px] mx-auto md:mx-0"
          />
          <p className="text-[#5a5a5a] text-[12px] md:text-[14px] lg:text-[14px] leading-6 py-3 w-full max-w-[400px] mx-auto md:mx-0">
            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet.
          </p>
          <button className="bg-[#003a34] text-white px-4 md:px-5 py-2 md:py-3 rounded-3xl font-bold mt-3">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;

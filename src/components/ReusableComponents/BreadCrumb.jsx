import React from 'react'


const BreadCrumb = ({bgImage,title}) => {
  return (
    <div>
          <div
                      className="w-full mx-auto h-[300px] sm:h-[250px] hover:scale-y-105 duration-300 md:h-[400px] lg:h-[400px]"
                      style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="w-[90%] mx-auto h-full flex items-center justify-start px-4 md:px-8 lg:px-12">
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold ">
                          {title}
                        </h1>
                      </div>
                    </div>
    </div>
  )
}

export default BreadCrumb
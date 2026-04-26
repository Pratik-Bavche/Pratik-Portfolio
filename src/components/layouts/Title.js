import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <div className="flex items-center gap-2">
        <span className="w-8 h-[1px] bg-designColor/50" />
        <h3 className="text-sm uppercase font-medium text-designColor tracking-[3px]">
         {title}
        </h3>
      </div>
      <h1 className="text-4xl md:text-5xl text-gray-200 font-bold capitalize leading-tight">
        {des}
      </h1>
    </div>
  );
}

export default Title
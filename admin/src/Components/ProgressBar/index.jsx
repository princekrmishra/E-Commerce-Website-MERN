import React from 'react'

const Progres = (props) => {
  return (
    <div className="w-[100px] h-auto overflow-hidden rounded-md bg-[#f1f1f1]">
  <span
    className={`flex items-center h-2 rounded transition-all duration-300
      ${props.type === "success" && "bg-green-500"}
      ${props.type === "error" && "bg-red-500"}
      ${props.type === "warning" && "bg-yellow-500"}
      
    `}
    style={{ width: `${props.value}%` }}
  ></span>
</div>


  )
}

export default Progres;

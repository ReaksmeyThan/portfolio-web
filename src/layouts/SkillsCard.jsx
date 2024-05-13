import React from 'react'

const SkillsCard = (props) => {
  return (
    <div>

        <h3 className=' ml-3 text-xl'>{props.title}</h3>
        <div>
            <h3 className=' text-end'>{props.val}</h3>
            <div className=' w-full h-2 bg-slate-300 rounded-full'>
                <div className={`${props.width} h-2 bg-brightColor rounded-full `}></div>
            </div>
        </div> 
    </div>
  )
}

export default SkillsCard
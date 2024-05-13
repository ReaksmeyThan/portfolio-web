import React from 'react'
import ExperienceCard from '../layouts/ExperienceCard'

const Experience = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-slate-500'>
        <h1 className=' text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7'>
            Work History
        </h1>
        <div className=' bg-white p-5 rounded-md'>
            <ExperienceCard title="Siner Game Developer" />
            <ExperienceCard title="Software development Enginieer" />

        </div>
    </div>
  )
}

export default Experience
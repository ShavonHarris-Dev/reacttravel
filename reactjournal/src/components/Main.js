import React from 'react'

const Main = ({location, date, description}) => {
  return (
    <main>
      <h2>{location}</h2>
      <span>{date}</span>
      <p>{description}</p>
    </main>
  )
}

export default Main

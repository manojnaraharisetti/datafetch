import React from 'react'

export default function NameList() {
    const nameliat = ['Raja','Manoj','Nandu']
  return (
    <div>
      {
        nameliat.map((name,index) => <h2 key={index}>{index+1} {name}</h2>)
      }
    </div>
  )
}

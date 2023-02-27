import React from 'react'
import Person from './Person'

export default function PersonList() {
    const personlist = [
        {
            id : 1,
            name : 'Manoj',
            age : 18,
            skill : 'Node'
        },
        {
            id : 2,
            name : 'Nandu',
            age : 18,
            skill : 'civils'
        },
        {
            id : 3,
            name : 'Raja',
            age : 18,
            skill : 'React'
        },
        {
            id : 4,
            name : 'Manu',
            age : 18,
            skill : 'MongoDB'
        }
    ]
  return (
    <div>
      {
        personlist.map(person => <h2 key={person.id}><Person persondetails={person}/></h2>)
      }
    </div>
  )
}

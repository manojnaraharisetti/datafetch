import React from 'react'

export default function Person({ persondetails }) {

    return (
        <div>
            Hi I am  : {persondetails.name}.
            My age is {persondetails.age}.
            My skill is :{persondetails.skill}.
        </div>
    )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

const Header = () => {
  return (
    <h1>{course}</h1>
  )
}

const Content = () => {
  return (
    <div>
      <Part1 part1={part1} exercises1={exercises1} />
      <Part2 part2={part2} exercises2={exercises2} />
      <Part3 part3={part3} exercises3={exercises3} />
    </div>
  )
}

const Part1 = () => {
  return (
    <p>
      {part1} {exercises1}
    </p>
  )
}

const Part2 = () => {
  return (
    <p>
      {part2} {exercises2}
    </p>
  )
}

const Part3 = () => {
  return (
    <p>
      {part2} {exercises2}
    </p>
  )
}

export default App

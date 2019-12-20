import React, { useState } from 'react'
import { Steps, Button } from 'antd'

const { Step } = Steps

const steps = [
  {
    title: 'First',
    content: 'First-content'
  },
  {
    title: 'Second',
    content: 'Second-content'
  },
  {
    title: 'Last',
    content: 'Last-content'
  }
]

const MySteps: React.FC = () => {
  const [current, setCurent] = useState(0)

  function handleNext() {
    setCurent(current => current + 1)
  }

  function handleRfresh() {
    setCurent(0)
  }

  return (
    <>
      <Steps current={current}>
        {steps.map(step => (
          <Step key={step.title} title={step.title} />
        ))}
      </Steps>
      {current < steps.length - 1 && (
        <Button onClick={handleNext} style={{ marginTop: 50 }} type='primary'>
          Next
        </Button>
      )}
      {current >= steps.length - 1 && (
        <Button style={{ marginTop: 50 }} type='primary'>
          Done
        </Button>
      )}
      {current > 0 && (
        <Button
          onClick={handleRfresh}
          style={{ marginTop: 50, marginLeft: 10 }}
          type='primary'
        >
          Rfresh
        </Button>
      )}
    </>
  )
}

export default MySteps

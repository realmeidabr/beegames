/* eslint-disable prettier/prettier */
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

interface CounterProps {
  counter: number
}

const DEFAULT_COUNTER_VALUE = 100

const CSS_HANDLES = ['counter']

const Counter: StorefrontFunctionComponent<CounterProps> = ({
  counter = DEFAULT_COUNTER_VALUE,
}) => {

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.counter} db tc`}>
      {counter}
    </div>
  )}

Counter.schema = {
  title: 'editor.balance-counter.title',
  description: 'editor.balance-counter.description',
  type: 'object',
  properties: {
    counter: {
      title: 'Points Balance',
      description: 'User points balance',
      type: 'number',
      default: 0,
    },
  },
}

export default Counter
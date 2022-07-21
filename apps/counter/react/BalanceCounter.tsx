/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useCssHandles } from 'vtex.css-handles'


const CSS_HANDLES = ['counter']

const Counter: StorefrontFunctionComponent = () => {

  const handles = useCssHandles(CSS_HANDLES)

  const [userId, setUserId] = useState('')
  const [balance, setBalance] = useState(100)

  function getUserId() {
    fetch('/api/sessions?items=profile.id')
      .then(res => res.json())
      .then(setUserId)
    return userId
  }

  function getBalance(userId: string) {
    return fetch(`http://localhos:3003/balance/${userId}`)
    .then(res => res.json())
    .then(setBalance)
  }

  useEffect(() => {
    getUserId()
    getBalance(userId)
  }, [])

  return (
    <div className={`${handles.counter} db tc`}>
      <div>{balance}</div>
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
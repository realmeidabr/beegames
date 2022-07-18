/* eslint-disable prettier/prettier */
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

interface TitleProps {
  title: string
}

const CSS_HANDLES = ['title']

const Title: StorefrontFunctionComponent<TitleProps> = ({ title }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const titleText = title || <FormattedMessage id="balance-counter.title" />

  return (
    <div className={`${handles.title} t-heading-6 fw3 w-100 c-muted-1 db tc`}>
      {titleText}
    </div>
  )
}

Title.schema = {
  title: 'editor.balance-counter-title.title',
  description: 'editor.balance-counter-title.description',
  type: 'object',
  properties: {
    title: {
      title: 'Counter Title',
      description: 'Counter title description',
      type: 'string',
      default: null,
    },
  },
}

export default Title
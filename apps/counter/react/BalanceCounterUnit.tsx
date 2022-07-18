/* eslint-disable prettier/prettier */
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

interface UnitProps {
  unit: string
}

const CSS_HANDLES = ['unit']

const Unit: StorefrontFunctionComponent<UnitProps> = ({ unit }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const unitText = unit || <FormattedMessage id="balance-counter.unit" />

  return (
    <div className={`${handles.unit} t-heading-4 fw3 w-100 c-muted-1 db tc`}>
      {unitText}
    </div>
  )
}

Unit.schema = {
  title: 'editor.balance-counter-unit.title',
  description: 'editor.balance-counter-unit.description',
  type: 'object',
  properties: {
    unit: {
      title: 'Counter Unit',
      description: 'Counter unit text',
      type: 'string',
      default: null,
    },
  },
}

export default Unit
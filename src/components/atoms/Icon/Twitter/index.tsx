import * as React from 'react'
import Icon from '..'
import { ParentProps } from '../types'

export type Props = ParentProps

const Twitter = (props: Props) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M24 5.306c-0.881 0.394-1.833 0.656-2.827 0.773 1.017-0.609 1.795-1.575 2.166-2.723-0.952 0.563-2.006 0.975-3.127 1.195-0.9-0.956-2.18-1.552-3.595-1.552-2.719 0-4.922 2.203-4.922 4.922 0 0.384 0.042 0.759 0.127 1.12-4.092-0.206-7.72-2.166-10.148-5.147-0.422 0.727-0.666 1.575-0.666 2.475 0 1.706 0.867 3.216 2.189 4.097-0.806-0.023-1.566-0.248-2.231-0.614 0 0.019 0 0.042 0 0.061 0 2.386 1.697 4.378 3.952 4.828-0.412 0.112-0.848 0.173-1.298 0.173-0.319 0-0.623-0.033-0.928-0.089 0.628 1.955 2.447 3.38 4.598 3.422-1.688 1.322-3.806 2.109-6.117 2.109-0.398 0-0.788-0.023-1.177-0.070 2.184 1.402 4.772 2.212 7.552 2.212 9.056 0 14.011-7.505 14.011-14.011 0-0.216-0.005-0.427-0.014-0.637 0.961-0.689 1.795-1.556 2.456-2.545z"></path>
    </Icon>
  )
}

export default Twitter

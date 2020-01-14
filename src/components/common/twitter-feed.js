import React from 'react'
import { Timeline } from 'react-twitter-widgets'

const TwitterFeed = () => (
  <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'klerosT2CR'
    }}
    options={{
      username: 'klerosT2CR',
      height: '284',
      width: '100%',
      linkColor: '#D09CFF'
    }}
  />
)

export default TwitterFeed

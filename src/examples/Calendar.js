import React from 'react'
import { Calendar } from '../components/Calendar'


export default function CalendarExample() {
  return (
    <div style={{
        display: 'grid',
        placeItems: 'center center',
        height: '100vh'
    }}>
    <Calendar/>
    </div>
  )
}

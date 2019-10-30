import React from 'react'
import Bloglist from './Bloglist'
import Calendar from './Calendar'
import FilterSort from './FilterSort'

const Dashboard = () => (
  <div>
    <Calendar />
    <FilterSort />
    <Bloglist />
  </div>
)

export default Dashboard
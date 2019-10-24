import React from 'react'
import Bloglist from './Bloglist'
import FilterSort from './FilterSort'

const Dashboard = () => (
  <div>
    <FilterSort />
    <Bloglist />
  </div>
)

export default Dashboard
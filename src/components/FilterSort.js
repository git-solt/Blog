import React, { useContext } from 'react'
import AppContext from '../context/app-context'
import { sortByTitle, sortByDate, searchByText } from '../generators/filters'


const FilterSort = () => {
  const { dispatchFilter } = useContext(AppContext) 


  return (
    <div>
      <form>
        <input placeholder="Search" onInput={(e) => dispatchFilter(searchByText(e.target.value))}/>
      </form>
      <label>Sort your posts</label>
      <select
        onChange={(e) =>
          e.target.value === 'title' ? dispatchFilter(sortByTitle()) :
            dispatchFilter(sortByDate())
        }
        name="posts"
        id="post-select"
      >
        <option value="date">Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  )

}

export default FilterSort
import React, { useReducer, useEffect } from 'react'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import AppRouter from './AppRouter'
import Header from './Header'
import { addPost } from '../generators/actions'
import AppContext from '../context/app-context'
import filterReducer from '../reducers/filter-reducer'
import { sortByDate, sortByTitle, searchByText, setEndDate, setStartDate } from '../generators/filters'
import postReducer from '../reducers/blog-reducer'
import postSelector from '../selectors/postSelector'
import moment from 'moment'
import { database } from '../firebase/firebase'



const MainPage = ({ defaultState, curId }) => {

  let [posts, dispatchContext] = useReducer(postReducer, defaultState)
  const [filter, dispatchFilter] = useReducer(filterReducer, {
    searchWord: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  })









  useEffect(() => {
    console.log(posts)
  }, [posts])





  return (
    <div>
      <AppContext.Provider value={{
        posts,
        dispatchContext,
        filter,
        dispatchFilter,
        isAuthenticated:!!curId

      }}>
        <Header />
        <AppRouter />
      </AppContext.Provider>
    </div>
  )
}

export default MainPage 
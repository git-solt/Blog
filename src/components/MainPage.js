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



const MainPage = ({defaultState}) => {
  
  let [posts, dispatchContext] = useReducer(postReducer, defaultState)
  const [filter, dispatchFilter] = useReducer(filterReducer, {
    searchWord: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  })



  useEffect(() => {
    // dispatchContext(addPost({
    //   title: 'First title 1',
    //   body: 'Dummy body'
    // }))

    // dispatchContext(addPost({
    //   title: 'Aftertitle 2',
    //   body: 'My second post for testing'
    // }))


    // dispatchFilter(sortByTitle())
    // dispatchFilter(sortByDate())
    // dispatchFilter(setStartDate(moment().subtract(10, 'days').valueOf()))
    // dispatchFilter(setEndDate(moment().subtract(2, 'days').valueOf()))
    // dispatchFilter(sortByTitle())
    // dispatchFilter(searchByText(''))
    // dispatchContext(addPost({
    //   title: 'Dummypost 3',
    //   body: 'My second post for testing'
    // }))





  }, []

  )

  // useEffect(() => {
  //   console.log(filter)
  // }, [filter])




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

      }}>
        <Header />
        <AppRouter />
      </AppContext.Provider>
    </div>
  )
}

export default MainPage 
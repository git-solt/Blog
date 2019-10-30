export const sortByTitle = () => ({type:'SORT_BY_TITLE'})

export const sortByDate = () => ({type:'SORT_BY_DATE'})

export const searchByText = (searchWord) => ({
  type:'SEARCH_WORD',
  searchWord

})

export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate 
})

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate 
})
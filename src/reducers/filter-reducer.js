


const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_TITLE':
      return {
        ...state,
        sortBy: 'title'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SEARCH_WORD':
      return {
        ...state,
        searchWord: action.searchWord
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate

      }
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate
  
        }

    default:
      return state
  }
}

export default filterReducer
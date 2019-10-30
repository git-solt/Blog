const postSelector = (posts, filter) => {
  const searchWordMatch = posts.filter(({ title }) => title.toLowerCase().includes(filter.searchWord.toLowerCase())).length > 0
  const startDateMatch = !filter.startDate || posts.filter(({ createdAt }) => createdAt >= filter.startDate.valueOf()).length > 0
  const endDateMatch = !filter.endDate || posts.filter(({ createdAt }) => createdAt <= filter.endDate.valueOf()).length > 0


  if (searchWordMatch && startDateMatch && endDateMatch) {

    return posts.filter(({ title, createdAt }) => {
      if(!filter.startDate || !filter.endDate) {
        return title.toLowerCase().includes(filter.searchWord.toLowerCase())
      } else {
        return title.toLowerCase().includes(filter.searchWord.toLowerCase()) && createdAt >= filter.startDate.valueOf() && createdAt <= filter.endDate.valueOf()
      }
    }).sort((a,b)=> {
      if (filter.sortBy === 'date') {
        return a.createdAt > b.created ? -1 : 1
      } else {
        return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
      }
    })
  } else return []


}

export default postSelector
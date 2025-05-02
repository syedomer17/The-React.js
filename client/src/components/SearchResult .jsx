import React from 'react'

const SearchResult  = ({ searchTerm }) => {
  return (
    <div>
      <p>🔍 Searching for: <strong>{searchTerm || '...'}</strong></p>
    </div>
  )
}

export default SearchResult 

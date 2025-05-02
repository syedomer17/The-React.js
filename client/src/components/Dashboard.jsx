import React, { useState } from 'react'
import SearchBar from './ SearchBar';
import SearchResult from './SearchResult ';

const Dashboard = () => {
    const [searchTerm,setSearchTerm] = useState("");
  return (
    <div>
      <h1>Dashbord</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchResult searchTerm={searchTerm}/>
    </div>
  )
}

export default Dashboard

import React from 'react';

const SearchBar = (props) => {

  return (<div className="search bar" >
    <form onSubmit={props.handleSubmit}>
      <input type="text" onChange={props.handleChange} placeholder="Search..." />
      <input type="submit" value="🔍" />
    </form>
  </div>
  )
}


export default SearchBar
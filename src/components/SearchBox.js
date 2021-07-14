import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
          style={{width:"300px", height:'20px'}}
        >
        </input>
        <button type="submit">
        <SearchIcon style={{height: 18}} />
        </button>
      </div>
  </form>
  );
}
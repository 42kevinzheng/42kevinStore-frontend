import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
          style={{width:"350px", height:'25px', borderRadius: 4}}
        >
        </input>
        <button type="submit">
        <SearchIcon style={{height: "25px",}} />
        </button>
      </div>
  </form>
  );
}
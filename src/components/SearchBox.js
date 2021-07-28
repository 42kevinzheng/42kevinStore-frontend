import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import InputBase from '@material-ui/core/InputBase';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  
  console.log('this is for search ,', props)
  return (
    <div className={classes.grow}>
    <form onSubmit={submitHandler}>


    <div className={classes.search}>
            

          
            <InputBase 
            placeholder="Search…" 
            type='text'
            classes={{ root: classes.inputRoot, input: classes.inputInput, }}
            onChange={event=>{                                 //adding the onChange event
              setName(event.target.value)
            }}
            />
            <button  type="submit" className={classes.searchIcon}>
              <SearchIcon  />
              </button>
          </div>
  </form>
  </div>
  );
}









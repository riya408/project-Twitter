import React from 'react'
import CustomInputFields from '../../atoms/InputFields/input'
import SearchIcon from '@mui/icons-material/Search';
import searchStyle from '../Search/search.module.css'
const Search = () => {
  return (
    <div className={searchStyle.main}>
        <SearchIcon/>
      <CustomInputFields abc="Search Twitter" style={{border:"none",fontSize:"1rem",width:"10rem",padding:"none",outline:"none",backgroundColor:" rgb(216, 218, 218)"}}/>
    </div>
  )
}

export default Search

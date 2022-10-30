import { useState } from "react";

const Search = ({ cb }) => {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  const handleSubmit = () => { 
    cb(value)
  }
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="search-field"
          type='search'
          placeholder="search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>
        <button
          className="btn"
          style={{
            position: 'absolute',
            top: 0,
            right: 0
          }}
          onClick={handleSubmit}
        ></button>
      </div>
    </div>
  )
}

export default Search;
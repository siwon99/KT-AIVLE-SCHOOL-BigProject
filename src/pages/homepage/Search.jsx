import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import "./Search.css"; // 권혜민 추가

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="검색어를 입력해 주세요."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="search-icon"></div>
    </div>
  );
};

export default Search;

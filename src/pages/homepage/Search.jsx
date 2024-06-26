import React, { useState } from 'react'; // eslint-disable-line no-unused-vars

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
    </div>
  );
};

export default Search;

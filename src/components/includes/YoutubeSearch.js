import React, { useRef } from "react";

function YoutubeSearch({ onSearch }) {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value; 
    // 글 써줄때마다 그걸 저장시켜줌
    onSearch(value) //이 값을 밑에 onSearch로 줌
  };

  const onClick = () => {
    handleSearch();
  };
  
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="youtube__search">
      <h2>검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        placeholder="검색하세요."
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </div>
  );
}

export default YoutubeSearch;

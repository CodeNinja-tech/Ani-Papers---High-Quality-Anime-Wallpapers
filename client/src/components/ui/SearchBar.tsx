import React, { useState } from 'react'
import { iconSearch, iconSearchHover } from '../index'

interface SearchBarProps {
  updateQuery: Function
  sendRequest: Function
}

/**
 * Ani Papers Top SearchBar Component
 * @returns React Component
 */
const SearchBar: React.FC<SearchBarProps> = ({ updateQuery, sendRequest }) => {
  const [searchIcon, setSearchIcon] = useState(iconSearch)
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(() => ev.target.value)
    if (ev.target.value.trim() && ev.target.value !== '') {
      updateQuery(ev.target.value)
    } else if (ev.target.value === '') {
      updateQuery('')
    }
  }

  const handleSubmit = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      sendRequest()
    }
  }

  return (
    <div className="mt-[24px] mx-auto max-w-[880px] pr-[4px] pl-[4px] group relative">
      <img
        src={searchIcon}
        alt="icon-search"
        className="top-[50%] translate-y-[-50%] left-[24px] absolute inline-block"
      />
      <input
        type="text"
        placeholder="Find your wallpapers"
        className="w-full block bg-light-black outline-none border-[1px] border-light-black px-[16px] py-[14px] pl-[44px] font-body focus:border-accent transition-[border] ease selection:text-accent selection:bg-selection-bg"
        autoComplete="off"
        autoCorrect="off"
        onFocus={() => setSearchIcon(iconSearchHover)}
        onBlur={() => setSearchIcon(iconSearch)}
        value={searchValue}
        onChange={ev => handleChange(ev)}
        onKeyUp={ev => handleSubmit(ev)}
      />
    </div>
  )
}

export default SearchBar

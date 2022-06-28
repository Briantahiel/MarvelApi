import React, {useState} from 'react'
import "./Marvel.css"

function SearchMarvel({search}) {
    const [text, setText] = useState('')
    const handleClick = (e) => {
        setText(e)
        search(e)
    }
    console.log(text, search)

  return (
    <div className='search'>
        <form>
            <input 
            type="text"
            className='form-input'
            placeholder='Search a Character'
            autoFocus
            onChange={(e) => handleClick(e.target.value)}
            value={text}/>
        </form>
    </div>
  )
}

export default SearchMarvel
import React from 'react'
import Column from '../components/Column/Column'
import Columnsss from '../components/Column/Columnsss'
import StickyNote from '../components/StickyNote'
import GreenSticky from '../components/GreenSticky'

function Board() {
  return (
    <div className='columns'>
        <div className='column'>
        <StickyNote />
        </div>
        <div className='column'>
        <GreenSticky />
        </div>
        <div className='column'>
        <StickyNote />
        </div>
    </div>
    
  )
}

export default Board

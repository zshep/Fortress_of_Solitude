import React from 'react'
import StickyNote from '../components/StickyNotes/StickyNote'
import GreenSticky from '../components/StickyNotes/GreenSticky'

//All of these passedownprops will be replaced by db data, this is just an example of how we will pass it down
const passedDownProp1= 'Dog Poop!'
const passedDownProp2= 'I need someone to pick up the dog poop off of my lawn. Its terrible. Oh gawd'
const passedDownProp3=  'Litter in Park'
const passedDownProp4= 'Some teenagers left a bunch of trash pokemon cards all over the park. Anyone want to clean it?'
const passedDownProp5= 'Repair Little Library'
const passedDownProp6= 'The little library on the corner has fallen over. Anyone want to fix it?'

//Replace all the passed down props above with a js function that cycles through the data retreived from db


function Board() {
  return (
    <div className='columns'>
        <div className='column'>
        <StickyNote 
        title= {passedDownProp1}
        summary={passedDownProp2}
        />
        </div>
        <div className='column'>
        <GreenSticky 
        title={passedDownProp3}
        summary={passedDownProp4}
        />
        </div>
        <div className='column'>
        <StickyNote 
        title={passedDownProp5}
        summary={passedDownProp6}
        />
        </div>
    </div>
    
  )
}

export default Board

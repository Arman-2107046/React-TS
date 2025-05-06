import React from 'react'

const EventHandling = () => {
  
    function handleClick(e:React.MouseEvent<HTMLButtonElement>)
    {
        console.log("Button Clicked", e.currentTarget);

    }

    function handleMouseEnter(e:React.MouseEvent<HTMLDivElement>)
    {
        console.log("Mouse Entered", e.currentTarget);
    }
  
  
    return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling Example</h2>

      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default EventHandling





import React from 'react'

const section = () => {
  return (
    <div >
<section>
  
            <form >
              <label> From </label>
                <input type="text" placeholder='checkbox'></input><span>
                <label> To </label>
                <input type="text" placeholder='checkbox'></input>
                </span>
                <label>Depart</label>
                <input type="date" placeholder='checkbox'></input><span></span>
                <label>Arrival</label>
                <input type="date" placeholder='checkbox'></input><span></span>
                 <button class="btn btn-outline-success my-2 my-sm-0" type="login ">Search Flights</button>
            </form>
            </section>
    </div>
  )
}

export default section
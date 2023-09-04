import React from 'react'
// import style
import "./AddBtn.scss"
import { SlBasket } from 'react-icons/sl';

function AddBtn() {
  return (
	<div>
	  <a className='add-btn' href=""><SlBasket className='bascet-add'/> Add </a>
	</div>
  )
}  

export default AddBtn

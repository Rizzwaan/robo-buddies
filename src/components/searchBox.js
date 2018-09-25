import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
	return(
		<div>
		<input
		  className='pa3 baq b--green bg-lightest-blue' 
		  type='text' 
		  placeholder='Search Here'
		  onChange = {searchChange}
		  />
		</div>
		);
}

export default SearchBox;
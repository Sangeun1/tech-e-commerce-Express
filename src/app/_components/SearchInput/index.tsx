import Image from 'next/image';
import classes from './index.module.scss'
import { Search } from 'lucide-react';

const SearchInput = () => {
	return (  
		<form className={classes.searchForm} >

		 {/* <form className={classes.searchForm} onSubmit={handleSearchSubmit}> */}
        <>
				<input
          type="text"
          // value={searchTerm}
          // onChange={handleSearchChange}
          placeholder="Search..."
          className={classes.searchInput}
        />

				<button type="submit" className={classes.searchButton}>
					<Search className={classes.searchIcon}/>
				</button>
        </>
      </form>
	);
}
 
export default SearchInput;
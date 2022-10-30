import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import Preloader, { } from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import { useLocation, useHistory } from 'react-router-dom';

const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation()
  const { push } = useHistory();
  // console.log('push',push)
  // console.log('pathname, search',pathname, search)

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    )
    push({
      pathname,
      search: `?search=${str}`
    })
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories)
      setFilteredCatalog(search ?
        data.categories.filter(item =>
          item.strCategory.toLowerCase().includes(search.split('=')[1].toLocaleLowerCase())) : data.categories
      )
    })
  }, [search]);

  return (
    <React.Fragment>
      <Search cb={handleSearch}></Search>
      {!catalog.length ? <Preloader></Preloader> : <CategoryList catalog={filteredCatalog}></CategoryList>}
    </React.Fragment>
  )
};
export default Home;
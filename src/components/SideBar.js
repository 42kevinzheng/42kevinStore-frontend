import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link } from 'react-router-dom';
import { listProductCategories } from '../actions/actions2';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const SideBar = () => {

  const dispatch = useDispatch();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

    return (
        <div>
            <button type="button" onClick={() => setSidebarIsOpen(true)} >
              <MenuIcon/>
            </button>
            <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)} type="button" >
                <CloseIcon/>
              </button>
            </li>
            {loadingCategories ? (
          <div className="loading">
            Loading...
          </div>
            ) : errorCategories ? (
          {errorCategories}
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
        </div>
    )
}

export default SideBar

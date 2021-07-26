import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link } from 'react-router-dom';
import { listProductCategories } from '../actions/actions2';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Scrollbars } from 'react-custom-scrollbars';


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
            <aside className={sidebarIsOpen ? 'open' : ''} style={{ marginLeft:-24,marginTop:24.3}}>
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
              <Scrollbars style={{ width: 442, height: 1173, borderStyle: 'solid'}}>
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))}
              </Scrollbars>
            )}
          </ul>
        </aside>
        </div>
    )
}

export default SideBar

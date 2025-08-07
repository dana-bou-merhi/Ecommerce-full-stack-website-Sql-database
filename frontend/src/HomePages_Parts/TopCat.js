import React from "react"
import TopCart from "./TopCategories"

import '../styles/styles.css';
const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='top-categ'>
            <div className='heading-categ'>
              <h2>Top Categories</h2>
            </div>
            <div className='view-all '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
         <TopCart/>
        </div>
      </section>
    </>
  )
}

export default TopCate
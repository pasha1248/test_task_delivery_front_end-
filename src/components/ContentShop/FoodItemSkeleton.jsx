/** @format */

import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = props => (
  <ContentLoader
    speed={1}
    width={280}
    height={414}
    viewBox='0 0 280 414'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='141' cy='137' r='138' />
    <rect x='169' y='272' rx='0' ry='0' width='16' height='2' />
    <rect x='348' y='583' rx='0' ry='0' width='23' height='12' />
    <rect x='9' y='292' rx='28' ry='28' width='271' height='116' />
  </ContentLoader>
)

export default MyLoader

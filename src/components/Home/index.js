/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home

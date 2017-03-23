/**
 * Created by luqianyu on 2017/1/3.
 */
import React from 'react'
import Header from '../../components/Header'

import './CoreLayout.css'
import '../../styles/core.css'

const Layout = React.createClass({
  render () {
    return (
      <div className='container'>
        <Header {...this.props} />
        <div className='core-layout__viewport'>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default Layout

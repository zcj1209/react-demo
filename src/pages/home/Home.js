import React from 'react'
import StewardMapPage from '../components/StewardMapPage'
import StewardOrderStatic from '../components/StewardOrderStatic'
import StoreMapPage from '../components/StoreMapPage'
import StorePropertyStatic from '../components/StorePropertyStatic'
import './home.css'

export default function Home() {
  return (
    <div className={'container'}>
      <header className='header'>
        <div className='left_bg' />
        <div className='right_bg' />
        <h3 style={{textAlign: 'center'}}>牛油果数据可视化</h3>
      </header>
      <section className='grid'>
        <div className='col1'>
          {/* 集中式门店房源数量统计 */}
          <StorePropertyStatic />

          {/* 分散式站点服务单量统计 */}
          <StewardOrderStatic />
        </div>

        {/* 集中式门店地图分布 */}
        <div className='col2'>
          <StoreMapPage />
        </div>
          
        {/* 分散式站点地图分布 */}
        <div className='col3'>
          <StewardMapPage />
        </div>
        
        
        
      </section>
    </div>
  )
}

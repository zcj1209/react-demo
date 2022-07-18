import React, {useEffect, useRef} from 'react'
import * as echarts from 'echarts'
import './index.css'

export default function StorePropertyStatic() {
  const domRef = useRef(null)
  const echartRef = useRef(null)

  useEffect(() => {
    echartRef.current = echarts.init(domRef.current)

    echartRef.current?.setOption({
      title: {
        text: 'Echarts饼图示例',
      },
      xAxis: {
        data: ['集中式门店1', '集中式门店2', '集中式门店2', '集中式门店2']
      },
      yAxis: {},
      series: [
        {
          name: '门店数量',
          type: 'bar',
          data: [100, 90, 50, 70],
        },
      ]
    })
  }, [])

  return (
    <div className='section'>
      <h1 style={{textAlign: 'center'}}>
        集中式门店房源数量统计
      </h1>
      <div style={{height: '200px'}} ref={domRef}>
      </div>
    </div>
  )
}
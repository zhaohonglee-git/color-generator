import React, { useState, useEffect } from 'react'

const SingleColor = ({ color: { rgb, weight, hex }, index }) => {
  const [alert, setAlert] = useState(false)
  // console.log(rgb, weight, hex, index)
  const bcg = rgb.join(',')
  const hexValue = `#${hex}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  })

  return (
    <article style={{ backgroundColor: `rgb(${bcg})` }} className={`color ${index > 10 && 'color-light'}`}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>已经复制到剪贴板</p>}
    </article>
  )
}

export default SingleColor

/*
 - rgb拿到的是一个数组，如：[255,255,200] 需要渲染为该数组对应的色彩 rgb(255,255,200)
 - 利用useEffect来实现定时器的操作（当页面有内容更新，则useEffect就会执行）
 - 注意onClick中做了两件事，设置点击后的setAlert状态为true,将haxValue值拷贝到剪贴板
 */

import React, { useState } from "react";
import Values from 'values.js'
import SingleColor from './SingleColor.jsx'

const App = () => {
  const [color, setColor] = useState('')
  const [list, setList] = useState([])
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      // console.log(error)
      setError(true)
    }
  }

  // console.log(list)

  return (
    <>
      <section className='container'>
        <h3>颜色生成器</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='#f15025' onChange={(e) => setColor(e.target.value)} className={`${error ? 'error' : null}`} />
          <button type='submit' className='btn'>提交</button>
        </form>
      </section>

      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor key={index} color={color} index={index}></SingleColor>
          )
        })}
      </section>
    </>
  );
}

export default App;

/*
 - return中默认只能有一个跟组件包裹，可以用两个空尖括号包裹
 - 两个section是上下两部分内容
 - 如果输入的颜色值非法，需要对应将输入框进行红色样式的显示以提示用户，这个地方需要用到判断
 */
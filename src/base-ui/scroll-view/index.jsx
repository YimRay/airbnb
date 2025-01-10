import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef()

	// 判断是否加载右边按钮
	const scrollContentRef = useRef()
	useEffect(() => {
		const scrollWidth = scrollContentRef.current.scrollWidth
		const clientWidth = scrollContentRef.current.clientWidth
		const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
		setShowRight(totalDistance > 0)
	}, [props.children])

  function controlClickHandle(isRight) {
    const newIndex =  isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    // 是否显示右边的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }
  return (
    <ViewWrapper>
        {showLeft &&
          <div className='control left' onClick={e => controlClickHandle(false)}>
            <IconArrowLeft></IconArrowLeft>
          </div> 
        }
        {showRight && 
          <div className='control right' onClick={e => controlClickHandle(true)}>
            <IconArrowRight></IconArrowRight>
          </div>
        }

        <div className='scroll'>
          <div className='scroll-content' ref={scrollContentRef}>
            {props.children}
          </div>
        </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
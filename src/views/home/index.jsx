import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { isEmptyO } from '@/utils/is-empty-object'
import HomeLongfor from './c-cpns/home-longfor'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo,discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxxx"))
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: true}))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
          {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>}
          {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>}
          {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}></HomeLongfor>}
          {isEmptyO(goodPriceInfo)  && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>}
          {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>}
          {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>}

      </div>
    </HomeWrapper>
  )
})

export default Home

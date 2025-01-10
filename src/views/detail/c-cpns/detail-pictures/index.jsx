import React, { memo, useState } from 'react'
import { PicturesWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrower from '@/base-ui/picture-brower'

const DetailPictures = memo(() => {
    const [showBrower, setShowBrower] = useState(false)
    const {detailInfo} = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }),shallowEqual)
  return (
    <PicturesWrapper>
        <div className='pictures'>
            <div className='left'>
                <div className='item' onClick={e => setShowBrower(true)}>
                    <img src={detailInfo?.picture_urls[0]} alt="" />
                    <div className='cover'></div>
                </div>
            </div>
            <div className='right'>
                {
                    detailInfo?.picture_urls?.slice(1, 5).map(item => {
                        return (
                            <div className='item' key={item} onClick={e => setShowBrower(true)}>
                                <img src={item} alt="" />
                                <div className='cover'></div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
        <div className='show-btn' onClick={e => setShowBrower(true)}>显示照片</div>
        {showBrower && 
            <PictureBrower 
                pictureUrls={detailInfo?.picture_urls} 
                closeClick={e => setShowBrower(false)}
            >
            </PictureBrower>
        }
    </PicturesWrapper>
  )
})



export default DetailPictures
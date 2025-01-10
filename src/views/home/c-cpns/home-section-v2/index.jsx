import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
	// 定义内部state
	const initialName = Object.keys(infoData.dest_list ?? {})[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)

  const tabClickHandle = useCallback(function(index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
          <div className='discount'>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
            <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%"></SectionRooms>
						<SectionFooter name={name}></SectionFooter>
          </div>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2
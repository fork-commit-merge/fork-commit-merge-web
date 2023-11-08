import { useRouter } from 'next/router'
import React from 'react'
import Discussions from '../../components/communityComponents/Discussions'
import Events from '../../components/communityComponents/Events'
import CommunityNotSupported from '../../components/communityComponents/CommunityNotSupported'

const CommunityPage = () => {
  const router = useRouter()
  const { community } = router.query

  const renderContent = () => {
    switch (community) {
      case 'discussions':
        return <Discussions />
      case 'events':
        return <Events />

      default:
        return <CommunityNotSupported />
    }
  }

  return <div className='bg-primary px-6 py-10'>{renderContent()}</div>
}

export default CommunityPage

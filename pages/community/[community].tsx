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
        return (
          <div className='bg-primary min-h-screen'>
            <Discussions />
          </div>
        )
      case 'events':
        return (
          <div className='bg-primary min-h-screen'>
            <Events />
          </div>
        )

      default:
        return <CommunityNotSupported />
    }
  }

  return <div className='bg-primary'>{renderContent()}</div>
}

export default CommunityPage

import { useRouter } from 'next/router'
import React from 'react'
import Discussions from '../../components/communityComponents/Discussions'
import Events from '../../components/communityComponents/Events'
import CommunityNotSupported from '../../components/communityComponents/CommunityNotSupported'
import PageBackground from '../../components/common/PageBackground'

const CommunityPage = () => {
  const router = useRouter()
  const { community } = router.query

  const renderContent = () => {
    switch (community) {
      case 'discussions':
        return (
          <div className='bg-primary min-h-screen'>
            <PageBackground imagePath="/fcm-background-image.png">
              <div className='page-header-content'>
                <h1 className='mb-6 text-center text-4xl font-bold'>
                  Discussions
                </h1>
              </div>
            </PageBackground>
            <Discussions />
          </div>
        )
      case 'events':
        return (
          <div className='bg-primary min-h-screen'>
            <PageBackground imagePath="/fcm-background-image.png">
              <div className='page-header-content'>
                <h1 className='mb-6 text-center text-4xl font-bold'>Events</h1>
              </div>
            </PageBackground>
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


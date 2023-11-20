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
            <div
              className='w-full bg-cover bg-center'
              style={{ backgroundImage: "url('/community.png')" }}
            >
              <div className='flex flex-col items-center justify-center p-24 text-center text-white'>
                <h1 className='mb-6 text-center text-4xl font-bold'>
                  Discussions
                </h1>
              </div>
            </div>
            <Discussions />
          </div>
        )
      case 'events':
        return (
          <div className='bg-primary min-h-screen'>
            <div
              className='w-full bg-cover bg-center'
              style={{ backgroundImage: "url('/community.png')" }}
            >
              <div className='flex flex-col items-center justify-center p-24 text-center text-white'>
                <h1 className='mb-6 text-center text-4xl font-bold'>Events</h1>
              </div>
            </div>
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

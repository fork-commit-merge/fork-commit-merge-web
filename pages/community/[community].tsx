import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import React from 'react'

const Discussions = dynamic(
  () => import('../../components/communityComponents/Discussions'),
  { ssr: false }
)
const Events = dynamic(
  () => import('../../components/communityComponents/Events'),
  { ssr: false }
)
const CommunityNotSupported = dynamic(
  () => import('../../components/communityComponents/CommunityNotSupported'),
  { ssr: false }
)

const CommunityPage = () => {
  const router = useRouter()
  const { community } = router.query

  let Content
  switch (community) {
    case 'discussions':
      Content = <Discussions />
      break
    case 'events':
      Content = <Events />
      break
    default:
      Content = <CommunityNotSupported />
  }

  return <div className="bg-primary min-h-screen">{Content}</div>
}

export default CommunityPage
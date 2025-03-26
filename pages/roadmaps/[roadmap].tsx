import { useRouter } from 'next/router'
import RoadmapNotSupported from '../../components/roadmapComponents/RoadmapNotSupported'
import OpenSourcePhilosophy from '../../components/roadmapComponents/OpenSourcePhilosophy'
import OpenSourceLicenses from '../../components/roadmapComponents/OpenSourceLicenses'
import HowToContribute from '../../components/roadmapComponents/HowToContribute'
import DocumentationOverview from '../../components/roadmapComponents/DocumentationOverview'
import ContributionManagement from '../../components/roadmapComponents/ContributionManagement'
import LegalEthicalConsiderations from '../../components/roadmapComponents/LegalEthicalConsiderations'
import OpenSourceTerminology from '../../components/roadmapComponents/OpenSourceTerminology'

const RoadmapPage = () => {
  const router = useRouter()
  const { roadmap } = router.query

  const commonHeaderStyle = {
    backgroundImage: "url('/fcm-background-image.png')"
  }

  const renderContent = () => {
    switch (roadmap) {
      case 'how-to-contribute':
        return (
          <div className='bg-primary min-h-screen'>
            <HowToContribute />
          </div>
        )
      case 'contribution-management':
        return (
          <div className='bg-primary min-h-screen'>
            <ContributionManagement />
          </div>
        )
      case 'open-source-philosophy':
        return (
          <div className='bg-primary min-h-screen'>
            <OpenSourcePhilosophy />
          </div>
        )
      case 'open-source-licenses':
        return (
          <div className='bg-primary min-h-screen'>
            <OpenSourceLicenses />
          </div>
        )
      case 'overview-of-documentation':
        return (
          <div className='bg-primary min-h-screen'>
            <DocumentationOverview />
          </div>
        )
      case 'legal-and-ethical-considerations':
        return (
          <div className='bg-primary min-h-screen'>
            <LegalEthicalConsiderations />
          </div>
        )
      case 'open-source-terminology':
        return (
          <div className='bg-primary min-h-screen'>
            <OpenSourceTerminology />
          </div>
        )
      default:
        return <RoadmapNotSupported />
    }
  }

  return <div className='bg-primary pb-10'>{renderContent()}</div>
}

export default RoadmapPage

import { useRouter } from 'next/router'
import RoadmapNotSupported from '../../components/roadmapComponents/RoadmapNotSupported'
import OpenSourcePhilosophy from '../../components/roadmapComponents/OpenSourcePhilosophy'
import OpenSourceLicenses from '../../components/roadmapComponents/OpenSourceLicenses'
import HowToContribute from '../../components/roadmapComponents/HowToContribute'
import DocumentationOverview from '../../components/roadmapComponents/DocumentationOverview'
import ContributionManagement from '../../components/roadmapComponents/ContributionManagement'
import LegalEthicalConsiderations from '../../components/roadmapComponents/LegalEthicalConsiderations'
import OpenSourceTerminology from '../../components/roadmapComponents/OpenSourceTerminology'
import Portfolio from '../../components/roadmapComponents/Portfolio'

const RoadmapPage = () => {
  const router = useRouter()
  const { roadmap } = router.query

  const commonHeaderStyle = {
    backgroundImage: "url('/fcm-background-image.png')"
  }

  const renderContent = () => {
    switch (roadmap) {
      case 'how-to-contribute':
        return <HowToContribute />
      case 'contribution-management':
        return <ContributionManagement />
      case 'open-source-philosophy':
        return <OpenSourcePhilosophy />
      case 'open-source-licenses':
        return <OpenSourceLicenses />
      case 'overview-of-documentation':
        return <DocumentationOverview />
      case 'legal-and-ethical-considerations':
        return <LegalEthicalConsiderations />
      case 'open-source-terminology':
        return <OpenSourceTerminology />
      case 'portfolio':
        return <Portfolio />
      default:
        return <RoadmapNotSupported />
    }
  }

  return <div>{renderContent()}</div>
}

export default RoadmapPage

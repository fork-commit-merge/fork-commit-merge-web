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
    backgroundImage: "url('/fcm-background-image.png')",
  }

  const renderContent = () => {
    switch (roadmap) {
      case 'how-to-contribute':
        return (
          <div className='bg-primary min-h-screen'>
            <div className='page-header-background' style={commonHeaderStyle}>
              <div className='page-header-content'>
                <h1 className='mb-6 text-center text-4xl font-bold'>
                  Roadmaps
                </h1>
              </div>
            </div>
            <HowToContribute />
          </div>
        )
      case 'contribution-management':
        return (
          <div className='bg-primary min-h-screen'>
            <div className='page-header-background' style={commonHeaderStyle}>
              <div className='page-header-content'>
                <h1 className='mb-6 text-center text-4xl font-bold'>
                  Roadmaps
                </h1>
              </div>
            </div>
            <ContributionManagement />
          </div>
        )
      case 'open-source-philosophy':
        return (
          <div className='bg-primary min-h-screen'>
            <div className='page-header-background' style={commonHeaderStyle}>
              <div className='page-header-content'>
                <h1 className='mb-6 text-center text-4xl font-bold'>
                  Roadmaps
                </h1>
              </div>
            </div>
            <OpenSourcePhilosophy />
          </div>
        )
      case 'open-source-licenses':
        return (
          <div className='bg-primary min-h-screen'>
            <div className='page-header-background' style={commonHeaderStyle}>
              <div className='page-header-content'>
                <h1 className='mb-6 text-center text-4xl font-bold'>
                  Roadmaps
                </h1>
              </div>
            </div>
            <OpenSourceLicenses />
          </div>
        )
      case 'overview-of-documentation':
        return (
          <div className='bg-primary min-h-screen'>
            <div className='page-header-background' style={commonHeaderStyle}>
              <div className='page-header-content'>
                <h1 className='mb-6 text-center text-4xl font-bold'>
                  Roadmaps
                </h1>
              </div>
            </div>
            <DocumentationOverview />
          </div>
        )
      case 'legal-and-ethical-considerations':
        return (
          <div className='bg-primary min-h-screen'>
            <div className='page-header-background' style={commonHeaderStyle}>
              <div className='page-header-content'>
                <h1 className='mb-6 text-center text-4xl font-bold'>
                  Roadmaps
                </h1>
              </div>
            </div>
            <LegalEthicalConsiderations />
          </div>
        )
      case 'open-source-terminology':
        return (
          <div className='bg-primary min-h-screen'>
            <div className='page-header-background' style={commonHeaderStyle}>
              <div className='page-header-content'>
                <h1 className='mb-6 text-center text-4xl font-bold'>
                  Roadmaps
                </h1>
              </div>
            </div>
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


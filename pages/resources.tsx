import CodingChallenges from '../components/resources/CodingChallenges'
import CommunityAndNetworking from '../components/resources/CommunityAndNetworking'
import ContributingResources from '../components/resources/ContributingResources'
import GitAndGitHubDocumentation from '../components/resources/GitAndGitHubDocumentation'
import InteractiveLearningPlatforms from '../components/resources/InteractiveLearningPlatforms'
import JobSearchingPlatforms from '../components/resources/JobSearchingPlatforms'
import OnlineCodingBootcamps from '../components/resources/OnlineCodingBootcamps'
import OpenSourceDocumentation from '../components/resources/OpenSourceDocumentation'
import VideoTutorialResources from '../components/resources/VideoTutorialResources'

export default function Resources() {
  return (
    <div className='bg-primary min-h-screen'>
      <div
        className='w-full bg-cover bg-center'
        style={{ backgroundImage: "url('/resources.png')" }}
      >
        <div className='flex flex-col items-center justify-center p-24 text-center text-white'>
          <h1 className='mb-6 text-center text-4xl font-bold'>Resources</h1>
        </div>
      </div>
      <div className='bg-primary  flex flex-col items-center justify-center px-5 py-10'>
        <div className='flex max-w-7xl flex-wrap justify-center'>
          <ContributingResources />
          <VideoTutorialResources />
          <OpenSourceDocumentation />
          <GitAndGitHubDocumentation />
          <InteractiveLearningPlatforms />
          <CodingChallenges />
          <CommunityAndNetworking />
          <JobSearchingPlatforms />
          <OnlineCodingBootcamps />
        </div>
      </div>
    </div>
  )
}

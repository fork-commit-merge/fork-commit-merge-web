import { motion } from 'framer-motion'
import CodingChallenges from '../../components/resources/CodingChallenges'
import CommunityAndNetworking from '../../components/resources/CommunityAndNetworking'
import ContributingResources from '../../components/resources/ContributingResources'
import GitAndGitHubDocumentation from '../../components/resources/GitAndGitHubDocumentation'
import InteractiveLearningPlatforms from '../../components/resources/InteractiveLearningPlatforms'
import JobSearchingPlatforms from '../../components/resources/JobSearchingPlatforms'
import OnlineCodingBootcamps from '../../components/resources/OnlineCodingBootcamps'
import OpenSourceDocumentation from '../../components/resources/OpenSourceDocumentation'
import VideoTutorialResources from '../../components/resources/VideoTutorialResources'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Resources() {
  return (
    <div className='bg-primary min-h-screen'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center'
          >
            <h1 className='text-fc-primary text-4xl font-bold tracking-tight sm:text-5xl'>
              Learning <span className='text-modern-purple'>Resources</span>
            </h1>
            <p className='text-fc-primary/80 mx-auto mt-6 max-w-2xl text-lg'>
              Comprehensive collection of tools, platforms, and materials to
              help you master software development and open source contribution.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='mt-16'
          >
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <motion.div variants={item}>
                <ContributingResources />
              </motion.div>
              <motion.div variants={item}>
                <VideoTutorialResources />
              </motion.div>
              <motion.div variants={item}>
                <OpenSourceDocumentation />
              </motion.div>
              <motion.div variants={item}>
                <GitAndGitHubDocumentation />
              </motion.div>
              <motion.div variants={item}>
                <InteractiveLearningPlatforms />
              </motion.div>
              <motion.div variants={item}>
                <CodingChallenges />
              </motion.div>
              <motion.div variants={item}>
                <CommunityAndNetworking />
              </motion.div>
              <motion.div variants={item}>
                <JobSearchingPlatforms />
              </motion.div>
              <motion.div variants={item}>
                <OnlineCodingBootcamps />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

import { useRouter } from 'next/router'
import SelectionNotSupported from '../../components/gitComponents/SelectionNotSupported'
import GitCommandsSelection from '../../components/gitComponents/GitCommandsSelection'
import GitBranchingSelection from '../../components/gitComponents/GitBranchingSelection'
import GitConflicts from '../../components/gitComponents/GitConflicts'
import GitConfiguration from '../../components/gitComponents/GitConfiguration'
import GitWorkflow from '../../components/gitComponents/GitWorkflow'

const Git = () => {
  const router = useRouter()
  const { git } = router.query

  const renderContent = () => {
    switch (git) {
      case 'git-commands':
        return (
          <div className='bg-primary min-h-screen'>
            <div
              className='w-full bg-cover bg-center'
              style={{ backgroundImage: "url('/git.png')" }}
            >
              <div className='mb-10 flex flex-col items-center justify-center p-24 text-center text-white'>
                <h1 className='mb-6 text-center text-4xl font-bold'>Git</h1>
              </div>
            </div>
            <GitCommandsSelection />
          </div>
        )
      case 'git-branching':
        return (
          <div className='bg-primary min-h-screen'>
            <div
              className='w-full bg-cover bg-center'
              style={{ backgroundImage: "url('/git.png')" }}
            >
              <div className='mb-10 flex flex-col items-center justify-center p-24 text-center text-white'>
                <h1 className='mb-6 text-center text-4xl font-bold'>Git</h1>
              </div>
            </div>
            <GitBranchingSelection />
          </div>
        )
      case 'git-conflicts':
        return (
          <div className='bg-primary min-h-screen'>
            <div
              className='w-full bg-cover bg-center'
              style={{ backgroundImage: "url('/git.png')" }}
            >
              <div className='mb-10 flex flex-col items-center justify-center p-24 text-center text-white'>
                <h1 className='mb-6 text-center text-4xl font-bold'>Git</h1>
              </div>
            </div>
            <GitConflicts />
          </div>
        )
      case 'git-configuration':
        return (
          <div className='bg-primary min-h-screen'>
            <div
              className='w-full bg-cover bg-center'
              style={{ backgroundImage: "url('/git.png')" }}
            >
              <div className='mb-10 flex flex-col items-center justify-center p-24 text-center text-white'>
                <h1 className='mb-6 text-center text-4xl font-bold'>Git</h1>
              </div>
            </div>
            <GitConfiguration />
          </div>
        )
      case 'git-workflow':
        return (
          <div className='bg-primary min-h-screen'>
            <div
              className='w-full bg-cover bg-center'
              style={{ backgroundImage: "url('/git.png')" }}
            >
              <div className='mb-10 flex flex-col items-center justify-center p-24 text-center text-white'>
                <h1 className='mb-6 text-center text-4xl font-bold'>Git</h1>
              </div>
            </div>
            <GitWorkflow />
          </div>
        )
      default:
        return <SelectionNotSupported />
    }
  }

  return <div className='bg-primary pb-10'>{renderContent()}</div>
}

export default Git

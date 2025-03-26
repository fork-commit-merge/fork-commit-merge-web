import { useRouter } from 'next/router'
import SelectionNotSupported from '../../components/gitComponents/SelectionNotSupported'
import GitCommandsSelection from '../../components/gitComponents/GitCommandsSelection'
import GitBranchingSelection from '../../components/gitComponents/GitBranchingSelection'
import GitConflicts from '../../components/gitComponents/GitConflicts'
import GitConfiguration from '../../components/gitComponents/GitConfiguration'
import GitWorkflow from '../../components/gitComponents/GitWorkflow'
import ConventionalCommits from '../../components/gitComponents/ConventionalCommits'

const Git = () => {
  const router = useRouter()
  const { git } = router.query

  const renderContent = () => {

    const getComponent = () => {
      switch (git) {
        case 'git-commands':
          return <GitCommandsSelection />
        case 'git-branching':
          return <GitBranchingSelection />
        case 'git-conflicts':
          return <GitConflicts />
        case 'git-configuration':
          return <GitConfiguration />
        case 'git-workflow':
          return <GitWorkflow />
        case 'conventional-commits':
          return <ConventionalCommits />
        default:
          return <SelectionNotSupported />
      }
    }

    return getComponent()
  }

  return <>{renderContent()}</>
}

export default Git

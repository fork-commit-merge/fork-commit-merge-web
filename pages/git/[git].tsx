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
    const commonHeaderStyle = {
      backgroundImage: "url('/fcm-background-image.png')",
    }

    const getComponent = () => {
      switch (git) {
        case 'git-commands':
          return <GitCommandsSelection headerStyle={commonHeaderStyle} />
        case 'git-branching':
          return <GitBranchingSelection headerStyle={commonHeaderStyle} />
        case 'git-conflicts':
          return <GitConflicts headerStyle={commonHeaderStyle} />
        case 'git-configuration':
          return <GitConfiguration headerStyle={commonHeaderStyle} />
        case 'git-workflow':
          return <GitWorkflow headerStyle={commonHeaderStyle} />
        case 'conventional-commits':
          return <ConventionalCommits headerStyle={commonHeaderStyle} />
        default:
          return <SelectionNotSupported />
      }
    }

    return getComponent()
  }

  return <>{renderContent()}</>
}

export default Git


import { useRouter } from "next/router";
import SelectionNotSupported from "../../components/gitComponents/SelectionNotSupported";
import GitCommandsSelection from "../../components/gitComponents/GitCommandsSelection";
import GitBranchingSelection from "../../components/gitComponents/GitBranchingSelection";
import GitConflicts from "../../components/gitComponents/GitConflicts";
import GitConfiguration from "../../components/gitComponents/GitConfiguration";
import GitWorkflow from "../../components/gitComponents/GitWorkflow";

const Git = () => {
    const router = useRouter();
    const { git } = router.query;

    const renderContent = () => {
        switch (git) {
            case "gitcommands":
                return <GitCommandsSelection />;
            case "gitbranching":
                return <GitBranchingSelection />;
            case "gitconflicts":
                return <GitConflicts />;
            case "gitconfiguration":
                return <GitConfiguration />;
            case "gitworkflow":
                return <GitWorkflow />;
            default:
                return <SelectionNotSupported />;
        }
    };

    return (
        <>
            <div className="bg-slate-950 py-10 px-6">{renderContent()}</div>
        </>
    );
};

export default Git;

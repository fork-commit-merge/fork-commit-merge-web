import { useRouter } from "next/router";
import SelectionNotSupported from "../../components/gitComponents/SelectionNotSupported";
import GitCommandsSelection from "../../components/gitComponents/GitCommandsSelection";
import GitBranchingSelection from "../../components/gitComponents/GitBranchingSelection";

const Git = () => {
    const router = useRouter();
    const { git } = router.query;

    const renderContent = () => {
        switch (git) {
            case "gitcommands":
                return <GitCommandsSelection />;
            case "gitbranching":
                return <GitBranchingSelection />;
            default:
                return <SelectionNotSupported />;
        }
    };

    return (
        <>
            <div className="bg-slate-900 py-10 px-6">{renderContent()}</div>
        </>
    );
};

export default Git;

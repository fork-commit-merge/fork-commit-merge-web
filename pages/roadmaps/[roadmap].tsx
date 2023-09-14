import { useRouter } from "next/router";
import RoadmapNotSupported from "../../components/roadmapComponents/RoadmapNotSupported";
import OpenSourcePhilosophy from "../../components/roadmapComponents/OpenSourcePhilosophy";
import OpenSourceLicenses from "../../components/roadmapComponents/OpenSourceLicenses";

const RoadmapPage = () => {
    const router = useRouter();
    const { roadmap } = router.query;

    const renderContent = () => {
        switch (roadmap) {
            case "opensourcephilosophy":
                return <OpenSourcePhilosophy />;
            case "opensourcelicenses":
                return <OpenSourceLicenses />;
            default:
                return <RoadmapNotSupported />;
        }
    };

    return (
        <>
            <div className="bg-slate-900 py-10 px-6">{renderContent()}</div>
        </>
    );
};

export default RoadmapPage;

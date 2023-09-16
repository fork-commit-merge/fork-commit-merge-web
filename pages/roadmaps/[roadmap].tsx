import { useRouter } from "next/router";
import RoadmapNotSupported from "../../components/roadmapComponents/RoadmapNotSupported";
import OpenSourcePhilosophy from "../../components/roadmapComponents/OpenSourcePhilosophy";
import OpenSourceLicenses from "../../components/roadmapComponents/OpenSourceLicenses";
import HowToContribute from "../../components/roadmapComponents/HowToContribute";
import DocumentationOverview from "../../components/roadmapComponents/DocumentationOverview";
import ContributionManagement from "../../components/roadmapComponents/ContributionManagement";
import LegalEthicalConsiderations from "../../components/roadmapComponents/LegalEthicalConsiderations";

const RoadmapPage = () => {
    const router = useRouter();
    const { roadmap } = router.query;

    const renderContent = () => {
        switch (roadmap) {
            case "howtocontribute":
                return <HowToContribute />;
            case "contributionmanagement":
                return <ContributionManagement />;
            case "opensourcephilosophy":
                return <OpenSourcePhilosophy />;
            case "opensourcelicenses":
                return <OpenSourceLicenses />;
            case "overviewofdocumentation":
                return <DocumentationOverview />;
            case "legalandethicalconsiderations":
                return <LegalEthicalConsiderations />;
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

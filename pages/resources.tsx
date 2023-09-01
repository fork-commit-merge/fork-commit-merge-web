import CodingChallenges from "../components/CodingChallenges";
import CommunityAndNetworking from "../components/CommunityAndNetworking";
import ContributingResources from "../components/ContributingResources";
import GitAndGitHubDocumentation from "../components/GitAndGitHubDocumentation";
import InteractiveLearningPlatforms from "../components/InteractiveLearningPlatforms";
import JobSearchingPlatforms from "../components/JobSearchingPlatforms";
import OnlineCodingBootcamps from "../components/OnlineCodingBootcamps";
import OpenSourceDocumentation from "../components/OpenSourceDocumentation";
import VideoTutorialResources from "../components/VideoTutorialResources";

export default function Resources() {
    return (
        <div className="bg-slate-900 text-white py-10 px-5 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-16">Resources</h1>
            <div className="flex flex-wrap justify-center">
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
    );
}

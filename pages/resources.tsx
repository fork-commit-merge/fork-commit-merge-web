import CodingChallenges from "../components/resources/CodingChallenges";
import CommunityAndNetworking from "../components/resources/CommunityAndNetworking";
import ContributingResources from "../components/resources/ContributingResources";
import GitAndGitHubDocumentation from "../components/resources/GitAndGitHubDocumentation";
import InteractiveLearningPlatforms from "../components/resources/InteractiveLearningPlatforms";
import JobSearchingPlatforms from "../components/resources/JobSearchingPlatforms";
import OnlineCodingBootcamps from "../components/resources/OnlineCodingBootcamps";
import OpenSourceDocumentation from "../components/resources/OpenSourceDocumentation";
import VideoTutorialResources from "../components/resources/VideoTutorialResources";

export default function Resources() {
  return (
    <div className="bg-slate-950 text-white py-10 px-5 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-16">Resources</h1>
      <div className="flex flex-wrap justify-center max-w-7xl">
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

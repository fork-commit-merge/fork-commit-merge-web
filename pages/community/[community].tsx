import { useRouter } from "next/router";
import React from "react";
import Discussions from "../../components/communityComponents/Discussions";
import Events from "../../components/communityComponents/Events";
import Adventures from "../../components/communityComponents/Adventures";
import CommunityNotSupported from "../../components/communityComponents/CommunityNotSupported";

const CommunityPage = () => {
  const router = useRouter();
  const { community } = router.query;

  const renderContent = () => {
    switch (community) {
      case "discussions":
        return <Discussions />;
      case "events":
        return <Events />;
      case "adventures":
        return <Adventures />;
      default:
        return <CommunityNotSupported />;
    }
  };

  return (
    <>
      <div className="bg-slate-950 py-10 px-6">{renderContent()}</div>
    </>
  );
};

export default CommunityPage;

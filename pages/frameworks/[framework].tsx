import { useRouter } from "next/router";
import VueFramework from "../../components/frameworkComponents/VueFramework";
import AngularFramework from "../../components/frameworkComponents/AngularFramework";
import FrameworkNotSupported from "../../components/frameworkComponents/FrameworkNotSupported";
import SvelteFramework from "../../components/frameworkComponents/SvelteFramework";
import React from "react";
import ReactFramework from "../../components/frameworkComponents/ReactFramework";
import FlaskFramework from "../../components/frameworkComponents/FlaskFramework";
import NextJSFramework from "../../components/frameworkComponents/NextJSFramework";
import ViteFramework from "../../components/frameworkComponents/ViteFramework";

const FrameworkPage = () => {
    const router = useRouter();
    const { framework } = router.query;

    const renderContent = () => {
        switch (framework) {
            case "react":
                return <ReactFramework />;
            case "nextjs":
                return <NextJSFramework />;
            case "vite":
                return <ViteFramework />;
            case "vue":
                return <VueFramework />;
            case "angular":
                return <AngularFramework />;
            case "svelte":
                return <SvelteFramework />;
            case "flask":
                return <FlaskFramework />;
            default:
                return <FrameworkNotSupported />;
        }
    };

    return (
        <>
            <div className="bg-slate-900 py-10 px-6">{renderContent()}</div>
        </>
    );
};

export default FrameworkPage;

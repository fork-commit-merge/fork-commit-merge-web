import { useRouter } from "next/router";
import VueFramework from "../../components/frameworkComponents/VueFramework";
import AngularFramework from "../../components/frameworkComponents/AngularFramework";
import FrameworkNotSupported from "../../components/frameworkComponents/FrameworkNotSupported";
import SvelteFramework from "../../components/frameworkComponents/SvelteFramework";
import React from "react";
import FlaskFramework from "../../components/frameworkComponents/FlaskFramework";
import NextJSFramework from "../../components/frameworkComponents/NextJSFramework";
import ViteFramework from "../../components/frameworkComponents/ViteFramework";
import DjangoFramework from "../../components/frameworkComponents/DjangoFramework";
import RailsFramework from "../../components/frameworkComponents/RailsFramework";
import LaravelFramework from "../../components/frameworkComponents/LaravelFramework";
import FlutterFramework from "../../components/frameworkComponents/FlutterFramework";
import ExpressFramework from "../../components/frameworkComponents/ExpressFramework";
import ReactNativeFramework from "../../components/frameworkComponents/ReactNativeFramework";
import GatsbyFramework from "../../components/frameworkComponents/GatsbyFramework";
import ThreeJSLibrary from "../../components/frameworkComponents/ThreeJSLibrary";
import ReactLibrary from "../../components/frameworkComponents/ReactLibrary";
import EmberFramework from "../../components/frameworkComponents/EmberFramework";
import AstroFramework from "../../components/frameworkComponents/AstroFramework";

const FrameworkPage = () => {
    const router = useRouter();
    const { framework } = router.query;

    const renderContent = () => {
        switch (framework) {
            case "expressjs":
                return <ExpressFramework />;
            case "emberjs":
                return <EmberFramework />;
            case "react":
                return <ReactLibrary />;
            case "nextjs":
                return <NextJSFramework />;
            case "threejs":
                return <ThreeJSLibrary />;
            case "vite":
                return <ViteFramework />;
            case "vuejs":
                return <VueFramework />;
            case "svelte":
                return <SvelteFramework />;
            case "astro":
                return <AstroFramework />;
            case "angular":
                return <AngularFramework />;
            case "gatsby":
                return <GatsbyFramework />;
            case "flask":
                return <FlaskFramework />;
            case "django":
                return <DjangoFramework />;
            case "rails":
                return <RailsFramework />;
            case "laravel":
                return <LaravelFramework />;
            case "flutter":
                return <FlutterFramework />;
            case "react-native":
                return <ReactNativeFramework />;
            default:
                return <FrameworkNotSupported />;
        }
    };

    return (
        <>
            <div className="bg-slate-950 py-10 px-6">{renderContent()}</div>
        </>
    );
};

export default FrameworkPage;

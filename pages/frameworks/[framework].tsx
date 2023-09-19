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

const FrameworkPage = () => {
    const router = useRouter();
    const { framework } = router.query;

    const renderContent = () => {
        switch (framework) {
            case "express":
                return <ExpressFramework />;
            case "react":
                return <ReactLibrary />;
            case "next":
                return <NextJSFramework />;
            case "three":
                return <ThreeJSLibrary />;
            case "vite":
                return <ViteFramework />;
            case "vue":
                return <VueFramework />;
            case "angular":
                return <AngularFramework />;
            case "svelte":
                return <SvelteFramework />;
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
            case "reactnative":
                return <ReactNativeFramework />;
            case "ember":
                return <EmberFramework />;
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

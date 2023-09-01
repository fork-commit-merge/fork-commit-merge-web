import { useRouter } from "next/router";
import JavaScriptLanguage from "../../components/languageComponents/JavaScriptLanguage";
import TypeScriptLanguage from "../../components/languageComponents/TypeScriptLanguage";
import PythonLanguage from "../../components/languageComponents/PythonLanguage";
import JavaLanguage from "../../components/languageComponents/JavaLanguage";

const LanguagePage = () => {
    const router = useRouter();
    const { lang } = router.query;

    const renderContent = () => {
        switch (lang) {
            case "javascript":
                return <JavaScriptLanguage />;
            case "typescript":
                return <TypeScriptLanguage />;
            case "python":
                return <PythonLanguage />;
            case "java":
                return <JavaLanguage />;
            default:
                return <div>Language not supported.</div>;
        }
    };

    return (
        <>
            <div className="bg-slate-950 py-10">{renderContent()}</div>
        </>
    );
};

export default LanguagePage;

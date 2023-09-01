import { useRouter } from "next/router";
import JavaScriptLanguage from "../../components/languageComponents/JavaScriptLanguage";
import TypeScriptLanguage from "../../components/languageComponents/TypeScriptLanguage";
import PythonLanguage from "../../components/languageComponents/PythonLanguage";
import JavaLanguage from "../../components/languageComponents/JavaLanguage";
import LanguageNotSupported from "../../components/languageComponents/LanguageNotSupported";
import HTMLLanguage from "../../components/languageComponents/HTMLLanguage";
import CSSLanguage from "../../components/languageComponents/CSSLanguage";
import CoffeeScriptLanguage from "../../components/languageComponents/CoffeeScriptLanguage";

const LanguagePage = () => {
    const router = useRouter();
    const { lang } = router.query;

    const renderContent = () => {
        switch (lang) {
            case "html":
                return <HTMLLanguage />;
            case "css":
                return <CSSLanguage />;
            case "coffeescript":
                return <CoffeeScriptLanguage />;
            case "javascript":
                return <JavaScriptLanguage />;
            case "typescript":
                return <TypeScriptLanguage />;
            case "python":
                return <PythonLanguage />;
            case "java":
                return <JavaLanguage />;
            default:
                return <LanguageNotSupported />;
        }
    };

    return (
        <>
            <div className="bg-slate-950 py-10">{renderContent()}</div>
        </>
    );
};

export default LanguagePage;

import { useRouter } from "next/router";
import JavaScriptLanguage from "../../components/languageComponents/JavaScriptLanguage";
import TypeScriptLanguage from "../../components/languageComponents/TypeScriptLanguage";
import PythonLanguage from "../../components/languageComponents/PythonLanguage";
import JavaLanguage from "../../components/languageComponents/JavaLanguage";
import LanguageNotSupported from "../../components/languageComponents/LanguageNotSupported";
import HTMLLanguage from "../../components/languageComponents/HTMLLanguage";
import CSSLanguage from "../../components/languageComponents/CSSLanguage";
import CoffeeScriptLanguage from "../../components/languageComponents/CoffeeScriptLanguage";
import CLanguage from "../../components/languageComponents/CLanguage";
import CPPLanguage from "../../components/languageComponents/CPPLanguage";
import CSharpLanguage from "../../components/languageComponents/CSharpLanguage";
import KotlinLanguage from "../../components/languageComponents/KotlinLanguage";
import ScalaLanguage from "../../components/languageComponents/ScalaLanguage";
import RubyLanguage from "../../components/languageComponents/RubyLanguage";
import ElixirLanguage from "../../components/languageComponents/ElixirLanguage";
import PHPLanguage from "../../components/languageComponents/PHPLanguage";
import GoLanguage from "../../components/languageComponents/GoLanguage";
import DartLanguage from "../../components/languageComponents/DartLanguage";
import SwiftLanguage from "../../components/languageComponents/RustLanguage";
import JuliaLanguage from "../../components/languageComponents/JuliaLanguage";
import RustLanguage from "../../components/languageComponents/RustLanguage";

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
            case "c":
                return <CLanguage />;
            case "c++":
                return <CPPLanguage />;
            case "c#":
                return <CSharpLanguage />;
            case "java":
                return <JavaLanguage />;
            case "kotlin":
                return <KotlinLanguage />;
            case "scala":
                return <ScalaLanguage />;
            case "python":
                return <PythonLanguage />;
            case "ruby":
                return <RubyLanguage />;
            case "elixir":
                return <ElixirLanguage />;
            case "php":
                return <PHPLanguage />;
            case "go":
                return <GoLanguage />;
            case "dart":
                return <DartLanguage />;
            case "swift":
                return <SwiftLanguage />;
            case "julia":
                return <JuliaLanguage />;
            case "rust":
                return <RustLanguage />;
            default:
                return <LanguageNotSupported />;
        }
    };

    return (
        <>
            <div className="bg-slate-900 py-10">{renderContent()}</div>
        </>
    );
};

export default LanguagePage;

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
import SwiftLanguage from "../../components/languageComponents/SwiftLanguage";
import JuliaLanguage from "../../components/languageComponents/JuliaLanguage";
import RustLanguage from "../../components/languageComponents/RustLanguage";
import HaskellLanguage from "../../components/languageComponents/HaskellLanguage";
import LuaLanguage from "../../components/languageComponents/LuaLanguage";
import ClojureLanguage from "../../components/languageComponents/ClojureLanguage";
import LispLanguage from "../../components/languageComponents/LispLanguage";
import FortranLanguage from "../../components/languageComponents/FortranLanguage";
import ErlangLanguage from "../../components/languageComponents/ErlangLanguage";
import ZigLanguage from "../../components/languageComponents/ZigLanguage";
import RLanguage from "../../components/languageComponents/RLanguage";
import SQLLanguage from "../../components/languageComponents/SQLLanguage";
import BashLanguage from "../../components/languageComponents/BashLanguage";
import PerlLanguage from "../../components/languageComponents/PerlLanguage";
import FSharpLanguage from "../../components/languageComponents/FSharpLanguage";
import SolidityLanguage from "../../components/languageComponents/SolidityLanguage";
import VyperLanguage from "../../components/languageComponents/VyperLanguage";
import CrystalLanguage from "../../components/languageComponents/CrystalLanguage";
import GroovyLanguage from "../../components/languageComponents/GroovyLanguage";
import DLanguage from "../../components/languageComponents/DLanguage";
import ElmLanguage from "../../components/languageComponents/ElmLanguage";
import NimLanguage from "../../components/languageComponents/NimLangauge";
import OctaveLanguage from "../../components/languageComponents/OctaveLanguage";
import RescriptLanguage from "../../components/languageComponents/RescriptLanguage";
import ScratchLanguage from "../../components/languageComponents/ScratchLanguage";

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
            case "cpp":
                return <CPPLanguage />;
            case "csharp":
                return <CSharpLanguage />;
            case "fsharp":
                return <FSharpLanguage />;
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
            case "haskell":
                return <HaskellLanguage />;
            case "lua":
                return <LuaLanguage />;
            case "clojure":
                return <ClojureLanguage />;
            case "lisp":
                return <LispLanguage />;
            case "fortran":
                return <FortranLanguage />;
            case "erlang":
                return <ErlangLanguage />;
            case "zig":
                return <ZigLanguage />;
            case "r":
                return <RLanguage />;
            case "solidity":
                return <SolidityLanguage />;
            case "vyper":
                return <VyperLanguage />;
            case "sql":
                return <SQLLanguage />;
            case "bash":
                return <BashLanguage />;
            case "perl":
                return <PerlLanguage />;
            case "crystal":
                return <CrystalLanguage />;
            case "groovy":
                return <GroovyLanguage />;
            case "d":
                return <DLanguage />;
            case "elm":
                return <ElmLanguage />;
            case "nim":
                return <NimLanguage />;
            case "octave":
                return <OctaveLanguage />;
            case "rescript":
                return <RescriptLanguage />;
            case "scratch":
                return <ScratchLanguage />;
            default:
                return <LanguageNotSupported />;
        }
    };

    return (
        <>
            <div className="bg-slate-900 py-10 px-6">{renderContent()}</div>
        </>
    );
};

export default LanguagePage;

import LoginButton from "../components/buttons/LoginButton";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md">
                    <div className="py-20">
                        <LoginButton />
                    </div>
            </div>
        </div>
    );
}

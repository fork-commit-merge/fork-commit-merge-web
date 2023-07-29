import LoginButton from "../components/LoginButton";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-50">
                        Sign in with GitHub
                    </h2>
                </div>
                <div className="mt-8 space-y-6">
                    <div>
                        <LoginButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

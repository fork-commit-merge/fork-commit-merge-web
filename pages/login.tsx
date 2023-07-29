import LoginButton from "../components/LoginButton";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center bg-slate-950 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">

                    <div className="py-20">
                        <LoginButton />
                    </div>

            </div>
        </div>
    );
}

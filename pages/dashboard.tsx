import Dashboard from "../components/Dashboard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4 sm:px-6 lg:px-8">
      <div className="max-w-md">
        <div className="py-20">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

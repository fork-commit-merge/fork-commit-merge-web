import Dashboard from '../components/Dashboard'

export default function DashboardPage() {
  return (
    <div className='bg-primary min-h-screen'>
      <div
        className='w-full bg-cover bg-center'
        style={{ backgroundImage: "url('/dashboard.png')" }}
      >
        <div className='flex flex-col items-center justify-center p-24 text-center text-white'>
          <h1 className='mb-6 text-center text-4xl font-bold'>Dashboard</h1>
        </div>
      </div>
      <div className='bg-primary flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md'>
          <div className='py-20'>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  )
}

import Dashboard from '../components/Dashboard'

export default function DashboardPage() {
  return (
    <div className='bg-primary min-h-screen'>
      <div
        className='page-header-background'
        style={{ backgroundImage: "url('/fcm-background-image.png')" }}
      >
        <div className='page-header-content'>
          <h1 className='mb-6 text-center text-4xl font-bold'>Logging in...</h1>
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



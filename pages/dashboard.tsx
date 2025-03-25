import Dashboard from '../components/Dashboard'

export default function DashboardPage() {
  return (
    <div className='bg-primary min-h-screen'>
      <div
        className='page-header-background'
        style={{
          backgroundImage: "url('/fcm-background-image.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className='page-header-content'>
          <h1 className='mb-6 text-center text-4xl font-bold'>Dashboard</h1>
        </div>
      </div>
      <div className='bg-primary min-h-screen'>
        <Dashboard />
      </div>
    </div>
  )
}





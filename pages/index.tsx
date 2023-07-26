import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-slate-950">
      <div className="mb-10">
        <Image
          className="mx-auto"
          src="/dev-gallery.jpg"
          alt="Dev Gallery Logo"
          width={180}
          height={180}
          priority
        />
        <h1 className="mt-5 text-5xl font-bold text-slate-50">Welcome to Dev Gallery</h1>
        <p className="mt-2 text-lg font-light text-gray-100">Explore amazing projects developed by talented developers</p>
      </div>

      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="mb-2 text-2xl font-semibold">{project.name}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        ))}
      </div> */}
    </main>
  )
}


import { FC, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { contributorData } from '../../components/data/contributorData'

const ContributorCard: FC<{ contributor: typeof contributorData[number] }> = memo(({ contributor }) => (
  <div
    className="flex flex-col items-center justify-between rounded-lg bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg"
    style={{ minHeight: 260, width: '100%' }} // фиксируем размеры для снижения CLS
  >
    <Link
      href={contributor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
    >
      <Image
        src={contributor.avatar}
        alt={`${contributor.name}'s avatar`}
        width={120}
        height={120}
        className="rounded-full transition-transform duration-200 group-hover:scale-105"
        loading="lazy"
        quality={70}
        sizes="(max-width: 768px) 100px, (max-width: 1200px) 120px, 120px"
      />
    </Link>
    <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
      {contributor.name}
    </h3>
    <Link
      href={contributor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 text-modern-purple hover:text-modern-purple/80 text-sm"
    >
      View Profile
    </Link>
  </div>
))

const Contributors: FC = () => {
  return (
    <main className="bg-white">
      <div className="modern-container">
        <section className="py-16 sm:py-24">
          <header className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Amazing <span className="text-modern-purple">Contributors</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Meet the incredible developers who have contributed to our open source community.
            </p>
          </header>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contributorData.map((c, i) => (
              <ContributorCard
                key={c.id}
                contributor={c}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Contributors





// components/Contributors.tsx
// import { FC, useEffect, useState, Suspense } from 'react'
// import dynamic from 'next/dynamic'
// import Image from 'next/image'
// import Link from 'next/link'
//
// // 🔹 Динамический импорт карточки
// const ContributorCard = dynamic(
//   () => import('../../components/communityComponents/ContributorCard'),
//   {
//     loading: () => <p className="text-center mt-4">Loading card...</p>,
//     ssr: false,
//   }
// )
//
// const Contributors: FC = () => {
//   const [contributors, setContributors] = useState<any[]>([])
//
//   // 🔹 Lazy-load данных
//   useEffect(() => {
//     import('../../components/data/contributorData').then(mod => {
//       setContributors(mod.contributorData)
//     })
//   }, [])
//
//   const visibleContributors = contributors.slice(0, 12)
//
//   return (
//     <div className="bg-white">
//       <div className="modern-container">
//         <div className="py-16 sm:py-24">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//               Our Amazing <span className="text-modern-purple">Contributors</span>
//             </h1>
//             <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
//               Meet the incredible developers who have contributed to our open
//               source community
//             </p>
//           </div>
//
//           <Suspense fallback={<p className="text-center mt-8">Loading contributors...</p>}>
//             <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//               {visibleContributors.map(c => (
//                 <ContributorCard key={c.id} contributor={c} />
//               ))}
//             </div>
//           </Suspense>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default Contributors


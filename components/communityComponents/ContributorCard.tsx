// // components/ContributorCard.tsx
// import { FC, memo } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
//
// const ContributorCard: FC<{ contributor: any }> = memo(({ contributor }) => (
//   <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg">
//     <Link
//       href={contributor.url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="group relative"
//     >
//       <Image
//         src={contributor.avatar}
//         alt={`${contributor.name}'s avatar`}
//         width={120}
//         height={120}
//         className="rounded-full transition-transform duration-200 group-hover:scale-105"
//         loading="lazy"
//         placeholder="blur"
//         blurDataURL="/placeholder.png"
//       />
//     </Link>
//     <h3 className="mt-4 text-lg font-semibold text-gray-900">
//       {contributor.name}
//     </h3>
//     <Link
//       href={contributor.url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="mt-2 text-modern-purple hover:text-modern-purple/80"
//     >
//       View Profile
//     </Link>
//   </div>
// ))
//
// export default ContributorCard

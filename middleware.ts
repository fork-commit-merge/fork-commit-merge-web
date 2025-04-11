import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  // Make all routes public by default
  publicRoutes: ['/((?!community/contributors).*)'],
  // Only protect the contributors page
  ignoredRoutes: ['/((?!community/contributors).*)']
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}

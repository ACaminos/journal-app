import { Analytics } from '@vercel/analytics/react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

export const JournalApp = () => {
  return (
    <AppTheme>
        <AppRouter />
        <Analytics/>
    </AppTheme>
  )
}
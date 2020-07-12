import App from '@/components/App'
import Error from '@/components/Error'

export default [
    {
        path: '/',
        component: App,
    },
    {
        path: '/test',
        component: Error,
    },
    {
        path: '*',
        component: Error
    }
]


'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import Sidebar from '@/components/Sidbar'

const AppLayout = ({ children, header }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen">
          
     
            <Sidebar user={user}>


            <main>{children}</main>


            </Sidebar>

        </div>
    )
}

export default AppLayout

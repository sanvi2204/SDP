import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DollarSign, ShoppingBag, User, Users } from 'lucide-react'
const AdminDashboard = () => {
    return (
        <div className="flex flex-row p-4 gap-4">
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Event 
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">50+</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Active Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">27</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Event 
                    </CardTitle>
                    <ShoppingBag className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10,000</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Booked Events
                    </CardTitle>
                    <DollarSign className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">102</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                       Total Revenue
                    </CardTitle>
                    <DollarSign className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10,000,00</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                       Total Sponsors
                    </CardTitle>
                    <DollarSign className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                       New Entry 
                    </CardTitle>
                    <DollarSign className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">50</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                       Early Bird Booking 
                    </CardTitle>
                    <DollarSign className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">30</div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AdminDashboard
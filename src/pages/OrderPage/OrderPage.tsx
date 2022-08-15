import React from 'react'
import { MakeOrder } from '../../components/Orders/MakeOrder'
import { FindOrder } from '../../components/Orders/FindOrder'

export function OrderPage() {
    return (
        <>
            <MakeOrder />
            <FindOrder />
        </>
    )
}

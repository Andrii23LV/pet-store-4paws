import React from 'react'
import { MakeOrder } from '../../components/MakeOrder'
import { FindOrder } from '../../components/FindOrder'

export function OrderPage() {
    return (
        <>
            <MakeOrder />
            <FindOrder />
        </>
    )
}

'use server'

import { cookies } from 'next/headers'

export async function checkAuth() {
    const cookiesList = cookies()
    const hasCookie = cookiesList.has('MYCOOKIE')
    return hasCookie;
}

export async function create() {
    cookies().set({
        name: 'MYCOOKIE',
        value: 'lee',
        httpOnly: true,
        path: '/',
    })
}
'use server'

import { cookies } from 'next/headers'

export async function checkAuth() {
    const cookiesList = await cookies()
    const hasCookie = await cookiesList.has('MYCOOKIE')
    if (hasCookie) {
        return await cookiesList.get("MYCOOKIE")?.value;
    }
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
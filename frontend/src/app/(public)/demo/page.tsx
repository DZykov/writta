"use client"

import { create } from "../../../api/check"

export default function Demo() {

    async function Do() {
        await create();
    }

    return (
        <>
            <div>Demo</div>
            <button onClick={Do}>my button</button>
        </>
    );
}
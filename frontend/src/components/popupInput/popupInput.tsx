import React, { RefObject } from "react";
import { LegacyRef, useRef } from "react"

export default function PopupInput({ props }: { props: { ref: string, title: string, description: string, object: string, trigger: boolean, setTrigger: (bool: boolean) => void } }) {

    return (
        (props.trigger) ? (
            <>
                <div className="fixed top-60 z-50 mx-auto inset-x-0 max-w-[400px] m-10 rounded-lg bg-indigo-50 p-8 shadow-2xl">
                    <h2 className="text-lg font-bold">{props.title}</h2>

                    <p className="mt-2 mb-3 text-sm text-gray-500">
                        {props.description}
                    </p>

                    <label
                        htmlFor={props.object}
                        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <input
                            type="text"
                            id={props.object}
                            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                            placeholder={props.object}
                            onChange={() => {
                                props.ref = "1"
                            }}
                        />

                        <span
                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-indigo-50 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs"
                        >
                            {props.object}
                        </span>
                    </label>

                    <div className="mt-4 flex gap-2">
                        <button
                            type="button"
                            className="rounded bg-green-300 px-4 py-2 text-sm font-medium text-green-900"
                            onClick={() =>
                                props.setTrigger(false)
                            }
                        >
                            Insert
                        </button>

                        <button
                            type="button"
                            className="rounded bg-red-300 px-4 py-2 text-sm font-medium text-red-900"
                            onClick={() => props.setTrigger(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>

            </>
        ) : ""
    );
}
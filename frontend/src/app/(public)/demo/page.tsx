"use client"

import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import { createRef, useCallback, useState } from "react";


export default function Demo() {

    const [content, setContent] = useState("");
    const [fontColour, setFontColour] = useState("#000000");
    const [highlightColour, setHighLightColour] = useState("#ffffff");
    const [fontSizeEditor, setFontSize] = useState("Medium");
    const [fontStyleEditor, setFontStyle] = useState("Times New Roman");


    const contentArea = createRef<HTMLElement>();

    const fontSizeSymbol = "12px";
    const heightSymbol = "15px";


    const onContentChange = (evt: any) => {
        const sanitizeConf = {
            allowedTags: ["b", "i", "a", "p", "h1", "h2", "h3"],
            allowedAttributes: { a: ["href"] }
        };
        console.log()
        setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
    }

    function ControlPanel() {
        return (
            <>
                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div className="font-bold" style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"B"}</div>}
                    />

                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div className="italic" style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"I"}</div>}
                    />

                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div className="underline-offset-1" style={{ fontSize: fontSizeSymbol, height: heightSymbol, textDecoration: "underline" }}>{"U"}</div>}
                    />
                </span>

                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"•"}</div>}
                    />

                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div className="underline-offset-1" style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"½"}</div>}
                    />
                </span>

                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"|="}</div>}
                    />

                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"|=|"}</div>}
                    />

                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"=|"}</div>}
                    />
                </span>

                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"H1"}</div>}
                    />

                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"H2"}</div>}
                    />

                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"H3"}</div>}
                    />
                </span>

                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Image"}</div>}
                    />

                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Link"}</div>}
                    />

                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Code"}</div>}
                    />
                    <CmdButton cmd="copy" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Quote"}</div>}
                    />
                </span>

                <div className="-my-2"></div>

                <div>
                    <select
                        name="FontSize"
                        id="FontSize"
                        className="inline-flex p-1 overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2"
                        onChange={e => setFontSize(e.target.value)}
                    >
                        <option value="Medium">Medium</option>
                        <option value="Tiny">Tiny</option>
                        <option value="Small">Small</option>
                        <option value="Large">Large</option>
                        <option value="X-Large">X-Large</option>
                    </select>

                    <select
                        name="FontStyle"
                        id="FontStyle"
                        className="inline-flex p-1 overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2"
                        onChange={e => setFontStyle(e.target.value)}
                    >
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Calibri">Calibri</option>
                        <option value="Ubuntu Mono">Ubuntu Mono</option>
                        <option value="Openic">Openic</option>
                        <option value="Fonty Beauty">Fonty Beauty</option>
                    </select>

                </div>

                <div className="-my-2"></div>

                <div className="max-h-[25px] inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <input value={fontColour} id="colorPickerFont" type="color"
                        onChange={e => setFontColour(e.target.value)} />
                    &nbsp;Font Colour&nbsp;
                </div>

                <div className="max-h-[25px] inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <input value={highlightColour} id="colorPickerHighlight" type="color"
                        onChange={e => setHighLightColour(e.target.value)} />
                    &nbsp;Highlight Colour&nbsp;
                </div>
            </>
        );
    }

    function CmdButton(props: { cmd: string, ui: boolean, arg: string, icon: JSX.Element }) {
        return (
            <button
                className="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
                key={props.cmd}
                onMouseDown={(evt) => {
                    evt.preventDefault(); // Avoids loosing focus from the editable area
                    document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
                }}
            >
                {props.icon}
            </button>
        );
    }

    return (
        <>
            <ControlPanel />

            <ContentEditable
                onChange={onContentChange}
                onBlur={onContentChange}
                html={content}
                innerRef={contentArea}
                disabled={false}
                style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word", minHeight: "500px", maxWidth: "900px" }}
                className="block p-2.5 text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
        </>
    )
}
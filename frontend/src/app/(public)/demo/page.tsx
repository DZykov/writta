"use client"

import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import Script from 'next/script'
import { createRef, useCallback, useEffect, useRef, useState } from "react";


export default function Demo() {

    const [content, setContent] = useState("<br><br><br><br>"); // start with empty lines => don't lock in blocks
    const [fontColour, setFontColour] = useState("#000000");
    const [highlightColour, setHighLightColour] = useState("#ffffff");
    const [fontSize, setFontSize] = useState("Medium");
    const [fontName, setFontName] = useState("sans-serif");

    // const contentArea = createRef<HTMLElement>();
    const fontSizeSymbol = "12px";
    const heightSymbol = "15px";

    useEffect(() => {
        initEditor();
    }, []);


    const initEditor = () => {
        cmdFunc("fontSize", false, "3");
        cmdFunc("fontName", false, "sans-serif");
    }

    const onContentChange = (evt: any) => {
        const sanitizeConf = {
            allowedTags: ["b", "i", "a", "p", "h1", "h2", "h3", "strong",
                "div", "br", "u", "strike", "ul", "li", "ol", "font", "blockquote"],
            allowedAttributes: { a: ["href", "face", "size", "color", "style", "align"] }
        };
        console.log(content)
        // console.log(document.queryCommandSupported("fontName"))
        setContent(evt.currentTarget.innerHTML)
    }

    function ControlPanel() {
        return (
            <>
                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <CmdButton cmd="bold" ui={false} arg=""
                        icon={<div className="font-bold" style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"B"}</div>}
                    />

                    <CmdButton cmd="italic" ui={false} arg=""
                        icon={<div className="italic" style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"I"}</div>}
                    />

                    <CmdButton cmd="underline" ui={false} arg=""
                        icon={<div className="underline-offset-1" style={{ fontSize: fontSizeSymbol, height: heightSymbol, textDecoration: "underline" }}>{"U"}</div>}
                    />

                    <CmdButton cmd="strikeThrough" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol, }}>{<><s>S</s></>}</div>}
                    />
                </span>

                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <CmdButton cmd="insertUnorderedList" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"•"}</div>}
                    />

                    <CmdButton cmd="insertOrderedList" ui={false} arg=""
                        icon={<div className="underline-offset-1" style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"½"}</div>}
                    />
                </span>

                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <CmdButton cmd="justifyLeft" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"|="}</div>}
                    />

                    <CmdButton cmd="justifyCenter" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"|=|"}</div>}
                    />

                    <CmdButton cmd="justifyRight" ui={false} arg=""
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"=|"}</div>}
                    />
                </span>

                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <CmdButton cmd="formatBlock" ui={false} arg="<H1>"
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"H1"}</div>}
                    />

                    <CmdButton cmd="formatBlock" ui={false} arg="<H2>"
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"H2"}</div>}
                    />

                    <CmdButton cmd="formatBlock" ui={false} arg="<H3>"
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

                    <CmdButton cmd="insertHTML" ui={false} arg="<pre><code>"
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Code"}</div>}
                    />
                    <CmdButton cmd="formatBlock" ui={false} arg="<blockquote>"
                        icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Quote"}</div>}
                    />
                </span>

                <div className="-my-2"></div>

                <div>
                    <select
                        name="FontSize"
                        id="FontSize"
                        value={fontSize}
                        className="inline-flex p-1 overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2"
                        onChange={function (e) {
                            e.preventDefault();
                            cmdFunc("fontSize", false, e.target.value);
                            setFontSize(e.target.value);
                        }}
                    >
                        <option value="3">Medium</option>
                        <option value="1">Tiny</option>
                        <option value="2">Small</option>
                        <option value="4">Large</option>
                        <option value="5">X-Large</option>
                    </select>

                    <select
                        name="FontStyle"
                        id="FontStyle"
                        value={fontName}
                        className="inline-flex p-1 overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2"
                        onChange={function (e) {
                            e.preventDefault();
                            cmdFunc("fontName", false, e.target.value);
                            setFontName(e.target.value);
                        }}
                    >
                        <option value="sans-serif">sans-serif</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Calibri">Calibri</option>
                        <option value="Arial">Arial</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Cursive">Cursive</option>
                    </select>

                </div>

                <div className="-my-2"></div>

                <div className="max-h-[25px] inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <input value={fontColour} id="colorPickerFont" type="color"
                        onChange={function (e) {
                            e.preventDefault();
                            cmdFunc("foreColor", false, e.target.value);
                            setFontColour(e.target.value);
                        }} />
                    &nbsp;Font Colour&nbsp;
                </div>

                <div className="max-h-[25px] inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <input value={highlightColour} id="colorPickerHighlight" type="color"
                        onChange={function (e) {
                            e.preventDefault();
                            cmdFunc("hiliteColor", false, e.target.value);
                            setHighLightColour(e.target.value);
                        }} />
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
                    evt.preventDefault();
                    document.execCommand(props.cmd, props.ui, props.arg);
                }}
            >
                {props.icon}
            </button>
        );
    }

    function cmdFunc(cmd: string, ui: boolean, arg: string) {
        document.execCommand(cmd, ui, arg);
    }


    return (
        <>
            <ControlPanel />

            <ContentEditable
                onChange={onContentChange}
                onBlur={onContentChange}
                html={content}
                // innerRef={contentArea}
                disabled={false}
                style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word", minHeight: "500px", maxWidth: "900px" }}
                className="block py-3 px-5 text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
        </>
    )
}
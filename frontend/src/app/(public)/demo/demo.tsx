"use client"

import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import { useEffect, useRef, useState } from "react";
import PopupInputCmd from "@/components/popupInput/popupInputCmd";
import Prism from 'prismjs';
import './syntaxHighlight';
import { Tab, Tabs } from "@/components/tabs/tabs";
import "prismjs/themes/prism-okaidia.css";


export default function Demo() {

    const [content, setContent] = useState("<br><br><br><br>"); // start with empty lines => don't lock in blocks
    const [fontColour, setFontColour] = useState("#000000");
    const [highlightColour, setHighLightColour] = useState("#ffffff");
    const [fontSize, setFontSize] = useState("Medium");
    const [fontName, setFontName] = useState("sans-serif");

    const [contentRender, setContentRender] = useState(false);

    const [linkModal, setLinkModal] = useState(false);
    const [imageModal, setImageModal] = useState(false);
    const [codeModal, setCodeModal] = useState(false);

    const codeLang = useRef<string>("");

    const fontSizeSymbol = "12px";
    const heightSymbol = "15px";

    const focus = useRef<HTMLInputElement>(null);

    const sanitizeConf = {
        allowedTags: ["b", "i", "a", "p", "h1", "h2", "h3", "strong",
            "div", "br", "u", "strike", "ul", "li", "ol", "font", "blockquote", "pre",
            "code", "a", "img", "span"],
        selfClosing: ["br"],
        allowedSchemes: ['https', 'http'],
        allowedAttributes: {
            '*': ["href", "face", "size", "color", "style", "align", "bgcolor", "background-color",
                "dipsplay", "width", "height", "max-width"],
            img: ['src'],
        }
    };

    const highlight = async () => {
        Prism.hooks.add('before-sanity-check', function (env) {
            env.element.innerHTML = env.element.innerHTML.replace(/<br>/g, '\n');
        });
        await Prism.highlightAll();
    };

    useEffect(() => {
        initEditor();
    }, []);

    useEffect(() => {
        highlight();
    }, [contentRender]);

    const initEditor = () => {
        cmdFunc("fontSize", false, "3");
        cmdFunc("fontName", false, "sans-serif");
    }

    const onContentChange = (evt: any) => {
        // console.log(evt.currentTarget.innerHTML)
        // console.log(1)
        // console.log((sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf)))
        // setContent(evt.currentTarget.innerHTML)
        //console.log(contentRender)
        setContent(evt.currentTarget.innerHTML);
    }

    function ReviewPanel() {
        return (
            <div className="sticky top-5 my-5 p-1 z-50 bg-indigo-50 rounded-md border">
                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                    <button
                        className="inline-block p-2 text-gray-700 hover:bg-gray-300 focus:relative"
                        key={"render"}
                        onMouseDown={(evt) => {
                            evt.preventDefault();
                            setContentRender(!contentRender)
                        }}
                    >
                        <div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Render"}</div>
                    </button>
                </span>
            </div>
        );
    }

    function ControlPanel() {
        return (
            <>
                <div className="sticky my-5 top-5 p-1 z-50 bg-indigo-50 rounded-md border">
                    {// text styles
                    }
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

                    {// lists
                    }
                    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                        <CmdButton cmd="insertUnorderedList" ui={false} arg=""
                            icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"•"}</div>}
                        />

                        <CmdButton cmd="insertOrderedList" ui={false} arg=""
                            icon={<div className="underline-offset-1" style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"½"}</div>}
                        />
                    </span>

                    {// text position
                    }
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

                        <CmdButton cmd="insertHTML" ui={false} arg="&emsp;"
                            icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"TAB"}</div>}
                        />
                    </span>

                    {// text headings
                    }
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

                    {// functions
                    }
                    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                        <CmdButtonPopup cmd="insertImage" modalFunc={setImageModal}
                            icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Image"}</div>}
                        />

                        <CmdButtonPopup cmd="insertLink" modalFunc={setLinkModal}
                            icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Link"}</div>}
                        />

                        <CmdButton cmd="insertHTML" ui={false} arg={`<pre><code class='language-${codeLang.current}'>`}
                            icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Code"}</div>}
                        />

                        <CmdButtonPopup cmd="insertHTML" modalFunc={setCodeModal}
                            icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Code Lang"}</div>}
                        />

                        <CmdButton cmd="formatBlock" ui={false} arg="<blockquote>"
                            icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Quote"}</div>}
                        />
                    </span>

                    {// remove format
                    }
                    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                        <CmdButton cmd="removeFormat" ui={false} arg=""
                            icon={<div style={{ fontSize: fontSizeSymbol, height: heightSymbol }}>{"Remove Format"}</div>}
                        />
                    </span>

                    <div className="-my-2"></div>

                    {// font manipulation
                    }
                    <div>
                        <select
                            name="FontSize"
                            id="FontSize"
                            value={fontSize}
                            className="inline-flex cursor-pointer hover:bg-gray-300 p-1 overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2"
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
                            className="inline-flex cursor-pointer hover:bg-gray-300 p-1 overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2"
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

                    {// text colour manipulation
                    }
                    <div className="max-h-[25px] inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                        <input className="cursor-pointer" value={fontColour} id="colorPickerFont" type="color"
                            onChange={function (e) {
                                e.preventDefault();
                                cmdFunc("foreColor", false, e.target.value);
                                setFontColour(e.target.value);
                            }} />
                        &nbsp;Font Colour&nbsp;
                    </div>

                    <div className="max-h-[25px] inline-flex overflow-hidden rounded-md border bg-white shadow-sm my-2 mr-2">
                        <input className="cursor-pointer" value={highlightColour} id="colorPickerHighlight" type="color"
                            onChange={function (e) {
                                e.preventDefault();
                                cmdFunc("hiliteColor", false, e.target.value);
                                setHighLightColour(e.target.value);
                            }} />
                        &nbsp;Highlight Colour&nbsp;
                    </div>
                </div>
            </>
        );
    }

    function CmdButton(props: { cmd: string, ui: boolean, arg: string, icon: JSX.Element }) {
        return (
            <button
                className="inline-block p-2 text-gray-700 hover:bg-gray-300 focus:relative"
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

    function CmdButtonPopup(props: { cmd: string, icon: JSX.Element, modalFunc: (bool: boolean) => void }) {
        return (
            <button
                className="inline-block p-2 text-gray-700 hover:bg-gray-300 focus:relative"
                key={props.cmd}
                onMouseDown={() => {
                    props.modalFunc(true);
                }}
            >
                {props.icon}
            </button>
        );
    }

    function timeout(delay: number) {
        return new Promise(res => setTimeout(res, delay));
    }

    async function cmdFunc(cmd: string, ui: boolean, arg: string) {
        if (focus.current) {
            focus.current!.focus();
        }
        document.execCommand(cmd, ui, arg);
    }


    return (
        <>
            <Tabs>
                <Tab label="Editor">
                    <div className="editor">
                        <ControlPanel />

                        <PopupInputCmd props={{
                            title: "Insert Link",
                            description: "Put cursor where to insert link",
                            object: "link",
                            object1: "text",
                            trigger: linkModal,
                            cmd: "insertHTML",
                            ui: false,
                            startHTML: "<a href='",
                            endHTML: "</a>",
                            setTrigger: setLinkModal,
                            setCmd: cmdFunc,
                        }}
                        />

                        <PopupInputCmd props={{
                            title: "Insert Image Link",
                            description: "Put cursor where to insert image",
                            object: "image link",
                            object1: "width of image in %",
                            trigger: imageModal,
                            cmd: "insertHTML",
                            ui: false,
                            startHTML: " <img src='",
                            endHTML: "'>",
                            setTrigger: setImageModal,
                            setCmd: cmdFunc,
                        }}
                        />

                        <PopupInputCmd props={{
                            title: "Code language",
                            description: "Set code language",
                            object: "language",
                            object1: "theme",
                            trigger: codeModal,
                            cmd: "insertHTML",
                            ui: false,
                            startHTML: `<pre><code class='language-${codeLang}'>`,
                            endHTML: "",
                            setTrigger: setCodeModal,
                            setCmd: function (cmd: string, _ui: boolean, _arg: string) {
                                codeLang.current = cmd;
                            },
                        }}
                        />

                        {//<Identicon nickName={content}></Identicon>
                        }

                        <ContentEditable
                            key={1}
                            onChange={onContentChange}
                            onBlur={onContentChange}
                            html={content}
                            disabled={false}
                            style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word", minHeight: "500px", maxWidth: "900px" }}
                            className="block py-3 px-5 text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            innerRef={focus}
                        />
                    </div>
                </Tab>

                <Tab label="Preview">
                    <div className="editor">
                        <ReviewPanel />

                        <ContentEditable
                            onPointerDown={() => setContentRender(!contentRender)}
                            key={2}
                            onChange={() => 0}
                            html={content}
                            disabled={true}
                            style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word", minHeight: "500px", maxWidth: "900px" }}
                            className="border-t border-gray-400 pt-5 block px-5 text-gray-900"
                        />
                    </div>
                </Tab>

            </Tabs>
        </>
    )
}
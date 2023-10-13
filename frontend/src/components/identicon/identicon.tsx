import { createIdenticon } from '@/utils/identicon';
import React, { useRef, useEffect, useState } from 'react';

const Identicon = (str: { nickName: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    //const [content, setContent] = useState("");

    useEffect(() => {
        //setContent(str.nickName);
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (context) {
                createIdenticon(str.nickName, canvas);
            }
        }
    });

    return <canvas ref={canvasRef} id="identicon"></canvas>;
};

export default Identicon;
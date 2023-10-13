import React, { useRef, useEffect, useState } from 'react';
import { createIdenticon } from './identiconUtil';

const Identicon = (str: { nickName: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (context) {
                createIdenticon(str.nickName, canvas);
            }
        }
    });

    return <canvas ref={canvasRef} id="identicon" className="border-2 border-gray-200 m-1"></canvas>;
};

export default Identicon;
import React from 'react';

export const Moving = ({ width = 200, height = 200 }) => {
    return (
        <svg
            className="svg_preloader"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 248 248"
            style={{ enableBackground: 'new 0 0 248 248' }}
            xmlSpace="preserve"
            width={width}
            height={height}
        >
            <defs>
                <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgba(7,23,36,1)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'rgba(0,142,198,1)', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -20" />
            </filter>
            <circle stroke="url(#main-gradient)" fill="none" strokeWidth="3" cx="124" cy="124" r="120" />
            <g id="shape" filter="url(#goo)">
                <circle stroke="url(#main-gradient)" fill="none" strokeWidth="10" cx="124" cy="124" r="105" />
                <circle fill="url(#main-gradient)" cx="0" cy="0" r="22">
                    <animateMotion path="M124.1,124l14.9-14.9c22.3-22.3,2.5-60.3-28.4-54.4c-13.3,2.6-26.1,9-36.4,19.4 c-10.1,10.1-16.5,22.4-19.2,35.4c-6.5,31.3,31.7,51.9,54.3,29.3L124.1,124z" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle fill="url(#main-gradient)" cx="0" cy="0" r="22">
                    <animateMotion path="M124.1,124l-15.2,15.2c-22.2,22.2-2.5,60,28.3,54.2c13.5-2.5,26.4-9,36.8-19.4c8.9-8.9,14.9-19.5,18-30.7 c9.1-32.5-31.4-55.7-55.2-31.8L124.1,124z" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>
        </svg>
    );
};

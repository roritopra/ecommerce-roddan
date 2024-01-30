import { useState } from 'react';

export function AboutPage() {
    const [color1, setColor1] = useState('#323232');
    const [color2, setColor2] = useState('#323232');

    return (
        <>
            <div className="flex justify-between">
                {/* ... */}
                <div>
                    <div className="flex items-center gap-7">
                        <button onClick={() => {setColor1('#ff0000'); setColor2('#323232');}}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="19"
                                viewBox="0 0 26 19"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_191_136)">
                                    <path
                                        d="M-8.375 3.875H17.875V0.125H-8.375V3.875ZM-8.375 11.375H17.875V7.625H-8.375V11.375ZM-8.375 18.875H17.875V15.125H-8.375V18.875ZM21.625 18.875H25.375V15.125H21.625V18.875ZM21.625 0.125V3.875H25.375V0.125H21.625ZM21.625 11.375H25.375V7.625H21.625V11.375Z"
                                        fill={color1}
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_191_136">
                                        <rect width="26" height="19" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button onClick={() => {setColor2('#ff0000'); setColor1('#323232');}}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="19"
                                viewBox="0 0 25 19"
                                fill="none"
                            >
                                {/* ... SVG path here ... */}
                                <path fill={color2} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
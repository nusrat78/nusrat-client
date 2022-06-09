import React from 'react';
import { saveAs } from "file-saver"

const Banner = () => {
    const saveFile = () => {
        saveAs(
            "https://drive.google.com/file/d/1FGs4KSj9vhzNfkV_hG9Ec3sl7m0iHGow/view?usp=sharing", "NUSRAT JAHAN resume-update.pdf"
        );
    }
    return (
        <div class="hero min-h-screen bg-[url('/src/assets/Images/banner.png')]">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-black	">
                <div class="max-w-md">
                    <h1 class="mb-5 text-4xl font-bold">Hello! This is NUSRAT</h1>
                    <p class="mb-5 text-2xl font-bold">Junior Web Developer</p>
                    <button onClick={saveFile} class="btn info-content">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
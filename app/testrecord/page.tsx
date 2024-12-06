
'use client'
import { useEffect, useState } from "react";

let recognition: any = null;

if ("webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
}

export default function TestRecord() {
    const [text, setText] = useState("");

    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if(!recognition) return;

        recognition.onresult = (event: any) => {

            console.log("on result", event);
            recognition.stop();
            setIsListening(false);
        };
    }, []);

    const startListening = () => {
        setText("");
        recognition.start();
        setIsListening(true);
    };

    const stropListening = () => {
        recognition.stop();
        setIsListening(false);
    };

    return (
        <div>
            <p>{text}</p>
            {isListening ? (
                <button onClick={stropListening}>Stop</button>
            ) : (
                <button onClick={startListening}>Start</button>
            )}
        </div>
    );
}
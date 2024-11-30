import { useEffect, useState } from 'react';

export default function BlowDetector({ onBlow }) {
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        let audioContext;
        let analyser;
        let dataArray;

        const startListening = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const source = audioContext.createMediaStreamSource(stream);
                analyser = audioContext.createAnalyser();
                analyser.fftSize = 256;
                dataArray = new Uint8Array(analyser.frequencyBinCount);
                source.connect(analyser);

                const detectBlow = () => {
                    analyser.getByteFrequencyData(dataArray);
                    const volume = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

                    if (volume > 50) { // Adjust sensitivity
                        onBlow(); // Trigger the parent function
                        stopListening();
                    } else {
                        requestAnimationFrame(detectBlow);
                    }
                };

                detectBlow();
            } catch (error) {
                console.error('Error accessing microphone:', error);
            }
        };

        const stopListening = () => {
            if (audioContext) {
                audioContext.close();
            }
            setIsListening(false);
        };

        if (isListening) {
            startListening();
        }

        return () => stopListening();
    }, [isListening]);

    return (
        <div>
            {!isListening && (
                <button onClick={() => setIsListening(true)}>Start Blowing!</button>
            )}
            {isListening && <p>Blow to open the cake! 🎂</p>}
        </div>
    );
}

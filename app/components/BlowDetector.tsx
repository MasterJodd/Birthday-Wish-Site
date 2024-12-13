import { useEffect, useState } from "react";

interface BlowDetectorProps {
  onBlow: () => void; // The function to be called when blowing is detected
}

export default function BlowDetector({ onBlow }: BlowDetectorProps): JSX.Element {
  const [isListening, setIsListening] = useState<boolean>(false);

  useEffect(() => {
    let audioContext: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let dataArray: Uint8Array | null = null;
    let animationFrameId: number | null = null;

    const initializeAudio = async (): Promise<void> => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        source.connect(analyser);

        detectBlow(); // Start detecting
      } catch (error) {
        console.error("Error accessing microphone:", error);
        setIsListening(false); // Reset state in case of failure
      }
    };

    const detectBlow = (): void => {
      if (!analyser || !dataArray) return;

      analyser.getByteFrequencyData(dataArray);
      const volume = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

      if (volume > 130) {
        onBlow(); // Trigger the parent function
        stopListening();
      } else {
        animationFrameId = requestAnimationFrame(detectBlow);
      }
    };

    const stopListening = (): void => {
      if (audioContext) {
        audioContext.close();
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      setIsListening(false);
    };

    if (isListening) {
      initializeAudio();
    }

    return () => stopListening();
  }, [isListening, onBlow]);

  return (
    <div>
      {!isListening && (
        <button onClick={() => setIsListening(true)}>Start Blowing!</button>
      )}
      {isListening && <p>Blow to open the cake! 🎂</p>}
    </div>
  );
}

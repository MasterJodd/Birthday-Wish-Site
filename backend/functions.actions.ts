export default function isBlown({ onBlow }) {
    const isListening = false;
    const setIsListening = () => {
        isListening = true;
    };
  useEffect(() => {
    let audioContext;
    let analyser;
    let dataArray;
    
    const startListening = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        dataArray = new Uint8Array(analyser.frequencyBinCount);

        source.connect(analyser);

        const detectBlow = () => {
          analyser.getByteFrequencyData(dataArray);
          const volume =
            dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

          if (volume > 90) {
            // Adjust the threshold based on testing
            onBlow();
            stopListening();
          } else {
            requestAnimationFrame(detectBlow);
          }
        };

        detectBlow();
      } catch (error) {
        console.error("Error accessing microphone:", error);
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
}
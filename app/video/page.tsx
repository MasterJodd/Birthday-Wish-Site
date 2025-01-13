'use client';
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const VideoPlayer = () => {
const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter(); // Next.js router

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Event listener for when the video ends
      const handleVideoEnd = () => {
        router.push("/card"); // Redirect to another page
      };

      videoElement.addEventListener("ended", handleVideoEnd);

      // Cleanup listener on unmount
      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [router]);

  return (
    <section className="flex h-screen items-center bg-pink-200 px-10">
    <div>
      <video
        ref={videoRef}
        src="/ketki.mp4"
        autoPlay // Start playing the video automatically
      ></video>
    </div>
    </section>
  );
};

export default VideoPlayer;
import { useRef, useEffect, useCallback } from 'react';

const VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4';
const FADE_DURATION = 500;
const FADE_OUT_BEFORE_END = 0.55;

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animFrameRef = useRef<number>(0);
  const fadingOutRef = useRef(false);

  const cancelAnim = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = 0;
    }
  }, []);

  const fadeVideo = useCallback((from: number, to: number, duration: number, onDone?: () => void) => {
    cancelAnim();
    const video = videoRef.current;
    if (!video) return;
    const start = performance.now();
    const initial = from;
    const delta = to - from;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      video.style.opacity = String(initial + delta * progress);
      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        animFrameRef.current = 0;
        onDone?.();
      }
    };
    animFrameRef.current = requestAnimationFrame(step);
  }, [cancelAnim]);

  const fadeIn = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    fadingOutRef.current = false;
    const currentOpacity = parseFloat(video.style.opacity) || 0;
    fadeVideo(currentOpacity, 1, FADE_DURATION);
  }, [fadeVideo]);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || fadingOutRef.current) return;
    const remaining = video.duration - video.currentTime;
    if (remaining <= FADE_OUT_BEFORE_END && remaining > 0) {
      fadingOutRef.current = true;
      const currentOpacity = parseFloat(video.style.opacity) || 1;
      fadeVideo(currentOpacity, 0, FADE_DURATION);
    }
  }, [fadeVideo]);

  const handleEnded = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    cancelAnim();
    video.style.opacity = '0';
    setTimeout(() => {
      video.currentTime = 0;
      video.play().then(() => {
        fadeIn();
      }).catch(() => {});
    }, 100);
  }, [cancelAnim, fadeIn]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = '0';

    const handleCanPlay = () => {
      video.play().then(() => fadeIn()).catch(() => {});
    };

    video.addEventListener('canplay', handleCanPlay, { once: true });
    return () => {
      cancelAnim();
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [fadeIn, cancelAnim]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

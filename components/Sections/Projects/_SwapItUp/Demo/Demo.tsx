'use client';
import React, { useRef, useState } from 'react';
import { Icon } from '@/components/Icon';
import { MockupContainer, PlayButton, Video, ImageLayer, PauseOverlay } from './styles';

export default function SwapItUpVideo() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleToggle =()=> {
    const video = videoRef.current;
    if (!video) return;
    if (!hasStarted) setHasStarted(true);
    if (video.paused) void video.play();
    else video.pause();
  };

  return (
    <MockupContainer $isPlaying={hasStarted} onClick={handleToggle}>
      <ImageLayer $isPlaying={hasStarted} />

      {!hasStarted && (
        <PlayButton><Icon name="play" size={24} /></PlayButton>
      )}

      {hasStarted && isPaused && (
        <PauseOverlay><Icon name="pause" size={24} /></PauseOverlay>
      )}

      <Video
        ref={videoRef}
        src="/videos/swapitup.mp4"
        muted
        loop
        playsInline
        $isPlaying={hasStarted}
        onPlay={() => setIsPaused(false)}
        onPause={() => setIsPaused(true)}
      />
    </MockupContainer>
  );
}

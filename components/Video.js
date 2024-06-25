import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 16px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
`;

const Video = ({ video, autoplay }) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    setPlaying(autoplay);
  }, [autoplay]);

  const handlePlay = () => {
    if (!playing) {
      setPlaying(true);
    }
  };

  return (
    <VideoWrapper onClick={handlePlay}>
      <ReactPlayer
        ref={playerRef}
        url={video.video_path}
        playing={playing}
        loop
        controls
        muted
        width="100%"
        height="100%"
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              playsInline: true,
              webkitPlaysInline: true,
              preload: 'auto'
            }
          }
        }}
      />
      {!playing && (
        <VideoDetails>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </VideoDetails>
      )}
    </VideoWrapper>
  );
};

export default Video;

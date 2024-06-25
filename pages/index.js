import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { fetchVideos } from '../utils/fetchVideos';
import Video from '../components/Video';
import { useSwipeable } from 'react-swipeable';
import { FaHome, FaSearch, FaSave, FaBookmark, FaUser } from 'react-icons/fa'; // Import icons from react-icons library

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  padding: 8px;
  outline: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getVideos = async () => {
      const videoList = await fetchVideos();
      setVideos(videoList);
    };

    getVideos();
  }, []);

  const handleSwipe = (eventData) => {
    if (eventData.dir === 'Up' && currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (eventData.dir === 'Down' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwiped: handleSwipe,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Container {...handlers}>
      {videos.length > 0 && (
        <Video key={videos[currentIndex].id} video={videos[currentIndex]} autoplay />
      )}

      <BottomBar>
        <IconButton><FaHome /></IconButton>
        <IconButton><FaSearch /></IconButton>
        <IconButton><FaSave /></IconButton>
        <IconButton><FaBookmark /></IconButton>
        <IconButton><FaUser /></IconButton>
      </BottomBar>
    </Container>
  );
};

export default HomePage;

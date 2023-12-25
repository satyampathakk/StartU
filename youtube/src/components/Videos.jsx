import VideoCard from './VideoCard'

function Videos({ videos }) {
  
  if (videos && videos.length > 0) {
    return (
      <>
        {videos.map((video) => (
          <VideoCard video={video} />
        ))}
      </>
    );
  } else {
    return <VideoCard />;
  }
}


export default Videos
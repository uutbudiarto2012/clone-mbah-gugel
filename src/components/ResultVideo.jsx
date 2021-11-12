import ReactPlayer from 'react-player';

const ResultVideo = ({ results }) => {
  return (
    <div className="flex flex-wrap">
      {
        results?.map((video, index) => (
          <div className="p-2" key={index}>
            {
              video?.additional_links?.[0].href &&
              <ReactPlayer
                key={index}
                url={video.additional_links[0].href}
                controls
                width="100%"
                height="200px"
              />
            }
          </div>
        ))
      }
    </div>
  )
}

export default ResultVideo

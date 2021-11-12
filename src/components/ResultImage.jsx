const ResultImage = ({results}) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {
        results?.map(({image,link:{href,title}},index)=>(
        <a className="sm:p-3 p-5" href={href} key={index} target="_blank" rel="noopener noreferrer">
          <img src={image?.src} alt={title} loading="lazy" />
          <p className="w-36 break-words text-smm mt-2">
            {title}
          </p>
        </a>
        ))
      }
    </div>
  )
}

export default ResultImage

import Loader from "react-loader-spinner"
const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Loader
        type="ThreeDots"
        color= "#00BFFF"
        width={80}
        height={80}
      />
    </div>
  )
}

export default Loading

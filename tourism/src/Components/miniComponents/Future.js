import myVideo from "../Videos/flowerVideo.mp4";
const Future = () => {
  return (
    <div>
      <video loop autoPlay muted className="video">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="satisfy"
        style={{
          fontSize: "100px",
          display: "flex",
          justifyContent: "center",
          marginTop: "40vh",
        }}
      >
        Coming Soon...
      </div>
    </div>
  );
};
export default Future;

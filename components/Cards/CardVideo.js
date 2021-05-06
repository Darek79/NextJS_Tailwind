import IsInViewport from "./../Hooks/IsonScreen";

export const CardVideo = ({video_default}) => {
  const [isVisible, nodeRef] = IsInViewport({
    threshold: 0.5,
  });

  function play() {
    if (nodeRef.current !== null) {
      nodeRef.current.play();
    }
  }
  function pause() {
    if (nodeRef.current !== null) {
      nodeRef.current.pause();
    }
  }
  return (
    <>
      {isVisible ? play() : pause()}
      <video
        className={[video_default].join(" ")}
        autoPlay={true}
        loop={true}
        muted={true}
        ref={nodeRef}>
        <source src='/couple.mp4' type='video/mp4' />
      </video>
    </>
  );
};

import IsInViewport from "./../Hooks/IsonScreen";

export const CardVideo = () => {
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
        className='h-96 w-full'
        autoPlay={true}
        loop={true}
        muted={true}
        ref={nodeRef}>
        <source src='/ocean.mp4' type='video/mp4' />
      </video>
    </>
  );
};

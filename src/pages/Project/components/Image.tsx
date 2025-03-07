import React from "react";

const Image = ({
  imgHighRes,
  video,
  title,
}: {
  imgHighRes: any;
  video: any;
  title: string;
}) => {
  if (imgHighRes) {
    return <img src={imgHighRes} alt={title} className="w-full rounded-lg" />;
  }

  if (video) {
    return (
      <video width="100%" height="auto" className="w-full" muted autoPlay loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return <></>;
};

export default Image;

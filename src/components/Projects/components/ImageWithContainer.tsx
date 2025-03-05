const ImageWithContainer = ({ img, title }: { img: any, title: string }) => {
	return (
		<div className="w-full aspect-video">
        <img
          src={img}
          className="w-full h-full object-cover rounded-t-2xl"
          alt={title}
        />
      </div>
	)
}

export default ImageWithContainer;
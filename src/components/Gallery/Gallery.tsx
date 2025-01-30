import ImageCard from "./ImageCard";
import Image1 from '../../assets/images/gallery/1.png'


export const Gallery = () => {
  // Sample images
  const images = [
    {
      src: Image1,
      title: "Image 1",
      text: "Description 1",
    },
    {
      src: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      title: "Image 2",
      text: "Description 2",
    },
    {
      src: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      title: "Image 3",
      text: "Description 3",
    },
    {
      src: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      title: "Image 4",
      text: "Description 4",
    },
  ];

  return (
    <div className="mt-8 h-full w-full flex flex-col items-center bg-[#1E1E1E]">
      <div className="mt-4 mb-3">
        <p className="text-[#70C368] font-[Inconsolata] font-extrabold text-3xl">
          GALLERY
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, index) => (
          <ImageCard
            key={index}
            imageSrc={img.src}
            title={img.title}
            text={img.text}
          />
        ))}
      </div>
    </div>
  );
};

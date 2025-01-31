import { Carousel, Modal } from "react-bootstrap";

/*
TODO rewrite - this whole css cinema is stupid 
-> have to find out stupid bootstrap classes for <Modal /> and <Carousel />
*/
export const GalleryCardModal = ({ showModal, setShowModal, images }) => {
  const IndicatorIcon = ({ tag }) => {
		return (
			<span className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white border-2 border-white">
				{tag}
			</span>
		)
	}

	return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
      dialogClassName="modal-custom"
    >
      <Modal.Body className="flex flex-col h-full bg-[#1e1e1e] p-0">
        <Carousel
          className="flex-grow w-full h-full"
          indicators={false}
          prevIcon={<IndicatorIcon tag="&#10094;" />}
          nextIcon={<IndicatorIcon tag="&#10095;" />}
        >
          {images.map((image, index) => (
            <Carousel.Item key={index} className="h-full relative">
              <img
                className="d-block w-full h-full object-cover"
                src={image.src}
                alt={`Slide ${index}`}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      i === index ? "bg-white" : "bg-gray-500"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                ))}
              </div>
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white bg-black/50 px-4 pt-2 rounded">
                <p>{image.description}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

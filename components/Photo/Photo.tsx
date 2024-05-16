import Image from "next/image";
import React, { useEffect, useState } from "react";
import GetImageS from "../../services/GetImageS";

interface PhotoProps {
	searchString: string;
}

const Photo: React.FC<PhotoProps> = ({ searchString }) => {
	const [photo, setPhoto] = useState(null);

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const image = await GetImageS.getImageFromSearch(searchString);
				setPhoto(image); // Set the resolved image data
			} catch (error) {
				console.error("Error fetching image:", error);
			}
		};
		fetchImage(); // Call the function once when the component mounts
	}, []); // Empty dependency array ensures it runs only once

	// LogS.log("photo", photo);

	if (photo == null) {
		return <p>Loading image...</p>;
	} else {
		return (
			<Image
				// @ts-ignore
				loader={() => photo.urls.small}
				// @ts-ignore
				src={photo.urls.small}
				layout='fill'
				objectFit='contain'
				// @ts-ignore
				alt={photo.alt_description}
				priority
				sizes='(max-width: 408px) 50vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			/>
		);
	}
};

export default Photo;

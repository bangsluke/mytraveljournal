import axios from "axios";
import React, { useEffect, useState } from "react";
import LogS from "../../services/LogS";

interface PhotoProps {
	searchString: string;
}

const Photo: React.FC<PhotoProps> = ({ searchString }) => {
	const [photo, setPhoto] = useState(null);

	useEffect(() => {
		const searchPhotos = async () => {
			try {
				const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchString}&per_page=1`, {
					headers: {
						Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY}`,
					},
				});
				LogS.log("response.data.results[0]", response.data.results[0]);
				setPhoto(response.data.results[0]);
			} catch (error) {
				LogS.error("Error fetching photo:", error);
			}
		};

		searchPhotos(); // Call the function once when the component mounts
	}, []); // Empty dependency array ensures it runs only once

	return photo == null ? <p>Loading...</p> : <img src={photo.urls.small} alt={photo.alt_description} />;
};

export default Photo;

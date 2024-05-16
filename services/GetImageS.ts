import axios from "axios";
import LogS from "../services/LogS";

// Create a function to return an image from Unsplash based on a search string
async function getImageFromSearch(searchString: any) {
	// LogS.log("searchString", searchString);
	try {
		const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchString}&per_page=1`, {
			headers: {
				Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY}`,
			},
		});
		// LogS.log("response.data.results[0]", response.data.results[0]);
		return response.data.results[0];
	} catch (error) {
		LogS.error("Error fetching photo:", error);
		return null;
	}
}

async function getImageURLFromSearch(searchString: any) {
	// LogS.log("searchString", searchString);
	try {
		const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchString}&per_page=1`, {
			headers: {
				Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY}`,
			},
		});
		// LogS.log("response.data.results[0]", response.data.results[0]);
		return response.data.results[0].urls.regular;
	} catch (error) {
		LogS.error("Error fetching photo:", error);
		return null;
	}
}

async function getRandomImageURL() {
	// LogS.log("searchString", searchString);
	try {
		const response = await axios.get(`https://api.unsplash.com/search/photos?query=travel&per_page=1`, {
			headers: {
				Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY}`,
			},
		});
		// LogS.log(response.data);
		// LogS.log("response.data.results[0]", response.data.results[0]);
		return response.data.results[0].urls.regular;
	} catch (error) {
		LogS.error("Error fetching photo:", error);
		return null;
	}
}

const GetImageS = {
	getImageFromSearch,
	getImageURLFromSearch,
	getRandomImageURL,
};

export default GetImageS;

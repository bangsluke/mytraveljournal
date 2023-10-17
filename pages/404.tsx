import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../components/Layouts/Layout";
import Error404Image from "../public/images/404Image.webp";

// https://nextjs.org/docs/advanced-features/custom-error-page
export default function Custom404Page() {
	const router = useRouter();
	return (
		<Layout NavbarStyle='Opaque'>
			<Image src={Error404Image} alt='Travel Site Error Logo' width='200' height='200' layout='fixed' loading='lazy' />
			<h2 style={{ fontWeight: 600, fontSize: 18 }}>404 - Page Not Found</h2>
			<div
				style={{
					backgroundColor: "blue",
					color: "white",
					margin: "3rem auto 0rem auto",
					padding: "0.3rem 1.5rem",
					lineHeight: "0.5",
					borderRadius: "0.5rem",
					cursor: "pointer",
				}}
				onClick={() => router.back()} // Go back to the last visited page
			>
				<h4>Click here to go back</h4>
			</div>
		</Layout>
	);
}

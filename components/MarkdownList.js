import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const MarkdownList = ({ data }) => {
	const router = useRouter();

	console.log("data: ", data);

	return (
		<>
			{data.map((item, index, pagePath) => (
				<div
					key={index}
					style={{
						border: "1px solid #ccc",
						padding: "10px",
						borderRadius: "5px",
					}}
					className={styles.travelcard}
					onClick={() => router.push({ pathname: pagePath })}>
					<li key={index}>
						<strong>{item.filename}</strong>
						<div dangerouslySetInnerHTML={{ __html: item.content }} />
					</li>
				</div>
			))}
		</>
	);
};

export default MarkdownList;

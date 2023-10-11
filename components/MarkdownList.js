import styles from "../styles/Home.module.css";

const MarkdownList = ({ data }) => {
	return (
		<>
			{data.map((item, index) => (
				<div
					style={{
						border: "1px solid #ccc",
						padding: "10px",
						borderRadius: "5px",
					}}
					className={styles.travelcard}>
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

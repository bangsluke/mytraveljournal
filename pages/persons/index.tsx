import { useRouter } from "next/router";
import PersonsList from "../../components/Lists/PersonsList";

export default function PersonsPage(props: any) {
	const router = useRouter();

	return (
		<>
			{/* Note: Layout wraps component in a main tag */}
			<section>
				<h1>Person Page</h1>

				<PersonsList />

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
			</section>
		</>
	);
}

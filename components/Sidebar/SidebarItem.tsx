import { useRouter } from "next/router";
import { SidebarLink } from "./SidebarData";

// Define a count card component that holds a string title and a number.
export default function SidebarItem(props: SidebarLink) {
	const router = useRouter();
	const { id, displayName, pagePath } = props; // Extract the props

	return (
		<li id={id} onClick={() => router.push({ pathname: pagePath })}>
			{displayName}
		</li>
	);
}

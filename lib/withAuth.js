import { signIn, useSession } from "next-auth/react";
import Loading from "../components/Loading/Loading";

const withAuth = (WrappedComponent) => {
	return function AuthenticatedComponent(props) {
		const { data: session, status } = useSession();

		if (status === "loading") {
			// Render a loading spinner or a skeleton while loading
			return <Loading BackgroundStyle={"Opaque"} />;
		}

		if (!session) {
			// Redirect to sign-in page if not authenticated
			// You can also render a message or handle the redirection in another way
			signIn();
			return null; // or a component that says "redirecting..."
		}

		// Render the wrapped component with all its props if authenticated
		return <WrappedComponent {...props} session={session} />;
	};
};

export default withAuth;

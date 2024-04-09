import { useSession } from "next-auth/react";
import Loading from "../components/Loading/Loading";

const withAuth = (WrappedComponent) => {
	return function AuthenticatedComponent(props) {
		const { data: session, status } = useSession();
		const isDevelopmentMode = process.env.NEXT_PUBLIC_DEVELOPMENT_MODE === "true";

		// Render a loading spinner or a skeleton while loading
		if (status === "loading") {
			return <Loading BackgroundStyle={"Opaque"} />;
		}

		// Redirect to sign-in page if not authenticated and not in development mode
		if (!session && !isDevelopmentMode) {
			// You can also render a message or handle the redirection in another way
			signIn();
			return null; // or a component that says "redirecting..."
		}

		// Render the wrapped component with all its props if authenticated
		return <WrappedComponent {...props} session={session} />;
	};
};

export default withAuth;

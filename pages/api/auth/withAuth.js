import { signIn, useSession } from "next-auth/react";
import Loading from "../../../components/Loading/Loading";
import Constants from "../../../constants/constants";

const withAuth = (WrappedComponent) => {
	return function AuthenticatedComponent(props) {
		const { data: session, status } = useSession();

		// Render a loading spinner or a skeleton while loading
		if (status === "loading") {
			return <Loading BackgroundStyle={"Opaque"} />;
		}

		// Redirect to sign-in page if not authenticated and not in skipping authentication mode
		if (!session && !Constants.SkipAuth) {
			// You can also render a message or handle the redirection in another way
			signIn();
			return null; // or a component that says "redirecting..."
		}

		// Render the wrapped component with all its props if authenticated
		return <WrappedComponent {...props} session={session} />;
	};
};

export default withAuth;

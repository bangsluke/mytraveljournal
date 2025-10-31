import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthenticationLayout from "./AuthenticationLayout";
import styles from "./Authentication.module.css";
import { ButtonComponent } from "../../components/Button/Button";

export default function ApprovalConfirmation() {
	const router = useRouter();
	const [email, setEmail] = useState<string | null>(null);
	const [allowedEmails, setAllowedEmails] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function loadData() {
			const token = router.query.token as string;
			if (!token) {
				setError("Missing approval token");
				setLoading(false);
				return;
			}

			// Verify token on client side (basic check - server will verify too)
			try {
				const response = await fetch(`/api/access/verify-token?token=${encodeURIComponent(token)}`);
				if (!response.ok) {
					setError("Invalid or expired token");
					setLoading(false);
					return;
				}
				const data = await response.json();
				setEmail(data.email);
			} catch (e) {
				setError("Failed to verify token");
				setLoading(false);
				return;
			}

			// Fetch allowed emails
			try {
				const response = await fetch("/api/access/allowed-emails");
				if (!response.ok) throw new Error("Failed to fetch allowed emails");
				const data = await response.json();
				setAllowedEmails(data.allowed || []);
			} catch (e) {
				console.error("Failed to fetch allowed emails:", e);
				// Don't set error - just show empty list
			}

			setLoading(false);
		}

		if (router.query.token) {
			loadData();
		}
	}, [router.query.token]);

	const handleGoToSite = () => {
		window.location.href = "/";
	};

	if (loading) {
		return (
			<AuthenticationLayout>
				<h1 className={styles.title}>my travel journal.</h1>
				<p className={styles.text}>Loading...</p>
			</AuthenticationLayout>
		);
	}

	if (error) {
		return (
			<AuthenticationLayout>
				<h1 className={styles.title}>my travel journal.</h1>
				<h2 className={styles.title}>Error</h2>
				<p className={styles.text}>{error}</p>
			</AuthenticationLayout>
		);
	}

	return (
		<AuthenticationLayout>
			<h1 className={styles.title}>my travel journal.</h1>
			<h2 className={styles.title}>Access Approved</h2>
			{email && <p className={styles.text}>Approval processed for: <strong>{email}</strong></p>}
			<p className={styles.text}>The following email addresses have access to this site:</p>
			<ul style={{ listStyle: "disc", paddingLeft: "1.5rem", width: "100%", textAlign: "left", marginBottom: "1rem" }}>
				{allowedEmails.length > 0 ? (
					allowedEmails.map((emailAddr) => (
						<li key={emailAddr} className={styles.text} style={{ marginBottom: "0.5rem" }}>
							{emailAddr}
						</li>
					))
				) : (
					<li className={styles.text}>No emails found</li>
				)}
			</ul>
			<ButtonComponent Text={"Go to Website"} onClick={handleGoToSite} fullWidth={false} />
		</AuthenticationLayout>
	);
}


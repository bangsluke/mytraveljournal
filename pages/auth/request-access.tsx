import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthenticationLayout from "./AuthenticationLayout";
import styles from "./Authentication.module.css";
import { ButtonComponent } from "../../components/Button/Button";

export default function RequestAccess() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [sending, setSending] = useState(false);
	const [done, setDone] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const q = router.query.email as string;
		if (q && q.includes("@")) setEmail(q);
	}, [router.query.email]);

	async function submit() {
		if (!email || !email.includes("@")) {
			setError("Please enter a valid email address");
			return;
		}
		setSending(true);
		setError(null);
		try {
			const res = await fetch("/api/access/request", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email }) });
			if (!res.ok) {
				const data = await res.json().catch(() => ({ error: "Request failed" }));
				throw new Error(data.error || "Request failed");
			}
			setDone(true);
		} catch (e: any) {
			setError(e?.message || "Request failed");
		} finally {
			setSending(false);
		}
	}

	return (
		<AuthenticationLayout>
			<h1 className={styles.title}>my travel journal.</h1>
			<h2 className={styles.title}>Request Access</h2>
			{done ? (
				<>
					<p className={styles.text}>Request sent. You&apos;ll get an email if approved.</p>
				</>
			) : (
				<>
					<p className={styles.text}>
						You don&apos;t currently have access to this site. Enter your email below to request access. You&apos;ll receive an email if your request is approved.
					</p>
					<div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px" }}>
						<label htmlFor="email" className={styles.label}>Email</label>
						<input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={sending} className={styles.input} />
						{error && <p style={{ color: "red", fontSize: "14px", margin: 0 }}>{error}</p>}
						<ButtonComponent Text={sending ? "Sending..." : "Send Request"} onClick={submit} disabled={sending} fullWidth={false} />
					</div>
				</>
			)}
		</AuthenticationLayout>
	);
}



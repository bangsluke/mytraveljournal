export default function UnAuthorized() {
	return (
		<>
			<h1>Unauthorized</h1>
			<p>You do not have access to this site.</p>
			<p>To gain access, please contact Luke with your email address to be added.</p>
			<button onClick={() => (window.location.href = "/")}>Go Back to Home</button>
		</>
	);
}

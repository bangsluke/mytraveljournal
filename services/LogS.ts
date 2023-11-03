/* eslint-disable no-console */
const isTest = process.env.NODE_ENV === "test";
const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

const log = (msg: string, ...params: unknown[]): void => {
	if (!isDevelopment) return;
	console.log(msg, ...params);
};

const debug = (msg: string, ...params: unknown[]): void => {
	if (isTest || isProduction) return;
	console.debug(msg, ...params);
};

const error = (msg: string, ...params: unknown[]): void => {
	if (isTest) return;
	console.error(msg, ...params);
};

const warn = (msg: string, ...params: unknown[]): void => {
	if (isTest || isProduction) return;
	console.warn(msg, ...params);
};

const LogS = {
	log,
	debug,
	error,
	warn,
};

export default LogS;

const config = {
	port: import.meta.env.VITE_PORT as number,
	environment: import.meta.env.VITE_ENVIRONMENT as string,
	emailSender: import.meta.env.VITE_EMAIL_SENDER as string,
	emailPassword: import.meta.env.VITE_EMAIL_PASSWORD as string,
};

export default config;

export const config = {
  apiUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : process.env.API_URL,
};

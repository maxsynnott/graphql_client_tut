const getToken = () => localStorage.getItem("auth-token");
const setToken = (token) => localStorage.setItem("auth-token", token);
const deleteToken = () => localStorage.removeItem("auth-token");

module.exports = {
	getToken,
	setToken,
	deleteToken,
};

import api from './api';

export const TOKEN_KEY = "jwtToken";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const loginWithBack = async (username, password) => {
    const user = {
        username: username,
        password: password,
    }
    if(username || password) {
        const response = await api.post("/company-auth/login", JSON.stringify(user));
        login(response.data.accessToken);
    }
}
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    // Dando erro isso aqui
    // this.props.history.push("/login");
};
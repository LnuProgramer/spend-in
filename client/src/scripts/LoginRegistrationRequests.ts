import axios from "axios";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

const api = axios.create({
    baseURL: "http://localhost:8000",
})

async function getUserData() {
    try {
        return await api.get("/user", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

export async function checkAccessToken() {
    try {
        // Перший запит на отримання даних користувача
        const res = await getUserData();
        if (res.status === 200) {
            return res.data.userName;
        }
    } catch (err) {
        console.error("Error fetching user data:", err);
    }

    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
        console.error("No refresh token found.");
        return null;
    }

    try {
        const tokenRes = await api.post("token", {
            refreshToken: refreshToken
        });

        if (tokenRes.status === 200) {
            localStorage.setItem("accessToken", tokenRes.data.accessToken);
            const res = await getUserData();
            if (res.status === 200) {
                return res.data;
            } else {
                console.error("Failed to fetch user data after token refresh:", res.status);
            }
        } else {
            console.error("Failed to refresh token:", tokenRes.status);
        }
    } catch (err) {
        console.error("Error refreshing token:", err);
    }

    return null;
}


export async function LoginRequest(userName: string, password: string,) {
    try {
        const res = await api.post("/user/login", {userName: userName, password: password})
        if (res.status === 202) {
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
        }
        return res.status;
    } catch (error: any) {
        console.error(error)

        if (error.response && error.response.status) {
            return error.response.status; // Return the error status code
        } else {
            return 500; // Default to 500 if there's no response status
        }
    }
}

export async function RegistrationRequest(userName: string, email: string, password: string) {
    try {
        const res = await api.post("/user", {userName, email, password});

        if (res.status === 201) {
            await LoginRequest(userName, password);
        }

        return res.status;
    } catch (error: any) {
        console.error("Error during registration:", error);

        if (error.response && error.response.status) {
            return error.response.status; // Return the error status code
        } else {
            return 500; // Default to 500 if there's no response status
        }
    }
}

export async function LogoutRequest() {
    try {
        const userData = await getUserData();
        const userId = userData.data.id;
        const refreshToken = localStorage.getItem("refreshToken");

        const res = await api.delete("/logout", {
            data: {userId, refreshToken}
        });

        if (res.status === 204) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            window.location.reload();
        }
    } catch (err) {
        console.error("Error during logout:", err);
    }
}


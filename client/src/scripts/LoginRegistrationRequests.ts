import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
})

async function getUserData() {
    return await api.get("/user", {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
    }).then(res => res.data);
}

export async function checkAccessToken() {
    getUserData().then(async (res) => {
        if (res.status === 200) {
            return
        }
        try {
            await api.post("token", {refreshToken: localStorage.getItem("refreshToken")}).then((res) => {
                if (res.status === 200) {
                    localStorage.setItem("accessToken", res.data.accessToken);
                }
            });
        } catch (err) {
            console.error(err);
        }
    })
}

export async function LoginRequest(userName: string, password: string,) {
    try {
        await api.post("/user/login", {userName: userName, password: password}).then((res) => {
            if (res.status === 400 || res.status === 401) {
                return;
            }
            if (res.status !== 202) {
                return;
            }
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
        })
    } catch (error) {
        console.log(error)
    }
}

export async function RegistrationRequest(userName: string, email: string, password: string) {
    try {
        await api.post("/user", {userName: userName, email: email, password: password}).then(() => {
            LoginRequest(userName, password);
        })
    } catch (error) {
        console.log(error)
    }
}

export async function LogoutRequest() {
    getUserData().then(async (res) => {
        await api.post("/user/logout", {user: {id: res.id}});
    })

}
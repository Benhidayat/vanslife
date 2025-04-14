import { redirect } from "react-router-dom"

export const requireAuth = async (request) => {
    const isLoggedIn = localStorage.getItem('loggedin');
    const pathname = new URL(request.url).pathname;
    if (!isLoggedIn) {
        const response = redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);
        response.body = true;
        throw response;
    }
}

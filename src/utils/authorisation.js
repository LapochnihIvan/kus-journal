export const login_required = (to, from) =>{
    try {
        let user_data = JSON.parse(localStorage.getItem("user"));
        if (!user_data) {
            return {name: "login"};
        }
    }catch (e){
        return {name: "login"};
    }
}
export const login_required = () =>{
    try {
        let user_data = JSON.parse(localStorage.getItem("user"));
        if (!user_data) {
            return {name: "login"};
        }
    }catch (e){
        return {name: "login"};
    }
}

export const login_before = (to, from) =>{
    try {
        let user_data = JSON.parse(localStorage.getItem("user"));
        if (user_data) {
            return from;
        }
    }catch (e){
        return {name: "login"};
    }
}
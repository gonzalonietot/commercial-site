import mutations from "@/store/modules/login/mutations";
import getters from "@/store/modules/login/getters";
import actions from "@/store/modules/login/actions";
export default {
    state() {
        return {
            isAuthenticated: false
        };
    },
    mutations,
    actions,
    getters
};
import api from '@/services/api';
export default {
    //Credentials schema:
    // {
    //     email: String,
    //     username: String,
    //     password: String
    // }
    register(credentials) {
        return api().post('register', credentials);
    }
}
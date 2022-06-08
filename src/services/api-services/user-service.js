import { UserDataUrl, UserListUrl } from '../../constants/api-constants';
import axios from '../core-services/http-setvice'

export const getUserList = (page) => {
    return new Promise((resolve, reject) => {
        axios.get(UserListUrl+"?page="+page)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}

export const getUser = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(UserDataUrl+id)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}
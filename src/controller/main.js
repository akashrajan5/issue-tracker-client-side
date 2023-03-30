import axios from "axios";

const DOMAIN = 'http://localhost:5000';

export const loginController = async (userObject) => {
    try {
        let response = await axios.post(DOMAIN + '/auth/login', userObject);
        return response;
    } catch (err) {
        return err;
    }
};

export const createProjectController = async (projectObject) => {
    try {
        let response = await axios.post(DOMAIN + '/project/create-project', projectObject);
        return response;
    } catch (err) {
        return err;
    }
};

export const getAllProjectController = async () => {
    try {
        let response = await axios.get(DOMAIN + '/project/list-all-project');
        return response;
    } catch (err) {
        return err;
    }
};

export const createIssueController = async (issueObject) => {
    try {
        let response = await axios.post(DOMAIN + '/issue/create-issue', issueObject);
        return response;
    } catch (err) {
        return err;
    }
};

export const listIssueController = async (issueObj) => {
    try {
        let response = await axios.post(DOMAIN + '/issue/list-issue', issueObj);
        return response;
    } catch (err) {
        return err;
    }
};

export const closeIssueController = async (issueObj) => {
    try {
        let response = await axios.post(DOMAIN + '/issue/close-issue', issueObj);
        return response;
    } catch (err) {
        return err;
    }
};

export const closeProjectController = async (projectObj) => {
    try {
        let response = await axios.post(DOMAIN + '/project/close-project', projectObj);
        return response;
    } catch (err) {
        return err;
    }
};

export const searchProjectController = async (projectObj) => {
    try {
        let response = await axios.post(DOMAIN + '/project/search-project', projectObj);
        return response;
    } catch (err) {
        return err;
    }
};
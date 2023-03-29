import React from "react";
import { useNavigate } from "react-router-dom";

export const CreateProject = () => {
    const navigate = useNavigate();
    const createProject = () => navigate('/dashboard');

    return (
        <div className="container">
            <div className="row justify-content-between mt-4">
                <h3>Create project</h3>
            </div>
            <div className="mt-5">
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Project name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-floating mt-5">
                    <textarea className="form-control" placeholder="Leave a comment here" style={{ height: '100px' }}></textarea>
                    <label htmlFor="floatingTextarea2">Description</label>
                </div>
            </div>
            <div className="text-end mt-4">
                <button onClick={createProject} type="button" className="btn btn-primary">Create</button>
            </div>
        </div>
    );
};
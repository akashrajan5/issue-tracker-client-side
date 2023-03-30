import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProjectController } from "../../controller/main";

export const CreateProject = () => {
    const [project, setProject] = useState({ projectname: '', description: '' });

    useEffect(() => {

    }, []);

    useEffect(() => {
        if (project.projectname.length > 0) inputRef.current.classList.remove('is-invalid');
    }, [project]);

    const inputRef = useRef();
    const navigate = useNavigate();
    const handleChange = (e) => setProject(prev => { return { ...prev, [e.target.name]: e.target.value.trim() }; });

    const alphaNumeric = (e) => {
        var regEx = /^[a-zA-Z0-9\s]*$/;
        if (!regEx.test(e.key)) {
            e.preventDefault();
            alert('Alphabets and numbers are only allowed');
        }
    };

    const createProject = (e) => {
        e.preventDefault();
        if (project.projectname.length <= 3) return inputRef.current.classList.add('is-invalid');
        createProjectController(project).then(response => {
            if (response.status !== 201) throw response;
            alert('Project created. \nProject ID : ' + response.data.projectId);
            navigate('/dashboard');
        }).catch(err => {
            alert(err.response.data.error.message);
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-between mt-4">
                <h3>Create project</h3>
            </div>
            <form onSubmit={createProject}>
                <div className="mt-5">
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Project name</label>
                        <div className="col-sm-10">
                            <input ref={inputRef} onKeyDown={alphaNumeric} onChange={handleChange} name="projectname" type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-floating mt-5">
                        <textarea onChange={handleChange} name="description" className="form-control" placeholder="Leave a comment here" style={{ height: '100px' }}></textarea>
                        <label htmlFor="floatingTextarea2">Description</label>
                    </div>
                </div>
                <div className="text-end mt-4">
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    );
};
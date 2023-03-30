import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createIssueController } from "../../controller/main";

export const CreateIssue = () => {
    const navigate = useNavigate();
    const descriptionRef = useRef();
    const { id } = useParams();
    const [issue, setIssue] = useState({ trackertype: '', description: '' });
    const handleChange = (e) => setIssue(prev => { return { ...prev, [e.target.name]: e.target.value.trim() }; });

    const createIssues = (e) => {
        e.preventDefault();
        if (issue.description.length < 1) return descriptionRef.current.classList.add('is-invalid');
        if (issue.description.toLowerCase() === issue.trackertype) return alert("Issue type and description is same");
        createIssueController({ ...issue, projectid: id }).then(response => {
            if (response.status !== 201) throw response;
            alert('Issue created. \nIssue ID : ' + response.data.issueid);
            navigate(-1);
        }).catch(err => {
            console.log(err);
            alert(err);
        });
    };


    return (
        <div className="container">
            <div className="row justify-content-between mt-4">
                <h3>Create issue</h3>
            </div>
            <form onSubmit={createIssues}>
                <div className="mt-5">
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Issue name</label>
                        <div className="col-sm-10">
                            <select onChange={handleChange} name="trackertype" className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option>Tracker type</option>
                                <option value="bug">Bug</option>
                                <option value="feature">Feature</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-floating mt-5">
                        <textarea name="description" ref={descriptionRef} onChange={handleChange} className="form-control" style={{ height: '100px' }}></textarea>
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
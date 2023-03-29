import React from "react";
import { useNavigate } from "react-router-dom";

// project list page
export const Home = () => {
    const projects = [
        {
            "id": 1,
            "name": "Project 1",
            "description": "This application is used to report, track and close issues that occurred in any projects.",
            "issues": 3,
            "status": "open"
        },
        {
            "id": 2,
            "name": "Project 2",
            "description": "This application is used to report, track and close issues that occurred in any projects.",
            "issues": 0,
            "status": "open"
        }

    ];

    const navigate = useNavigate();

    const createProject = () => navigate('/create');

    const viewProject = (id) => navigate(`/project/${id}`);

    return (
        <div className="container">
            <div className="row justify-content-between mt-4">
                <div className="col-4">
                    <button className="btn btn-md btn-primary" onClick={createProject}>Create</button>
                </div>
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Search projects" />
                </div>
            </div>
            <div className="mt-5">
                {
                    projects.map(data => {
                        return (
                            <div key={data.id} onClick={() => viewProject(data.id)} className="card mb-3" style={{ cursor: 'pointer' }}>
                                <div className="card-header d-flex justify-content-between">
                                    <div>{data.name}</div>
                                    <div className="d-flex flex-row">
                                        <div className="me-3">Open issues : {data.issues}</div>
                                        <div>Status : {data.status}</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>{data.description}</p>
                                    </blockquote>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};
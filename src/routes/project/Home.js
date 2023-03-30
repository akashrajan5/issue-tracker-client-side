import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProjectController, searchProjectController } from "../../controller/main";

// project list page
export const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getAllProjectController().then(data => setProjects(data.data.data)).catch(err => console.log(err));
    }, []);

    const navigate = useNavigate();

    const createProject = () => navigate('/create');

    const viewProject = (id, data) => navigate(`/project/${id}`, { state: data });

    // searches product directly from server
    const searchProject = (e) => {
        searchProjectController({ searchString: e.target.value }).then(data => setProjects(data.data.data));
    };

    return (
        <div className="container mb-5">
            <div className="row justify-content-between mt-4">
                <div className="col-4">
                    <button className="btn btn-md btn-primary" onClick={createProject}>Create</button>
                </div>
                <div className="col-4">
                    <input onChange={searchProject} type="text" className="form-control" placeholder="Search projects" />
                </div>
            </div>
            <div className="mt-5">
                {
                    projects.map(data => {
                        return (
                            <div key={data.id} onClick={() => viewProject(data.id, data)} className="card mb-3" style={{ cursor: 'pointer' }}>
                                <div className="card-header d-flex justify-content-between">
                                    <div>{data.project_name}</div>
                                    <div className="d-flex flex-row">
                                        <div className="me-3">Open issues : {data.issue_count}</div>
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
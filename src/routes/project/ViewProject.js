import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ViewProject = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const createIssue = () => navigate(`/project/${id}/create-issue`);
    const viewIssue = (issueId) => navigate(`/project/${id}/issue/${issueId}`);

    return (
        <div className="container">
            <div className="d-flex justify-content-between mt-4">
                <div>
                    <h3>Project name</h3>
                </div>
                <div>
                    <button onClick={() => { }} type="button" className="btn btn-sm btn-danger me-3">Close project</button>
                    <button onClick={createIssue} type="button" className="btn btn-sm btn-primary">Create issue</button>
                </div>
            </div>
            <div className="mt-4">
                <p>This application is used to report, track and close issues that occurred in any projects.</p>
            </div>
            <div className="mt-5">
                <div className="row">
                    <div className="col-6">
                        <h4>Issue</h4>
                    </div>
                    <div className="col-2">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option>Tracker type</option>
                            <option value="1">Bug</option>
                            <option value="2">Feature</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option>Status type</option>
                            <option value="1">Open</option>
                            <option value="2">Closed</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control form-control-sm" placeholder="Search issue" />
                    </div>
                </div>
                <div className="mt-3">
                    <ul className="p-0">

                        <li className="d-flex justify-content-between border border-1 rounded-2 p-2 mb-2" style={{ cursor: 'pointer' }}>
                            <div>#23</div>
                            <div>New</div>
                            <div>Bug</div>
                            <div>Description</div>
                            <div>date and time</div>
                            <div>Description</div>
                            <div><button className="btn btn-sm btn-danger">Close</button></div>
                        </li>

                        <li onClick={() => viewIssue(23)} className="d-flex justify-content-between border border-1 rounded-2 p-2 mb-2" style={{ cursor: 'pointer' }}>
                            <div>#23</div>
                            <div>New</div>
                            <div>Bug</div>
                            <div>Description</div>
                            <div>date and time</div>
                            <div>Description</div>
                            <div><button className="btn btn-sm btn-danger">Close</button></div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
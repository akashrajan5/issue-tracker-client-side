import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { closeIssueController, closeProjectController, listIssueController } from "../../controller/main";

export const ViewProject = () => {
    const [issue, setIssue] = useState([]);
    const closeRef = useRef();
    const projectRef = useRef();
    const issueRef = useRef();
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            let res = await listIssueController({ projectid: id });// .then(data => setIssue(data.data.data));
            setIssue(res.data.data);
        })();
    }, [id]);

    const { state } = useLocation();
    const navigate = useNavigate();
    const createIssue = () => navigate(`/project/${id}/create-issue`);
    const viewIssue = (issueId, data) => navigate(`/project/${id}/issue/${issueId}`, { state: data });

    const closeIssue = (e, issueId, projectId) => {
        e.stopPropagation();
        closeIssueController({ issueId: issueId, projectid: projectId }).then(data => {
            console.log(data);
            e.target.setAttribute('disabled', true);
            e.target.value = "closed";
            alert('Issue closed');
        }).catch(err => console.log(err));
    };

    const closeProject = (projectid) => {
        closeProjectController(projectid).then(data => {
            if (data.status !== 200) throw data;
            projectRef.current.setAttribute('disabled', true);
            issueRef.current.setAttribute('disabled', true);
            alert('Project closed');
        }).catch(err => {
            console.log(err.response);
            alert(err.response.data.error.message);
        });
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between mt-4">
                <div>
                    <h3>{state.project_name}</h3>
                </div>
                <div>
                    <button ref={projectRef} onClick={() => closeProject({ projectid: id })} type="button" className="btn btn-sm btn-danger me-3" disabled={state.status === 'closed' ? true : false}>Close project</button>
                    <button ref={issueRef} onClick={createIssue} type="button" className="btn btn-sm btn-primary" disabled={state.status === 'closed' ? true : false}>Create issue</button>
                </div>
            </div>
            <div className="mt-4">
                <p>{state.description}</p>
            </div>
            <div className="mt-5">
                <div className="row">
                    <div className="col-12">
                        <h4>Issue</h4>
                    </div>
                    {/* <div className="col-2">
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
                    </div> */}
                </div>
                <div className="mt-3">
                    <ul className="p-0">

                        {issue.length === 0 ? <span>No issues created</span> : issue.map(data => {
                            return (
                                <li key={data.id} onClick={() => viewIssue(data.id, data)} className="d-flex justify-content-between border border-1 rounded-2 p-2 mb-2" style={{ cursor: 'pointer' }}>
                                    <div>{data.id}</div>
                                    <div>{data.tracker}</div>
                                    <div>{data.status}</div>
                                    <div>{data.description}</div>
                                    <div>{data.created_at}</div>
                                    <div><button onClick={e => closeIssue(e, data.id, id)} className="btn btn-sm btn-danger" disabled={data.status === 'closed' ? true : false}>{data.status === 'closed' ? 'closed' : 'close'}</button></div>
                                </li>
                            );
                        })}

                    </ul>
                </div>

            </div>
        </div >
    );
};
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { closeIssueController } from "../../controller/main";

export const ViewIssue = () => {
    const { state } = useLocation();
    const closeRef = useRef();
    const disableForm = useRef();

    const closeIssue = (issueId, projectId) => {
        closeIssueController({ issueId: issueId, projectid: projectId }).then(data => {
            if (data.status !== 200) throw data;
            closeRef.current.setAttribute('disabled', true);
            disableForm.current.setAttribute('disabled', true);
            alert('Issue closed');
            console.log(data);
        }).catch(err => {
            console.log(err.response);
            alert(err.response.data.error.message);
        });
    };


    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-between mt-4">
                <div>
                    <h3>Issue name</h3>
                </div>
                <div>
                    <button ref={closeRef} onClick={() => closeIssue(state.id, state.project_id)} type="button" className="btn btn-sm btn-danger" disabled={state.status === 'closed' ? true : false}>Close issue</button>
                </div>
            </div>
            <div className="mt-5">
                <p>Tracker : {state.tracker}</p>
            </div>
            <div className="form-floating mt-3">
                <textarea ref={disableForm} className="form-control" placeholder="Leave a comment here" style={{ height: '100px' }} defaultValue={state.description} disabled={state.status === 'closed' ? true : false}></textarea>
                <label htmlFor="floatingTextarea2">Description</label>
            </div>
        </div>
    );
};
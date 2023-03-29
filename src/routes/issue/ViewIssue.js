import React from "react";

export const ViewIssue = () => {
    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-between mt-4">
                <div>
                    <h3>Issue name</h3>
                </div>
                <div>
                    <button onClick={() => { }} type="button" className="btn btn-sm btn-danger">Close issue</button>
                </div>
            </div>
            <div className="mt-5">
                <p>Tracker : Bug</p>
            </div>
            <div className="form-floating mt-3">
                <textarea className="form-control" placeholder="Leave a comment here" style={{ height: '100px' }}></textarea>
                <label htmlFor="floatingTextarea2">Description</label>
            </div>
            <div className="text-end mt-3">
                <button onClick={() => { }} type="button" className="btn btn-sm btn-primary">Update issue</button>
            </div>
        </div>
    );
};
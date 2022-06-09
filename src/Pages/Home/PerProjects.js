import React from 'react';
import { useNavigate } from 'react-router-dom';

const PerProjects = ({ project }) => {
    const { _id, name, img } = project;
    const navigate = useNavigate();
    const navigateDetail = id => {
        navigate(`/projects/${id}`);
    }

    return (
        <div >
            <div className="card  lg:max-w-lg mx-auto bg-black	 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">{name}</h2>
                    <div className="card-actions">
                        <button onClick={() => navigateDetail(_id)} className="btn btn-slate-500	">See Details</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PerProjects;
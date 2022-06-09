import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setproject] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/projects/${projectId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setproject(data));
    }, [])


    return (
        <div className="card  lg:max-w-lg mx-auto	 shadow-xl">
            <img src={project.img} alt=""></img>
            <h2 className='text-center font-bold'>{project.name}</h2>

        </div>
    );
};

export default ProjectDetails;
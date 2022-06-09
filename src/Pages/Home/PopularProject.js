import React, { useEffect, useState } from 'react';
import PerProjects from './PerProjects';

const PopularProject = () => {
    const [projects, setprojects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setprojects(data));
    }, [])
    return (
        <div className='pt-12 font-bold bg-black	'>
            <h1 className='text-xl text-white text-center'>BEST PROJECTS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    projects.map(project => <PerProjects
                        key={project._id}
                        project={project}
                    ></PerProjects>)
                }
            </div>
        </div>
    );
};

export default PopularProject;
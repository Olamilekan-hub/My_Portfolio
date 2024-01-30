import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
    return ( 
        <div id="projects" className="flex flex-col gap-20 mt-16 justify-start items-center">
            <h2 className="text-center text-white text-4xl font-bold">My Projects</h2>
            <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
                <ProjectCard 
                imgUrl={"/realEstate.png"}
                title={"Real Estate Web App"}
                description={"a comprehensive real estate platform leveraging the power of MERN stack (MongoDB, Express.js, React, Node.js) alongside Firebase Authentication, Tailwind CSS for sleek styling, and JWT for secure authentication and authorization"}
                liveLink={"https://real-estate-h25m.onrender.com/"}
                 />

                <ProjectCard
                imgUrl={"/Genius.png"}
                title={"Genius AI Platform"}
                description={"AI platform using next.js and clerk for authentication and authorization, Have three different AI models from Conversation , Code Generation and Image Generation "} 
                liveLink={"https://ai-saas-three-zeta.vercel.app/"}
                />

                <ProjectCard
                imgUrl={"/Imdb.png"}
                title={"ImDb Clone"}
                description={"An ImDb clone app using next.js and tailwind css for styling which uses Imdb api to fetch data"} 
                liveLink={"https://imdb-next-jiio.vercel.app/"}
                />

                <ProjectCard
                imgUrl={"/Blog.png"}
                title={"Mern Blog"}
                description={"Blog web application based on MERN (MongoDB,Express.js,React.js,Node.js) stack with Authentication jwt-cookies and redux for state management "} 
                liveLink={""}
                />

                <ProjectCard
                imgUrl={"/Gleam.png"}
                title={"Gleam Google Clone"}
                description={"A Google clone which based on next.js which uses google developers tool search engine to fetch data and return text and Images based on user search "} 
                liveLink={"https://gleam-google-clone.vercel.app/"}

                />
            </div>
        </div>
     );
}
 
export default ProjectSection;
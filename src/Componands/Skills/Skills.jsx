 
const Skills = () => {
    return (
        <div className="mt-10 max-w-4xl mx-auto" id='Skills'>
            <p className="text-center text-3xl font-bold">My  <span className="text-orange-600">Skills</span></p>
             <div className="mt-10 flex flex-col lg:flex-row  gap-8 ">
                <div className="flex-1 space-y-3 mx-2 lg:mx-0  border-[5px] border-red-500 p-3 rounded-md">
                    <div>
                        <p className="font-bold">HTML</p>
                        <input type="range" min={0} max="100" value="90" className="range range-error " />
                    </div>
                    <div>
                        <p className="font-bold">CSS</p>
                        <input type="range" min={0} max="100" value="80" className="range range-error " />
                    </div>
                    <div>
                        <p className="font-bold">REACT</p>
                        <input type="range" min={0} max="100" value="67" className="range range-error " />
                    </div>
                    <div>
                        <p className="font-bold">JAVASCRIPT</p>
                        <input type="range" min={0} max="100" value="70" className="range range-error " />
                    </div>
                    <div>
                        <p className="font-bold">BOOTSTRAP</p>
                        <input type="range" min={0} max="100" value="63" className="range range-error " />
                    </div>
                </div>
                <div className="flex-1 mx-2 lg:mx-0 space-y-3 border-[5px] border-red-500 p-3 rounded-md">
                <div>
                        <p className="font-bold">MONGODB</p>
                        <input type="range" min={0} max="100" value="64" className="range range-error" />
                    </div>
                <div>
                        <p className="font-bold">EXPRESS.JS</p>
                        <input type="range" min={0} max="100" value="60" className="range range-error" />
                    </div>
                <div>
                        <p className="font-bold">NODE.JS</p>
                        <input type="range" min={0} max="100" value="70" className="range range-error" />
                    </div>
                <div>
                        <p className="font-bold">FIREBASE</p>
                        <input type="range" min={0} max="100" value="74" className="range range-error" />
                    </div>
                <div>
                        <p className="font-bold">GITHUB</p>
                        <input type="range" min={0} max="100" value="80" className="range range-error" />
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Skills;
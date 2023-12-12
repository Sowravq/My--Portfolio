
const Contact = () => {
    return (
        <div className="  mb-14 max-w-3xl mx-auto bg-base-200 shadow-lg p-6 rounded-md mt-14" id='Contact'>
            <p className="text-3xl font-bold text-center ">Contact <span className="text-orange-500">Me</span></p>
            <div className="mt-9 ">

                <form action="mailto:sowravkumar0@gmail.com" method="post" encType="text/plain">
                    <div className="flex flex-col lg:flex-row gap-5">

                        <label className="form-control w-full  ">
                            <div className="label">
                                <span className="label-text">Full name</span>

                            </div>
                            <input type="text" name="name" placeholder="Your name..." className="input input-bordered border-orange-500 w-full  " />
                            <div className="label">

                            </div>
                        </label>
                        <label className="form-control w-full  ">
                            <div className="label">
                                <span className="label-text">Your email</span>

                            </div>
                            <input type="email" required name="email" placeholder="Your email..." className="input input-bordered w-full  border-orange-500" />
                            <div className="label">

                            </div>
                        </label>




                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Message</span>

                        </div>
                        <textarea name="message" className="textarea textarea-bordered border-orange-500 h-28" placeholder="message..."></textarea>
                        <div className="label">

                        </div>
                    </label>
                    <div className="flex justify-center ">


                        <button type="submit" value='Send' className="relative py-3 mt-4 mb-5 px-8 w-2/3 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-orange-500 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-yellow-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                            Send Now
                        </button>

                    </div>
                </form>

            </div>
        </div>

    );
};

export default Contact;
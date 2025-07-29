



const ContactPage = () => {



    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);

    };
    return (<div className="max-w-4xl mx-auto px-5 py-20 ">

        <div className="flex justify-center">
            {/* Contact Form */}
            <div>
                <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
                    Let's talk about your project
                </h2>
                <p className="text-muted-foreground mb-8 text-lg text-center">
                    We help companies and individuals build out their brand guidelines.
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            First Name
                        </label>
                        <input
                            type={"text"}
                            className={
                                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"}
                        />
                    </div>
                    <div >
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Last Name
                        </label>
                        <input
                            type={"text"}
                            className={
                                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"}
                        />
                    </div>


                    <div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Email
                        </label>
                        <input
                            type={"text"}
                            className={
                                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"}
                        />
                    </div>


                    <div>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Message
                        </label>
                        <textarea
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <button type="submit"
                        className="w-full bg-[#6366f1] hover:bg-[#5856eb] text-white font-medium py-3 rounded-lg cursor-pointer">
                        Let's talk
                    </button>


                    <p className="text-sm text-muted-foreground">
                        By submitting this form, I agree to the{" "}
                        <a href="#" className="text-[#6366f1] hover:underline">
                            privacy policy
                        </a>
                        .
                    </p>
                </form>
            </div>
        </div>
    </div>)
}

export default ContactPage;
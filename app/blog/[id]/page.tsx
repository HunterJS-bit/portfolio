

const SingleBlog = ({ params }) => {

    const { id } = params;



    return (  <section className="py-16 px-6">
        <article>
        <h1>Single Blog post { id }</h1>
    </article>

    </section>)
}


export default SingleBlog;
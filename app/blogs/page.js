import BlogOverviews from "../components/blog-overviews";

async function fetchListOfBlogs() {
    try{
        const apiResponse = await fetch('http://localhost:3000/api/get-blogs',
        {
            method: 'GET',
            cache: 'no-store'
        });

        const res = await apiResponse.json();
        return res?.data;

    }catch(error){
        throw new Error(error);
    }
}
async function Blogs() {
    const blogList = await fetchListOfBlogs();

    return <BlogOverviews  blogList={blogList}/>;
}

export default Blogs;
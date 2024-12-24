'use client';

import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { set } from "mongoose";

  

const initialBlogFormData = {
    title: "",
    description: "",
}

function BlogOverviews({blogList}) {

    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    const [loading ,setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
    const[currentEditedBlogId, setCurrentEditedBlogId] = useState(null);

    console.log(blogFormData);

    const router = useRouter();
    useEffect(() => {
        router.refresh();
    }, []);

    async function handleDeleteBlogByID(getCurrentID) {
        try{
            const apiResponse = await fetch(`/api/delete-blog?id=${getCurrentID}`, {
                method: 'DELETE'
            });
            const result = await apiResponse.json();

            if(result?.success) router.refresh();

        }catch(error){  
            console.log(error);
        }
    }
    async function handleSaveBlogData(){
        try {
            setLoading(true);
            const apiResponse = currentEditedBlogId !== null ?
              await fetch(`/api/update-blog?id=${currentEditedBlogId}`, {
                method: 'PUT',
                body: JSON.stringify(blogFormData),
              })
            : await fetch('/api/add-blog', {
                method: 'POST',
                body: JSON.stringify(blogFormData)
            })
            const result = await apiResponse.json();
            if(result.success) {
                setOpenBlogDialog(false);
                setBlogFormData(initialBlogFormData);
                setLoading(false);
                setCurrentEditedBlogId(null);
                router.refresh();
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setOpenBlogDialog(initialBlogFormData);
        }
    }

    async function handleEdit(getCurrentBlog) {
        setCurrentEditedBlogId(getCurrentBlog?._id);
        setBlogFormData({
            title: getCurrentBlog?.title,
            description: getCurrentBlog?.description
        });
        setOpenBlogDialog(true);
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-4 ">
            <AddNewBlog 
                className="w-fit"
                openBlogDialog={openBlogDialog} 
                setOpenBlogDialog={setOpenBlogDialog} 
                loading={loading} 
                setLoading={setLoading} 
                blogFormData={blogFormData} 
                setBlogFormData={setBlogFormData}
                handleSaveBlogData={handleSaveBlogData}
                currentEditedBlogId={currentEditedBlogId}
                setCurrentEditedBlogId={setCurrentEditedBlogId}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    blogList && blogList.length > 0 ?
                    blogList.map((blog) => {
                        return <li className="list-none w-100">
                                <Card className="hover:-translate-y-3 ease-in-out duration-500 shadow-md shadow-black overflow-hidden p-2">
                                    <CardHeader>
                                        <CardTitle>{blog.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{blog.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter className="text-right">
                                    <div className="flex justify-center gap-2">
                                        <Button onClick={() => handleEdit(blog) }>Edit</Button>
                                        <Button onClick={() => handleDeleteBlogByID(blog._id) }>Delete</Button>
                                    </div>
                                    </CardFooter>
                                </Card>
                        </li>
                    })
                    :
                    <div className="flex justify-center items-center w-screen">
                    <p className="text-center text-6xl font-extrabold text-black font-serif">No blog found</p>
                    </div>
                }
            </div>

        </div>
    );
}

export default BlogOverviews;
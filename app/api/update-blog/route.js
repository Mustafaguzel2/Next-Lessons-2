import connectToDB from "@/app/database";
import { NextResponse } from "next/server";
import Joi from "joi";
import Blog from "@/app/models/blog";

const EditBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
})

export async function PUT(req) {
    try{
        await connectToDB();

        const { searchParams } = new URL(req.url, 'http://localhost');
        const getCurrentBlogId = searchParams.get('id');

        if(!getCurrentBlogId) {
            return NextResponse.json({
                success: false,
                message: "Blog ID is required",
            })
        }

        const {title, description} = await req.json();

        const {error} = EditBlog.validate({
            title, description
        });

        if(error) {
            return NextResponse.json({
                success: false,
                message: error.details[0].message
            })
        }
       
        const updateCurrentBlogByID = await Blog.findOneAndUpdate({_id: getCurrentBlogId}, {title, description}, {new: true});
        if(updateCurrentBlogByID) {
            return NextResponse.json({
                success: true,
                message: "Blog updated successfully",
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: "Something went wrong",
            })
        }

    }catch(error){
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong",
        })
    }
}
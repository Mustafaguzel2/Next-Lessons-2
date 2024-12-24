import { NextResponse } from "next/server";
import connectToDB from "@/app/database";
import Blog from "@/app/models/blog";

export async function DELETE(req) {
    try {
        await connectToDB();

        const { searchParams } = new URL(req.url, 'http://localhost');
        const getCurrentBlogId = searchParams.get('id');

        if (!getCurrentBlogId) {
            return NextResponse.json({
                success: false,
                message: 'Blog ID is required',
            });
        }

        const deleteCurrentBlogByID = await Blog.findByIdAndDelete(getCurrentBlogId);
        if (deleteCurrentBlogByID) {
            return NextResponse.json({
                success: true,
                message: 'Blog deleted successfully',
            });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something went wrong',
            });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

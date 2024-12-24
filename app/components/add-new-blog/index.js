'use client';
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";
function AddNewBlog({ openBlogDialog, setOpenBlogDialog, loading, setLoading, blogFormData, setBlogFormData ,handleSaveBlogData, currentEditedBlogId, setCurrentEditedBlogId}) {



    return (
        <div>
            <div className="flex justify-start items-start ml-4 mt-5">
                <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
            </div>
            <Dialog open={openBlogDialog} onOpenChange={() => {
                setOpenBlogDialog(false)
                setBlogFormData({
                    title: "",
                    description: "",
                });
                setCurrentEditedBlogId(null);
            }}>
                <DialogContent className="w-fit ">
                    <DialogHeader>
                        <DialogTitle><Label>{currentEditedBlogId ? "Edit Blog" : "Add New Blog"}</Label></DialogTitle>
                        <DialogDescription>
                            Add new blog here.
                            <br />Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4">
                        <Label >Title</Label>
                        <Input name="title" id="title" value={blogFormData.title} onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })} placeholder="Enter blog tittle" />
                        <Label >Description</Label>
                        <Input name="description" id="description" value={blogFormData.description} onChange={(e) => setBlogFormData({ ...blogFormData, description: e.target.value })} placeholder="Write Description" />
                    </div>
                    <Button onClick={handleSaveBlogData} className="mt-2">
                        {
                            loading ? "Saving Changes..." : "Save Changes"
                        }
                        </Button>
                </DialogContent>
            </Dialog>
        </div>

    );
}

export default AddNewBlog;
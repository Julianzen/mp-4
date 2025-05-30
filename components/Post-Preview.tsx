import {PostProps} from "@/types";

export default function PostPreview({post}: {post: PostProps}){
    return(
            <div className="bg-sky-400 rounded-xl p-4 m-2 w-96">
                <h4 className="font-bold text-3xl">{post.title}</h4>
                <p className="font-bold text-1xl">{post.content}</p>
                <p className="font-bold text-1xl">{post.temp}</p>

            </div>
    );
}
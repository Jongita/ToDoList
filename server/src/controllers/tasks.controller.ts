import { Task } from "../models/task";


export class TaskController {
    static async getAll(req:any, res:any){
        const posts=await Task.find();
        res.json(posts);
    }
    // paima viena irasa:
    static async get(req:any, res:any){
        // const post = await Post.findOne({'_id':req.params.id});

        const post = await Task.findById(req.params.id);
        res.json(post);
    }

    static async store(req:any, res:any){
        // idedam irasa
        const newTask=new Task({
            todo:req.body.todo,
            status:req.body.status
        });
        // paleidziam issaugojima (vykdoma asinchroniskai-promise del to await)
        await newTask.save();
        // sugrazinam ta pati irasa kuris buvo iterptas i DB
        res.json(newTask)
    }

     static async update(req:any, res:any){
        const post=await Task.findOne({'_id':req.params.id});
        if(post!=null){
            if(req.body.todo!=null)
                post.todo=req.body.todo
            if(req.body.status!=null)
                post.status=req.body.status
                post.save();
            }
            res.json(post);
        }

    static async delete(req:any, res:any){
        const post=await Task.findOneAndDelete({
            '_id':req.params.id
        })
        res.json(post);
    }
}
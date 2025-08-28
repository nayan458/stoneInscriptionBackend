import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './Schema/post.schema';
import { Model } from 'mongoose';

@Injectable()
export class ImageUploaderService {

    constructor(
        @InjectModel(Post.name) 
        private postModel: Model<Post>
    ){}

    createFeed (image, description){
        this.postModel.find()
    }
}

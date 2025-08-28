import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, Types } from 'mongoose';

// ---------- COMMENTS ----------
export type CommentDocument = Comment & Document;

@Schema({ timestamps: true })
export class Comment {
    @Prop({ type: Types.ObjectId })
    _id: string;

    @Prop({ required: true })
    post_id: string; // FK → Post

    @Prop({ required: true })
    description: string;

    @Prop({ default: Date.now })
    bucketID: Date;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

}
export const CommentSchema = SchemaFactory.createForClass(Comment);
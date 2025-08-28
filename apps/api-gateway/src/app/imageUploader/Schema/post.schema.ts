import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, Types } from 'mongoose';

export type PostDocument = Post & Document;


// ---------- ENUMS ----------
export enum Type {
  STONE = 'stone',
  COPER_PLATE = 'coper_plate',
  CLOTH = 'cloth',
}

export enum Script {
  BRAHMI = 'brahmi',
  KHAROSHTHI = 'kharoshti',
  SANSKRIT = 'sanskrit',
  // add more as needed
}

export enum Language {
  EN = 'en',
  HI = 'hi',
  AS = 'as',
  // i18n languages...
}



class Description {

    @Prop()
    author: string;

    @Prop()
    upvotes: number;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    @Prop()
    discriptionText: string;

    @Prop()
    discriptionEnglish: string;



}

class Geolocation {
    @Prop()
    lon: number;

    @Prop()
    lat: number;

    @Prop()
    state: string;

    @Prop()
    city: string;

    @Prop()
    region: string;
}

@Schema({ timestamps: true })

export class Post {

    @Prop({ type: Types.ObjectId })
    _id: ObjectId;

    @Prop({ type: Types.ObjectId, required: true })
    User_id: ObjectId;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    @Prop()
    geolocation: Geolocation;

    @Prop()
    description: Description;

    @Prop()
    topic : string;

    @Prop()
    script: Script;

    @Prop()
    type : Type;

    @Prop()
    title : string;

    @Prop()
    subject : string;

    @Prop()
    language : Language;



}

export const PostSchema = SchemaFactory.createForClass(Post);

    
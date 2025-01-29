import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Writer } from '../interfaces/writer.interface'
import { Post } from '../interfaces/post.interface'
import demoData from '../demo-data.json'

@Injectable()
export class WritersService {
  constructor(
    @InjectModel('Writer') private readonly writerModel: Model<Writer>,
    @InjectModel('Post') private readonly postModel: Model<Post>,
  ) { }


  // THIS FUNCTION ONLY WORK WHEN THERE IS NO DEMO DATA ATT ALL
  async addDemoData() {

    await this.writerModel.insertMany(demoData.writers)
    await this.postModel.insertMany(demoData.posts)

    return { message: 'Demo data added successfully' }
  }

  async getAllWriters() {
    return this.writerModel.find().exec()
  }

  async getSortedWritersAndPosts() {
    let writers = await this.writerModel.find().exec();
    let posts = await this.postModel.find().sort({ createdAt: -1 }).exec()

    
    
    if (writers.length === 0 || posts.length === 0) {
      console.log("Inserting Demo data to DB...")
      await this.addDemoData()
      writers = await this.writerModel.find().exec();
      posts = await this.postModel.find().sort({ createdAt: -1 }).exec()
    }

    return { writers, posts }
  }
}
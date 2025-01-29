import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { WritersController } from './writers.controller'
import { WritersService } from './writers.service'
import { WriterSchema } from '../schemas/writer.schema'
import { PostSchema } from '../schemas/post.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Writer', schema: WriterSchema },
      { name: 'Post', schema: PostSchema },
    ]),
  ],
  controllers: [WritersController],
  providers: [WritersService],
})
export class WritersModule {}
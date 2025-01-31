import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { WritersModule } from './writers/writers.module'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/writersDB'),
    WritersModule,
  ],
})
export class AppModule {}
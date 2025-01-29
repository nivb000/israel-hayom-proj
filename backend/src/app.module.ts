import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { WritersModule } from './writers/writers.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://user:12345@cluster0.qplxj.mongodb.net/writersDB?retryWrites=true&w=majority'),
    WritersModule,
  ],
})
export class AppModule {}
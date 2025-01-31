import { Controller, Get, Post, Body } from '@nestjs/common'
import { WritersService } from './writers.service'

@Controller('writers')
export class WritersController {
  constructor(private readonly writersService: WritersService) {}

  // Not needed to call this function, the get sorted auto insert demo data if needed
  @Post('add-demo-data')
  async addDemoData() {
    return this.writersService.addDemoData()
  }

  @Get('all')
  async getAllWriters() {
    return this.writersService.getAllWriters()
  }

  @Get('sorted')
  async getSortedWritersAndPosts() {
    return this.writersService.getSortedWritersAndPosts()
  }
}
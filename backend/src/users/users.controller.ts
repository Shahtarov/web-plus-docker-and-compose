import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Request,
  UseGuards,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from 'src/auth/jwt.guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  findOne(@Request() req) {
    return req.user;
  }

  @Patch('me')
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+req.user.id, updateUserDto);
  }

  @Post('find')
  findByQuery(@Body() query: { query: string }) {
    return this.usersService.findByQuery(query.query);
  }

  @Get(':username')
  findByUsername(@Param('username') username: string) {
    return this.usersService.findByUsername(username);
  }

  @Get('me/wishes')
  getMyWishes(@Request() req) {
    return this.usersService.getMyWishes(req.user.id);
  }

  @Get(':username/wishes')
  getUserWishes(@Param('username') username: string) {
    return this.usersService.getUserWishes(username);
  }
}

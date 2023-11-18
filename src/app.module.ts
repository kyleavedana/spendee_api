import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeService } from './type.service';
import { CategoryService } from './category.service';
import { TransactionService } from './transaction.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, TypeService, CategoryService, TransactionService],
})
export class AppModule {}

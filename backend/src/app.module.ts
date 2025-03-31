import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { PrismaModule } from './prisma/prisma.module'; // Assuming you'll create this

@Module({
  imports: [
    ConfigModule.forRoot({ // Configure ConfigModule
      isGlobal: true, // Make config available globally
      envFilePath: ['.env'], // Specify .env file path relative to backend dir
    }),
    PrismaModule, // Add PrismaModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

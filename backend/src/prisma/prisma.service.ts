import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL, // Ensure this is loaded correctly
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('Prisma Client Connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('Prisma Client Disconnected');
  }

  // Optional: Add a method to handle clean shutdown with NestJS enableShutdownHooks
  // async enableShutdownHooks(app: INestApplication) {
  //   process.on('beforeExit', async () => {
  //     await app.close();
  //   });
  // }
}

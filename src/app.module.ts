import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ContactModule } from './modules/contact/contact.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ContactModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

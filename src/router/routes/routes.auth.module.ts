import { Module } from '@nestjs/common';
import { AuthModule } from 'src/common/auth/auth.module';
import { AwsModule } from 'src/common/aws/aws.module';
import { CountryModule } from 'src/modules/country/country.module';
import { SettingModule } from 'src/modules/setting/setting.module';
import { UserAuthController } from 'src/modules/user/controllers/user.auth.controller';
import { UserModule } from 'src/modules/user/user.module';

@Module({
    controllers: [UserAuthController],
    providers: [],
    exports: [],
    imports: [UserModule, AuthModule, AwsModule, SettingModule, CountryModule],
})
export class RoutesAuthModule {}

import {Global, Module} from '@nestjs/common';
import {LocalDriveService} from './local/local-drive.service';

@Global()
@Module({
  providers: [LocalDriveService],
  exports: [LocalDriveService],
})
export class StorageModule {}

import {Global, Module} from '@nestjs/common';
import {LocalDriveService} from './local/local-drive.service';
import {GoogleDriveService} from './google-drive/google-drive.service';
import {GoogleDrivePermissionService} from './google-drive/google-drive-permission.service';

@Global()
@Module({
  providers: [
    LocalDriveService,
    GoogleDriveService,
    GoogleDrivePermissionService,
  ],
  exports: [
    LocalDriveService,
    GoogleDriveService,
    GoogleDrivePermissionService,
  ],
})
export class StorageModule {}

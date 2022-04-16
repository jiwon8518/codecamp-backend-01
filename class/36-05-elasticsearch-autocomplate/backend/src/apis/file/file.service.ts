import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';
import { Storage } from '@google-cloud/storage';
import * as dotenv from 'dotenv';
dotenv.config();

interface IFile {
  files: FileUpload[]; // 파일 여러개라서 배열
}
@Injectable()
export class FileService {
  async upload({ files }: IFile) {
    // 스토리지에 이미지 업로드
    const storage = new Storage({
      keyFilename: process.env.STORAGE_KEY_FILENAME,
      projectId: process.env.STORAGE_PROJECT_ID,
    }).bucket(process.env.STORAGE_BUCKET); // bucket=>스토리지 안의 폴더

    // 일단 먼저 다 받기 파일들을 먼저 다 받고
    const waitedFiles = await Promise.all(files);

    // 구글 스토리지에 동시에 모두 올려버리기
    // 한방에 받기 위해서 Promise.all 사용
    const results = await Promise.all(
      // 배열이라서 map
      // file 함수파라미터 이름이라서 맘대로 지정가능
      waitedFiles.map((file) => {
        // resolve, reject 함수 이름이라서 맘대로 지정 가능
        return new Promise((resolve, reject) => {
          file
            .createReadStream()
            .pipe(storage.file(file.filename).createWriteStream())
            .on('finish', () =>
              resolve(`${process.env.STORAGE_BUCKET}/${file.filename}`),
            )
            .on('error', (error) => reject('실패: ' + error));
        });
      }),
    );

    return results;
  }
}

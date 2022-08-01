import { download, DownlodedFile, ensureDirSync } from "../deps.ts";
import { DEFAULT_DATAFILES_PATH } from "./consts.ts";

export class Downloader {
  async download(
    url: URL,
    headers?: Record<string, string>,
  ): Promise<DownlodedFile> {
    const splitedURLPath = url.pathname.split("/");
    const joinedDirPath = splitedURLPath
      .slice(1, splitedURLPath.length - 1)
      .join("/");
    const dir = `${DEFAULT_DATAFILES_PATH}/${name}/${joinedDirPath}`;
    const file = splitedURLPath[splitedURLPath.length - 1];
    ensureDirSync(dir);
    const reqInit: RequestInit = {
      method: "GET",
      headers: headers,
    };
    return await download(url, {
      file,
      dir,
    }, reqInit);
  }
}

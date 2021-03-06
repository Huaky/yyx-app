import { HttpClient } from "../http";
import { ISnapshot } from "../../interfaces";
import { IAccount } from "../account/types";

export const SnapshotService = {
  select: async (snapshot: ISnapshot | File) => {
    return HttpClient.post<IAccount>("/api/import", snapshot, {
      headers: {
        "content-type": "application/json"
      }
    }).then(res => res.data);
  }
};

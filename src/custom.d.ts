type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}

type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createAt?: string;

}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => string;//success表示成功,duplicated表示重复
  save: () => void;
  remove: (id: string) => boolean;
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
}


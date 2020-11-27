type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createAt?: Date;

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

interface Window {
  tagList: Tag[];
}
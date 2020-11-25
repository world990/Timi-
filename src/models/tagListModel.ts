const localStorageKeyName = 'tagList';
type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => string;//success表示成功,duplicated表示重复
  save: () => void;
}
const tagListModel: TagListModel = {
  data: [],
  create(name: string) {
    if (this.data.indexOf(name) >= 0) { return 'duplicated';}
    this.data.push(name);
    this.save();
    return 'success';
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;
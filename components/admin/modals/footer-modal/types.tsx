export default interface FooterModal {
  onDelete?(): void;
  onEdit?(): void;
  onCreate?(): void;
  deleteLoader?: boolean;
  editLoader?: boolean;
  createLoader?: boolean;
  create?: boolean;
}

export default interface FooterModal {
  onDelete(): void;
  onEdit(): void;
  deleteLoader?: boolean
  editLoader?: boolean
}

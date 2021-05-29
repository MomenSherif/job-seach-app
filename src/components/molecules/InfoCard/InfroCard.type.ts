interface Tag {
  label: string;
  value: string | number;
}

type InfoCardProps = {
  to: string;
  title: string;
  description?: string;
  tags: Tag[];
};

export default InfoCardProps;

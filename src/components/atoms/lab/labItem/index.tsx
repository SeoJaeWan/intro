import Image from 'next/image';
import LabItemStyle from './labItem.style';
import Link from 'next/link';

interface LabItemProps {
  title: string;
  thumbnail: string;
  link: string;
}

const LabItem = (props: LabItemProps) => {
  const { title, thumbnail, link } = props;

  return (
    <LabItemStyle.Container>
      <Link href={link}>
        <LabItemStyle.Box>
          <h3 className="a11y">{title}</h3>
          <Image src={thumbnail} alt="" width={2000} height={1200} />
          <LabItemStyle.Title aria-hidden>{title}</LabItemStyle.Title>
        </LabItemStyle.Box>
      </Link>
    </LabItemStyle.Container>
  );
};

export default LabItem;

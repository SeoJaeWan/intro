import Image from 'next/image';
import LabItemStyle from './labItem.style';
import Link from 'next/link';

interface LabItemProps {
  title: string;
  thumbnail: string;
  link: string;
  isBlock: boolean;
  index: number;
}

const block = [
  'black',
  'yellow',
  'black',
  'yellow',
  'black',
  'yellow',
  'black',
  'yellow',
  'black',
  'yellow',
] as const;

const LabItem = (props: LabItemProps) => {
  const { title, thumbnail, link, isBlock, index } = props;

  return (
    <LabItemStyle.Container $isBlock={isBlock} $index={index}>
      <Link href={link}>
        <LabItemStyle.Box>
          <h3 className="a11y">{title}</h3>
          <Image
            src={thumbnail}
            alt=""
            width={2000}
            height={1200}
            priority={true}
          />
          <LabItemStyle.Title aria-hidden>{title}</LabItemStyle.Title>
        </LabItemStyle.Box>
      </Link>

      <LabItemStyle.Block>
        <LabItemStyle.BlockText>아직 작성중이에요</LabItemStyle.BlockText>
        <LabItemStyle.BlockLine>
          <div>
            {block.map((c, idx) => (
              <LabItemStyle.BlockLineItem $color={c} key={idx} />
            ))}
            {block.map((c, idx) => (
              <LabItemStyle.BlockLineItem $color={c} key={idx} />
            ))}
          </div>
        </LabItemStyle.BlockLine>
      </LabItemStyle.Block>
    </LabItemStyle.Container>
  );
};

export default LabItem;

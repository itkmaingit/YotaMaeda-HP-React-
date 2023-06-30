/** @jsxImportSource @emotion/react */
import { underLineAnimationStyle } from "@/styles/utilStyle";
import Link from "next/link";

type Props = {
  link: string;
  text: string;
};

export default function UnderlineLink({ link, text }: Props) {
  return (
    <Link href={link} legacyBehavior passHref>
      <a css={underLineAnimationStyle}>{text}</a>
    </Link>
  );
}

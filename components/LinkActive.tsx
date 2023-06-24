import React, { CSSProperties } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

const style: CSSProperties = {
    color: 'green',
    textDecoration: 'underline'
}
interface Props {
    text: string;
    href: string;
}

const LinkActive: FC<Props> = ({text, href}) => {

    const {asPath} = useRouter();
  return (
    <Link href={href} legacyBehavior>
        <a style={asPath === href ? style : undefined}>{text}</a>
       
    </Link>
  )
}

export default LinkActive

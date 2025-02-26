import React, { JSX } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import { useBlogPost } from '@docusaurus/theme-common/internal'
import type { Props } from '@theme/BlogPostItem/Header/Title'

import styles from './styles.module.css'

export default function BlogPostItemHeaderTitle({ className }: Props): JSX.Element {
  const { metadata, isBlogPostPage } = useBlogPost()
  const { permalink, title } = metadata
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2'

  return (
    <div className={styles.titleWrapper}>
      <TitleHeading className={clsx(styles.title, className)} itemProp="headline">
        {isBlogPostPage ? (
          title
        ) : (
          <Link itemProp="url" to={permalink} className={styles.titleLink}>
            {title}
          </Link>
        )}
      </TitleHeading>
      {isBlogPostPage && metadata?.frontMatter?.state !== 'finished' && (
        <span className={styles.draftBadge}>草稿</span>
      )}
    </div>
  )
}

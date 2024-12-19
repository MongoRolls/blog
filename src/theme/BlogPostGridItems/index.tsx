import React, { JSX } from 'react'
import { Variants, motion } from 'framer-motion'
import Link from '@docusaurus/Link'
import type { Props as BlogPostItemsProps } from '@theme/BlogPostItems'
import Tag from '@theme/Tag'

import styles from './styles.module.scss'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function BlogPostGridItems({ items }: BlogPostItemsProps): JSX.Element {
  return (
    <motion.div className={styles.blogGrid} variants={container} initial="hidden" animate="visible">
      {items.map(({ content: BlogPostContent }) => {
        const { metadata: blogMetaData, frontMatter } = BlogPostContent
        const { title } = frontMatter
        const { permalink, date, tags } = blogMetaData
        const dateObj = new Date(date)
        const dateString = `${dateObj.getFullYear()}-${('0' + (dateObj.getMonth() + 1)).slice(
          -2,
        )}-${('0' + dateObj.getDate()).slice(-2)}`

        return (
          <motion.div
            className={styles.postGridItem}
            key={blogMetaData.permalink}
            variants={item}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <Link to={permalink} className={styles.itemTitle}>
              {title}
            </Link>
            <div className={styles.itemTags}>
              {tags.length > 0 && (
                <>
                  <svg width="1em" height="1em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10 15h4V9h-4v6Zm0 2v3a1 1 0 0 1-2 0v-3H5a1 1 0 0 1 0-2h3V9H5a1 1 0 1 1 0-2h3V4a1 1 0 1 1 2 0v3h4V4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-4Z"
                    ></path>
                  </svg>
                  {tags.slice(0, 2).map(({ label, permalink: tagPermalink }, index) => (
                    <React.Fragment key={tagPermalink}>
                      {index !== 0 && '/'}
                      <Tag label={label} permalink={tagPermalink} description="" />
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
            <div className={styles.itemDate}>{dateString}</div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

import React, { memo } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'

import styles from './styles.module.css'
import { type Friend } from '@site/data/friend'

const FriendCard = memo(({ friend }: { friend: Friend }) => (
  <li className={clsx(styles.friendCard, 'padding-vert--sm padding-horiz--md')}>
    <img
      src={
        typeof friend.avatar === 'string'
          ? friend.avatar
          : ''
      }
      alt={friend.title}
      className={clsx(styles.friendCardImage)}
    />
    <div className="card__body">
      <div className={clsx(styles.friendCardHeader)}>
        <h4 className={styles.friendCardTitle}>
          <Link href={friend.website} className={styles.friendCardLink}>
            {friend.title}
          </Link>
        </h4>
      </div>
      <p className={styles.friendCardDesc}>{friend.description}</p>
    </div>
  </li>
))

export default FriendCard

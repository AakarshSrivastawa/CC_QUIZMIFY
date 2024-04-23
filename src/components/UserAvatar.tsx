import React from 'react'
import { User } from 'next-auth';
import { Avatar, AvatarFallback } from './ui/avatar';
import Image from 'next/image';

type Props = {
    User : Pick<User, "name" | "image">;
}

const UserAvatar = ({User}: Props) => {
  return (
    <Avatar>
        {User.image ? (
        <div className="relative w-full h-full aspect-square">
          <Image
            fill
            src={User.image}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only ">{User?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  )
}

export default UserAvatar
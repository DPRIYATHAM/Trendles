import React from 'react'
import Image from '../Image/Image'
import Asset1 from '../../assets/png-for-dark-mode/Trendles-dark-icon.png'
import Literaryicon from '../../assets/Ping/lit.png'
import Blogicon from '../../assets/Ping/blog.png'
import Twittericon from '../../assets/Ping/twitter.png'
import Videoicon from '../../assets/Ping/video.png'
import InstraIcon from '../../assets/Ping/Instragram.png'


const IconDisplay = () => {
  return (
    <div className='flex flex-col'>
 <div className="flex justify-between w-full h-28 md:w-96">
            <Image AssestIcon={Literaryicon} height={80} width={80} subRoute={'literary'} className={'flex transform -rotate-24 w-48 justify-end self-center'} />
            <Image AssestIcon={Blogicon} height={80} width={80} subRoute={'blog'} className={'transform rotate-45 self-end'}  />
        </div>
        <div className="flex mt-5 gap-7 h-28">
            <Image AssestIcon={Videoicon} height={80} width={80} subRoute={'video'} className={'flex transform -rotate-12 justify-start self-center'} />
            <Image AssestIcon={Asset1} height={200} width={200} className={'mt-3'} />
        </div>
        <div className="flex flex-row justify-between h-40 w-96">
            <Image AssestIcon={Twittericon} height={80} width={80} subRoute={'twitter'} className={'flex w-52 self-end justify-end -rotate-24'} />
            <Image AssestIcon={InstraIcon} height={70} width={70} subRoute={'instagram'} className={'flex self-start rotate-12'} />
        </div>

    </div>
  )
}

export default IconDisplay
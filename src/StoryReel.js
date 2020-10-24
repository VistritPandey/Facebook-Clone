import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://media.tenor.com/images/4428e406bab17aa01f9d4c9200995953/tenor.gif"
                profileSrc="https://www.wwe.com/f/styles/og_image/public/all/2019/10/RAW_06202016rf_1606--3d3997f53e6f3e9277cd5a67fbd8f31f.jpg"
                title="John Cena"
            />
            <Story 
                image="https://media.tenor.com/images/f6f4848c764981c2ee21c948819a8a48/tenor.gif"
                profileSrc="https://www.wwe.com/f/styles/wwe_large/public/all/2019/04/Roman_Reigns_bio--0ae73db3f83e01688662e05e04cfd552.jpg"
                title="Roman Reigns"
            />
            <Story 
                image="https://media4.giphy.com/media/4YY4U915gjM5yzICnz/giphy.gif"
                profileSrc="https://pbs.twimg.com/profile_images/1234894502458011653/2ZbJSOAu_400x400.jpg"
                title="Seth Rollins"
            />
            <Story 
                image="https://media.tenor.com/images/68b26bf293a871ac2448fe48e17ea059/tenor.gif"
                profileSrc="https://media11.s-nbcnews.com/j/MSNBC/Components/Video/202010/trump-mock-reporter.focal-758x379.jpg"
                title="Donald Trump"
            />
            <Story 
                image="https://www.newsraiser.com/wp-content/uploads/2020/10/ilki2a7g_rahul-gandhi-fall_295x200_01_October_20.jpg"
                profileSrc="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201808/rahul_gandhi_2.jpeg?UXfCXkJjt4zjmDa0hdJ6kSdK6B70LdXI&size=1200:675"
                title="Rahul Gandhi"
            />
        </div>
    )
}

export default StoryReel

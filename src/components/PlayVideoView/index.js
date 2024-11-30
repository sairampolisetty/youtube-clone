import React, {useState, useContext} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails} = props
  const [isLiked, setIsLiked] = useState(false)
  const [isDisLiked, setIsDisLiked] = useState(false)

  const {isDarkTheme, addVideo, savedVideos} = useContext(ThemeContext)
  const textColor = isDarkTheme ? 'white' : 'black'
  const likeIconColor = isLiked ? '#2563eb' : '#64748b'
  const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'

  const isSaved = savedVideos.some(
    eachVideo => eachVideo.id === videoDetails.id,
  )
  const saveIconColor = isSaved ? '#2563eb' : textColor

  const onClickLike = () => {
    setIsLiked(prev => {
      if (prev) {
        return false
      }
      setIsDisLiked(false)
      return true
    })
  }

  const onClickDislike = () => {
    setIsDisLiked(prev => {
      if (prev) {
        return false
      }
      setIsLiked(false)
      return true
    })
  }

  const onClickSave = () => {
    addVideo(videoDetails)
  }

  return (
    <VideoPlayer>
      <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
      <PlayVideoTitle color={textColor}>{videoDetails.title}</PlayVideoTitle>
      <PlayVideoStatusContainer>
        <PlayVideoStatus color={textColor}>
          {videoDetails.viewCount} views
          <PlayVideoDot> &#8226; </PlayVideoDot>
          {videoDetails.publishedAt}
        </PlayVideoStatus>
        <PlaySocialButtonsContainer>
          <BtnContainer>
            <SocialButton
              type="button"
              color={likeIconColor}
              onClick={onClickLike}
            >
              <AiOutlineLike size={25} />
              <ButtonText>Like</ButtonText>
            </SocialButton>
          </BtnContainer>
          <BtnContainer>
            <SocialButton
              type="button"
              color={dislikeIconColor}
              onClick={onClickDislike}
            >
              <AiOutlineDislike size={25} />
              <ButtonText>Dislike</ButtonText>
            </SocialButton>
          </BtnContainer>
          <BtnContainer>
            <SocialButton
              type="button"
              color={saveIconColor}
              onClick={onClickSave}
            >
              <BiListPlus size={25} />
              <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
            </SocialButton>
          </BtnContainer>
        </PlaySocialButtonsContainer>
      </PlayVideoStatusContainer>
      <HrLine />
      <ChannelContainer>
        <ChannelImage src={videoDetails.profileImageUrl} alt="channel logo" />
        <ChannelInfo>
          <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
          <ChannelSubscribers color={textColor}>
            {videoDetails.subscriberCount} Subscribers
          </ChannelSubscribers>
          <ChannelDescription color={textColor}>
            {videoDetails.description}
          </ChannelDescription>
        </ChannelInfo>
      </ChannelContainer>
    </VideoPlayer>
  )
}

export default PlayVideoView

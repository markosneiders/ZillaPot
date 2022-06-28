import React from "react"
import "./ShareSheet.css"

import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share"
import {
    EmailIcon,
    FacebookIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share"

import ContentCopyIcon from "@mui/icons-material/ContentCopy"

function ShareSheet(props) {
    const shareUrl = `http://ZillaPot.com/pots/buy/${props.id}`
    const title = `I just won ${props.amount} ZIL on ZillaPot! Come check it out and join the fun!`
    return (
        <div className="ShareSheet">
            <TwitterShareButton
                url={shareUrl}
                title={title}
                className="ShareSheet__button"
            >
                <TwitterIcon size={50} round />
            </TwitterShareButton>
            <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="ShareSheet__button"
            >
                <FacebookIcon size={50} round />
            </FacebookShareButton>
            <RedditShareButton
                url={shareUrl}
                title={title}
                windowWidth={660}
                windowHeight={460}
                className="ShareSheet__button"
            >
                <RedditIcon size={50} round />
            </RedditShareButton>
            <TelegramShareButton
                url={shareUrl}
                title={title}
                className="ShareSheet__button"
            >
                <TelegramIcon size={50} round />
            </TelegramShareButton>
            <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="ShareSheet__button"
            >
                <WhatsappIcon size={50} round />
            </WhatsappShareButton>
            <EmailShareButton
                url={shareUrl}
                subject={title}
                body="body"
                className="ShareSheet__button"
            >
                <EmailIcon size={50} round />
            </EmailShareButton>
            <div
                className="Copy"
                onClick={() =>
                    navigator.clipboard.writeText(`${title} ${shareUrl}`)
                }
            >
                <ContentCopyIcon size={50} />
            </div>
        </div>
    )
}

export default ShareSheet

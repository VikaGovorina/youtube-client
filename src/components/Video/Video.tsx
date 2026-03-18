import type { YoutubeVideoData } from "../../types/youtube";
import styles from './Video.module.css';
import { formatDuration, formatViewCount, formatDateAgo, checkChannelImgExists } from "../../utils/youtubeDataFormatters";


export const Video = function Video({ videoData, channelData }: YoutubeVideoData) {
    const duration = formatDuration(videoData.contentDetails.duration);
    const viewCount = formatViewCount(videoData.statistics.viewCount);
    const dateAgo = formatDateAgo(videoData.snippet.publishedAt);
    const channelImg = checkChannelImgExists(channelData); // TODO
    console.log(`channelTitle: ${channelData.snippet.title}, channelImg: ${channelData.snippet.thumbnails.medium.url}`);

    return (
        <div className={styles.videoContainer}>
            <div className={styles.videoThumbnail}>
                <img className={styles.thumbnailImage} src={videoData.snippet.thumbnails.medium.url} alt={videoData.snippet.title}></img>
                <div className={styles.durationSpanContainer}>
                    <span className={styles.durationSpan}>{duration}</span>    
                </div>
            </div>

            <div className={styles.videoInfo}>
                <div id={styles.meta}>
                    <div className={styles.titleWrapper}>
                        <h3 className={styles.videoTitle}>{videoData.snippet.title}</h3>
                        <div className={styles.menu}>
                            <button className={styles.menuButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '24px', height: '24px', fill: 'white' }}><path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className={styles.metaBlock}>
                        <span className={styles.viewsNumber}>{viewCount} views</span>
                        <span className={styles.dateAgo}>{dateAgo}</span>
                    </div>
                    <div className={styles.channelInfo}>
                        <img className={styles.channelAvatar} src={channelData.snippet.thumbnails.medium.url} alt={channelData.snippet.title}></img>
                        <span className={styles.channelName}>{channelData.snippet.title}</span>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <span className={styles.description}>{videoData.snippet.description}</span>
                    </div>
                    
                </div> 
            </div>
            
        </div>
    );
}   
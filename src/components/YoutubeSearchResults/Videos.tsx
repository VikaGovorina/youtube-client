import type { YoutubeVideosData } from "../../types/youtube";
import { Video } from "../Video/Video";
import styles from './Videos.module.css';


export const Videos = function Videos({ videosData, channelsData }: YoutubeVideosData) {

    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: 'none', display: 'inherit', fill: 'white'}}><path d="M9 3a4 4 0 00-3.874 3H3a1 1 0 000 2h2.126a4.002 4.002 0 007.748 0H21a1 1 0 100-2h-8.126A4 4 0 009 3Zm0 2a2 2 0 110 4 2 2 0 010-4Zm6 8a4 4 0 00-3.874 3H3a1 1 0 000 2h8.126a4.002 4.002 0 007.748 0H21a1 1 0 000-2h-2.126A4 4 0 0015 13Zm0 2a2 2 0 110 4 2 2 0 010-4Z"></path></svg>
                <span className={ styles.filterSpan}>Filters</span>
            </div>
            <div className={styles.ytVideoContainer}>
                {videosData.map((videoData) => {
                    const channel = channelsData.find((channel) => channel.id === videoData.snippet.channelId);
                    if (channel) {
                        return <Video videoData={ videoData } channelData={ channel } key={videoData.id} />
                    }
                })}
            </div>
        </div>
    );
}

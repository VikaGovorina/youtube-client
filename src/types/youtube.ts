
export interface YoutubeSearchVideoItem {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            medium: {
                url: string;
            }
        };
        publishedAt: string;
        channelId: string;
    };
}

export interface YoutubeVideoInformation {
    id: string;
    contentDetails: {
        duration: string;
    };
    statistics: {
        viewCount: string;
        likeCount: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            medium: {
                url: string;
            }
        };
        publishedAt: string;
        channelId: string;
        description: string;
    };
}

export interface YoutubeChannelInfo { 
    id: string;
    snippet: {
        title: string;
        thumbnails: {
            medium: {
                url: string;
            }
        };
    };
}

export interface YoutubeChannelInfoResponse {
    items: YoutubeChannelInfo[];
}

export interface YoutubeSearchQueryResponse {
    items: YoutubeSearchVideoItem[];
}

export interface YoutubeVideoResponse {
    items: YoutubeVideoInformation[];
}

export interface YoutubeVideosData {
    videosData: YoutubeVideoInformation[]; 
    channelsData: YoutubeChannelInfo[];
}

export interface YoutubeVideoData {
    videoData: YoutubeVideoInformation;
    channelData: YoutubeChannelInfo;
}



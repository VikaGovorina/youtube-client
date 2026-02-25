import { ENV } from "../config/env";
import type { YoutubeChannelInfoResponse, YoutubeSearchQueryResponse, YoutubeVideoResponse } from "../types/youtube";

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const YoutubeApi = {
    async fetchYoutubeVideos(query: string, maxResults: number = 10): Promise<YoutubeSearchQueryResponse> {
        const result = await fetch(`${BASE_URL}/search?` + 
            new URLSearchParams({
                part: 'snippet',
                q: query,
                type: 'video',
                maxResults: maxResults.toString(),
                key: ENV.YOUTUBE_API_KEY,
            })
        );

        if (!result.ok) {
            throw new Error("Youtube API error");
        }

        return result.json();
    },

    async fetchVideoContentByIds(videoIds: string[]): Promise<YoutubeVideoResponse> {
        const result = await fetch(`${BASE_URL}/videos?` + 
            new URLSearchParams({
                part: 'contentDetails,statistics,snippet',
                id: videoIds.toString(),
                key: ENV.YOUTUBE_API_KEY,
            })
        );

        if (!result.ok) {
            throw new Error("Youtube API error");
        }

        return result.json();
    },

    async fetchChannelInfoByIds(channelIds: string[]): Promise<YoutubeChannelInfoResponse> { 
        try {
            // const filteredChannelIds = [...new Set(channelIds.filter(id => id && id.trim()))];

            // if (filteredChannelIds.length === 0) {
            //     return { items: [] };
            // }

            // console.log('Fetching channels:', filteredChannelIds);

            const result = await fetch(`${BASE_URL}/channels?` +
                new URLSearchParams({
                    part: 'snippet',
                    id: channelIds.toString(),
                    key: ENV.YOUTUBE_API_KEY,
                })
            );

            if (!result.ok) {
                throw new Error("Youtube API error");
            }

            return result.json();
        } catch (error) {
            if (error instanceof Error) {
                console.error('Channel API Error:');
            }
            throw new Error('Youtube API error: Failed to fetch channel info');
        }
    }
};
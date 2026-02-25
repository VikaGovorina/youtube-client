import { useState } from 'react';
import './App.css'
import { Header } from './components/Header/Header'
import type { YoutubeChannelInfo, YoutubeSearchVideoItem, YoutubeVideoInformation } from './types/youtube';
import { Videos } from './components/YoutubeSearchResults/Videos';
import TopLoader from './ui/TopLoader/TopLoader';
import { YoutubeApi } from './api/youtubeApi';

function App() {
	const [query, setQuery] = useState<string>('');
	const [videosData, setVideosData] = useState<YoutubeVideoInformation[]>([]);
	const [channelsData, setChannelsData] = useState<YoutubeChannelInfo[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const handleSearch = async () => {
		if (query.length === 0) {
			return;
		}
		try {
			setLoading(true);
			const data = await YoutubeApi.fetchYoutubeVideos(query);
			const videoIds = data.items.map((item: YoutubeSearchVideoItem) => item.id.videoId);
			const channelIds = data.items.map((item: YoutubeSearchVideoItem) => item.snippet.channelId);

			const [videoData, channelData] = await Promise.all([
				YoutubeApi.fetchVideoContentByIds(videoIds),
				YoutubeApi.fetchChannelInfoByIds(channelIds)
			]);

			setVideosData(videoData.items);
			setChannelsData(channelData.items);
			
			console.log("VIDEO DATA  ", videoData.items);
			console.log("CHANNELS DATA  ", channelData.items);
			console.log(data.items);
			
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<TopLoader loading={loading} />
			<Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
			<Videos videosData={videosData} channelsData={channelsData} />
		</>
	)
}

export default App

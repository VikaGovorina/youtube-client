
const durationRegex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

export function formatDuration(durationStr: string) {
    const duration = durationStr.match(durationRegex);

    if (!duration) {
        return '0:00';
    }

    let hours = '', minutes = '', seconds = '';
    hours = duration[1] ? duration[1] + ':' : '';
    minutes = duration[2] ?
        hours !== '' ?
            duration[2].padStart(2, '0') + ':' :
            duration[2] + ':'         
    : '0:';
    seconds = duration[3] ? duration[3].padStart(2, '0') : '00'; 
    
    return `${hours}${minutes}${seconds}`;
}

export function formatViewCount(viewCount: string) {
    const viewNumber = Number(viewCount);
    return viewNumber > 1000000000 ?
        `${(viewNumber / 1000000000).toFixed(1)}B` : viewNumber > 1000000 ?
            `${(viewNumber / 1000000).toFixed(1)}M` : viewNumber > 1000 ?
                `${(viewNumber / 1000).toFixed()}K` : viewNumber;
}

export function formatDateAgo(publishedAt: string) {
    const date = new Date(publishedAt);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (seconds < 60) {
        return `${seconds} seconds ago`;
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} minutes ago`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} hours ago`;
    }
    const days = Math.floor(hours / 24);
    if (days < 7) {
        return `${days} days ago`;
    }
    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
        return `${weeks} weeks ago`;
    }
    const months = Math.floor(weeks / 4);
    if (months < 12) {
        return `${months} months ago`;
    }
    const years = Math.floor(months / 12);
    return `${years} years ago`;
}
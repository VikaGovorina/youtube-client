export interface HeaderProps {
    query: string;
    setQuery: (query: string) => void;
    handleSearch: () => Promise<void>;
}


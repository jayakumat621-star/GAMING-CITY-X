export interface GameRelease {
  id: string;
  title: string;
  publisher: string;
  releaseDate: string; // YYYY-MM-DD format for accurate sorting
  releaseDateReadable: string; // User friendly date
  genre: string;
  rating: number; // Rating out of 5
  description: string;
  imageKeyword: string; // Search prompt for UI images
  latestUpdate: string; // Latest patch notes
  updateDate: string;
  size: string; // Size in MB/GB
  sizeInMB: number; // Size as numeric MB for filter
  downloads: string; // e.g., "10K+", "100K+"
  isOffline: boolean;
  downloaded?: boolean;
}

export interface UpcomingGame {
  id: string;
  title: string;
  publisher: string;
  expectedRelease: string; // Date or Quarter
  genre: string;
  description: string;
  imageKeyword: string;
  hypeScore: number; // 1-100 rating
  isOffline: boolean;
  size: string;
}

export interface GameUpdate {
  id: string;
  title: string;
  updateTitle: string;
  updateDate: string;
  details: string;
  version: string;
  imageKeyword: string;
  genre: string;
  isOffline: boolean;
  size: string;
}

export interface NotificationSubscription {
  id: string;
  gameId: string;
  gameTitle: string;
  userEmail: string;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  wishlist: string[];
  clickedGames: string[];
  interestedGenres: Record<string, number>;
}

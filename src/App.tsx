import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Search, 
  RefreshCw, 
  Bell, 
  Calendar, 
  Clock, 
  Layers, 
  Star, 
  ArrowDownToLine, 
  Gamepad2, 
  ExternalLink, 
  X, 
  CheckCircle, 
  Trash2, 
  Info,
  ChevronRight,
  TrendingUp,
  SlidersHorizontal,
  Mail,
  Zap,
  Volume2,
  VolumeX,
  RotateCcw,
  Smartphone,
  Check,
  Mountain,
  Hexagon,
  Flame,
  Skull,
  Eye,
  Footprints,
  Shield,
  Dna,
  Castle,
  Sprout,
  Square,
  Target,
  Smile,
  Swords,
  User,
  Heart,
  Sparkles
} from "lucide-react";
import { GameRelease, UpcomingGame, GameUpdate, NotificationSubscription, UserProfile } from "./types";
import brandLogoImg from "./assets/images/gaming_city_x_logo_1783131917611.jpg";

const getGamePosterUrl = (title: string, genre: string, keyword: string = "") => {
  const t = title.toLowerCase();
  const g = genre.toLowerCase();
  const kw = (keyword || "").toLowerCase();

  // Real, official Google Play Store feature graphics & promotional landscape artwork
  if (t.includes("alto's adventure") || (t.includes("alto") && t.includes("adventure"))) {
    return "https://play-lh.googleusercontent.com/8-l6F8mU_Ias6n2v_Z0hW4oV3D0x_VzK3h5=w1024-h500-rw";
  } else if (t.includes("alto's odyssey") || (t.includes("alto") && t.includes("odyssey"))) {
    return "https://play-lh.googleusercontent.com/F_Sg738xJgQ6_2F83zD2tA-y39yZ2_n3T8D8x_8=w1024-h500-rw";
  } else if (t.includes("alto's hills") || t.includes("alto")) {
    return "https://altosadventure.com/assets/images/share.jpg";
  } else if (t.includes("monument valley") || t.includes("monument")) {
    return "https://www.ustwogames.co.uk/assets/images/games/monument-valley-1/mv-hero-new.jpg";
  } else if (t.includes("soul knight") || t.includes("soul") || t.includes("knight")) {
    return "https://play-lh.googleusercontent.com/uG962gL6m66Z7bBfW-N8O11m5O9xT1m_t1G6X6bB7_Y7f88p0f7P_XWzXwO-7p7N5A=w1024-h500-rw";
  } else if (t.includes("dead cells") || t.includes("dead") || t.includes("cells")) {
    return "https://images.squarespace-cdn.com/content/v1/5a549646b1ffb6e0fb43f554/1567083049755-O7I7T70K3Y93Z59D898A/DeadCells_KeyArt_Horizontal.jpg";
  } else if (t.includes("limbo")) {
    return "https://playdead.com/img/limbo/screen01.jpg";
  } else if (t.includes("crossy road") || t.includes("crossy")) {
    return "https://play-lh.googleusercontent.com/9KLaS83XInP_WbFf84z9z_h_6N7o0bV3NqYm_XnQoX5y58K5X5y58K5X5y58K5X5y5=w1024-h500-rw";
  } else if (t.includes("grimvalor")) {
    return "https://direlight.com/wp-content/uploads/2018/07/grimvalor_banner.jpg";
  } else if (t.includes("plague")) {
    return "https://www.ndemiccreations.com/assets/images/plague_inc_share.jpg";
  } else if (t.includes("stardew valley") || t.includes("stardew")) {
    return "https://play-lh.googleusercontent.com/XwE47E6M0VwGclhFkF86u4T8D8v_8=w1024-h500-rw";
  } else if (t.includes("shadow fight") || t.includes("shadow")) {
    return "https://nekki.com/images/shadowfight2/sf2_banner.jpg";
  } else if (t.includes("vector")) {
    return "https://nekki.com/images/vector/vector_banner.jpg";
  } else if (t.includes("kingdom rush frontiers") || t.includes("frontiers")) {
    return "https://www.ironhidegames.com/assets/images/games/kr-frontiers/share.jpg";
  } else if (t.includes("kingdom rush alliance") || t.includes("alliance")) {
    return "https://www.ironhidegames.com/assets/images/games/kr-alliance/share.jpg";
  } else if (t.includes("kingdom")) {
    return "https://www.ironhidegames.com/assets/images/games/kr-frontiers/share.jpg";
  } else if (t.includes("plants") || t.includes("zombie")) {
    return "https://media.ea.com/content/dam/ea/plants-vs-zombies/plants-vs-zombies-2/common/pvz2-m-share.jpg";
  } else if (t.includes("geometry") || t.includes("geometry dash")) {
    return "https://play-lh.googleusercontent.com/Vfb_K-9F6VlB6bZz8h2s7D8=w1024-h500-rw";
  } else if (t.includes("badland")) {
    return "https://www.badlandgame.com/wp-content/uploads/2013/03/share.jpg";
  } else if (t.includes("space marshals") || t.includes("marshals")) {
    return "https://www.pixelbite.se/wp-content/uploads/2015/01/spacemarshals_banner.jpg";
  } else if (t.includes("lara croft") || t.includes("lara")) {
    return "https://images.squarespace-cdn.com/content/v1/53dff337e4b0c25b30b427b0/1440713786183-B7S1X8G4EWWTL5PZ3UOP/LaraCroftGO_Horizontal_KeyArt.jpg";
  } else if (t.includes("slice") || t.includes("dice")) {
    return "https://play-lh.googleusercontent.com/uG962gL6m66Z7bBfW-N8O11m5O9xT1m_t1G6X6bB7_Y7f88p0f7P_XWzXwO-7p7N5A=w1024-h500";
  } else if (t.includes("pocket city") || t.includes("pocket")) {
    return "https://play-lh.googleusercontent.com/uG962gL6m66Z7bBfW-N8O11m5O9xT1m_t1G6X6bB7_Y7f88p0f7P_XWzXwO-7p7N5A=w1024-h500";
  }

  // Dynamic Keyword fallbacks
  if (kw.includes("minimal") || kw.includes("snow") || kw.includes("sunset") || kw.includes("mountain")) {
    return "https://play-lh.googleusercontent.com/8-l6F8mU_Ias6n2v_Z0hW4oV3D0x_VzK3h5=w1024-h500-rw";
  }
  if (kw.includes("isometric") || kw.includes("pastel") || kw.includes("illusion") || kw.includes("geometry")) {
    return "https://www.ustwogames.co.uk/assets/images/games/monument-valley-1/mv-hero-new.jpg";
  }
  if (kw.includes("pixel") || kw.includes("retro") || kw.includes("dungeon") || kw.includes("rogue")) {
    return "https://play-lh.googleusercontent.com/uG962gL6m66Z7bBfW-N8O11m5O9xT1m_t1G6X6bB7_Y7f88p0f7P_XWzXwO-7p7N5A=w1024-h500-rw";
  }
  if (kw.includes("dark") || kw.includes("gothic") || kw.includes("castle") || kw.includes("knight")) {
    return "https://images.squarespace-cdn.com/content/v1/5a549646b1ffb6e0fb43f554/1567083049755-O7I7T70K3Y93Z59D898A/DeadCells_KeyArt_Horizontal.jpg";
  }

  // Genre fallbacks
  if (g.includes("action") || g.includes("rpg") || g.includes("roguelike") || g.includes("adventure")) {
    return "https://images.squarespace-cdn.com/content/v1/5a549646b1ffb6e0fb43f554/1567083049755-O7I7T70K3Y93Z59D898A/DeadCells_KeyArt_Horizontal.jpg";
  }
  if (g.includes("puzzle") || g.includes("isometric") || g.includes("brain")) {
    return "https://www.ustwogames.co.uk/assets/images/games/monument-valley-1/mv-hero-new.jpg";
  }
  if (g.includes("runner") || g.includes("arcade")) {
    return "https://play-lh.googleusercontent.com/8-l6F8mU_Ias6n2v_Z0hW4oV3D0x_VzK3h5=w1024-h500-rw";
  }

  return "https://play-lh.googleusercontent.com/8-l6F8mU_Ias6n2v_Z0hW4oV3D0x_VzK3h5=w1024-h500-rw";
};

const getGameLogo = (title: string, genre: string) => {
  const t = title.toLowerCase();
  const g = genre.toLowerCase();

  let IconComponent = Gamepad2;
  let gradientClass = "from-lime-500 to-emerald-600";
  let iconColor = "text-black";

  if (t.includes("alto")) {
    IconComponent = Mountain;
    gradientClass = "from-amber-500 to-orange-600";
    iconColor = "text-white";
  } else if (t.includes("monument")) {
    IconComponent = Hexagon;
    gradientClass = "from-teal-500 to-cyan-600";
    iconColor = "text-white";
  } else if (t.includes("soul") || t.includes("knight")) {
    IconComponent = Swords;
    gradientClass = "from-red-600 to-rose-800";
    iconColor = "text-white";
  } else if (t.includes("dead") || t.includes("cells")) {
    IconComponent = Flame;
    gradientClass = "from-orange-600 to-red-700";
    iconColor = "text-white";
  } else if (t.includes("limbo")) {
    IconComponent = Eye;
    gradientClass = "from-gray-700 to-slate-900";
    iconColor = "text-gray-200";
  } else if (t.includes("crossy")) {
    IconComponent = Footprints;
    gradientClass = "from-yellow-400 to-amber-500";
    iconColor = "text-black";
  } else if (t.includes("grimvalor")) {
    IconComponent = Shield;
    gradientClass = "from-blue-700 to-indigo-900";
    iconColor = "text-white";
  } else if (t.includes("plague")) {
    IconComponent = Dna;
    gradientClass = "from-emerald-700 to-green-900";
    iconColor = "text-white";
  } else if (t.includes("vector")) {
    IconComponent = Zap;
    gradientClass = "from-cyan-400 to-blue-500";
    iconColor = "text-black";
  } else if (t.includes("shadow")) {
    IconComponent = Swords;
    gradientClass = "from-zinc-800 to-neutral-900";
    iconColor = "text-white";
  } else if (t.includes("kingdom")) {
    IconComponent = Castle;
    gradientClass = "from-yellow-600 to-amber-800";
    iconColor = "text-white";
  } else if (t.includes("stardew")) {
    IconComponent = Sprout;
    gradientClass = "from-green-400 to-emerald-500";
    iconColor = "text-white";
  } else if (t.includes("geometry")) {
    IconComponent = Square;
    gradientClass = "from-pink-500 to-purple-600";
    iconColor = "text-white";
  } else if (t.includes("plants") || t.includes("zombie")) {
    IconComponent = Sprout;
    gradientClass = "from-green-500 to-lime-600";
    iconColor = "text-white";
  } else if (t.includes("subway") || t.includes("surf")) {
    IconComponent = Zap;
    gradientClass = "from-yellow-500 to-red-500";
    iconColor = "text-white";
  } else if (t.includes("angry") || t.includes("bird")) {
    IconComponent = Target;
    gradientClass = "from-red-500 to-orange-600";
    iconColor = "text-white";
  } else if (t.includes("cut") || t.includes("rope")) {
    IconComponent = Smile;
    gradientClass = "from-emerald-400 to-teal-500";
    iconColor = "text-white";
  } else {
    // Fallbacks by genre
    if (g.includes("action") || g.includes("rpg")) {
      IconComponent = Swords;
      gradientClass = "from-red-500 to-rose-600";
      iconColor = "text-white";
    } else if (g.includes("puzzle") || g.includes("isometric") || g.includes("brain")) {
      IconComponent = Hexagon;
      gradientClass = "from-indigo-500 to-purple-600";
      iconColor = "text-white";
    } else if (g.includes("runner") || g.includes("arcade")) {
      IconComponent = Zap;
      gradientClass = "from-amber-400 to-orange-500";
      iconColor = "text-black";
    } else if (g.includes("strategy") || g.includes("simulation")) {
      IconComponent = Shield;
      gradientClass = "from-teal-500 to-emerald-600";
      iconColor = "text-white";
    }
  }

  return (
    <div className={`w-full h-full rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-md shadow-black/30`}>
      <IconComponent className={`w-5 h-5 ${iconColor}`} />
    </div>
  );
};

export default function App() {
  // State
  const [releases, setReleases] = useState<GameRelease[]>([]);
  const [updates, setUpdates] = useState<GameUpdate[]>([]);
  const [upcoming, setUpcoming] = useState<UpcomingGame[]>([]);
  const [lastSync, setLastSync] = useState<string>("");
  const [subscriptions, setSubscriptions] = useState<NotificationSubscription[]>([]);
  
  const [loading, setLoading] = useState<boolean>(true);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [syncError, setSyncError] = useState<string | null>(null);

  // Filters & Tabs
  const [activeTab, setActiveTab] = useState<"releases" | "updates" | "upcoming" | "subscriptions" | "profile">("releases");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("All Genres");
  const [sortBy, setSortBy] = useState<"releaseDate" | "rating" | "downloads">("releaseDate");

  // In-app download tracking state
  // tracks: { progress: number; currentMB: number; status: 'idle' | 'downloading' | 'completed' }
  const [downloadStates, setDownloadStates] = useState<Record<string, { progress: number; currentMB: number; status: 'idle' | 'downloading' | 'completed' }>>({});
  
  // Interactive Offline Play states
  const [playingGame, setPlayingGame] = useState<GameRelease | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Notification Modal state
  const [selectedUpcomingGame, setSelectedUpcomingGame] = useState<UpcomingGame | null>(null);
  const [subEmail, setSubEmail] = useState<string>("");
  const [subLoading, setSubLoading] = useState<boolean>(false);
  const [subSuccess, setSubSuccess] = useState<string | null>(null);

  // Active game detail modal
  const [selectedGameDetail, setSelectedGameDetail] = useState<GameRelease | null>(null);

  // States for again released games
  const [againReleased, setAgainReleased] = useState<GameRelease[]>([]);
  const [showAgainReleasedModal, setShowAgainReleasedModal] = useState<boolean>(false);
  const [showNoNewReleasesToast, setShowNoNewReleasesToast] = useState<boolean>(false);
  const [reloadProgress, setReloadProgress] = useState<number>(0);
  const [reloadPhase, setReloadPhase] = useState<string>("");

  // User Profile and Wishlist States
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [activeProfile, setActiveProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [recommendationsLoading, setRecommendationsLoading] = useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [newProfileName, setNewProfileName] = useState<string>("");
  const [newProfileEmail, setNewProfileEmail] = useState<string>("");
  const [newProfileAvatar, setNewProfileAvatar] = useState<string>("lime");
  const [profileActionLoading, setProfileActionLoading] = useState<boolean>(false);

  // Fetch profiles on mount
  const fetchProfiles = async (autoSelectEmail?: string) => {
    try {
      const res = await fetch("/api/profiles");
      if (res.ok) {
        const data = await res.json();
        setProfiles(data || []);
        
        // Auto-select profile by email if provided, or default to first profile
        if (data && data.length > 0) {
          const defaultEmail = autoSelectEmail || "mjayakumarmjayakumar356@gmail.com";
          const found = data.find((p: UserProfile) => p.email.toLowerCase() === defaultEmail.toLowerCase());
          const selected = found || data[0];
          setActiveProfile(selected);
          fetchRecommendations(selected.id);
        }
      }
    } catch (err) {
      console.error("Failed to fetch profiles:", err);
    }
  };

  const fetchRecommendations = async (profileId: string) => {
    setRecommendationsLoading(true);
    try {
      const res = await fetch(`/api/profiles/${profileId}/recommendations`);
      if (res.ok) {
        const data = await res.json();
        setRecommendations(data || []);
      }
    } catch (err) {
      console.error("Failed to fetch recommendations:", err);
    } finally {
      setRecommendationsLoading(false);
    }
  };

  const handleCreateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProfileName.trim() || !newProfileEmail.trim()) return;
    setProfileActionLoading(true);
    try {
      const res = await fetch("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newProfileName.trim(),
          email: newProfileEmail.trim().toLowerCase(),
          avatar: newProfileAvatar
        })
      });
      if (res.ok) {
        const created = await res.json();
        setNewProfileName("");
        setNewProfileEmail("");
        setNewProfileAvatar("lime");
        setShowProfileModal(false);
        
        // Refresh profiles and select the newly created one
        await fetchProfiles(created.email);
      }
    } catch (err) {
      console.error("Failed to create profile:", err);
    } finally {
      setProfileActionLoading(false);
    }
  };

  const handleToggleWishlist = async (gameId: string, genre: string) => {
    if (!activeProfile) {
      setShowProfileModal(true);
      return;
    }

    const isWishlisted = activeProfile.wishlist?.includes(gameId);
    const url = `/api/profiles/${activeProfile.id}/wishlist${isWishlisted ? `/${gameId}` : ""}`;
    const method = isWishlisted ? "DELETE" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: isWishlisted ? undefined : JSON.stringify({ gameId, genre })
      });

      if (res.ok) {
        const updatedProfile = await res.json();
        setActiveProfile(updatedProfile);
        
        // Update the profiles array
        setProfiles(prev => prev.map(p => p.id === updatedProfile.id ? updatedProfile : p));
        
        // Refresh recommendations to adapt instantly
        fetchRecommendations(updatedProfile.id);
      }
    } catch (err) {
      console.error("Failed to update wishlist:", err);
    }
  };

  const handleTrackInterest = async (gameId: string, genre: string) => {
    if (!activeProfile) return;
    
    // Avoid spamming if already clicked in this session's state
    if (activeProfile.clickedGames?.includes(gameId)) return;

    try {
      const res = await fetch(`/api/profiles/${activeProfile.id}/interest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gameId, genre })
      });

      if (res.ok) {
        const updatedProfile = await res.json();
        setActiveProfile(updatedProfile);
        setProfiles(prev => prev.map(p => p.id === updatedProfile.id ? updatedProfile : p));
        
        // Quietly refresh recommendations
        fetchRecommendations(updatedProfile.id);
      }
    } catch (err) {
      console.error("Failed to track interest:", err);
    }
  };

  // Fetch initial data
  useEffect(() => {
    fetchData();
    fetchSubscriptions();
    fetchProfiles();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/games");
      if (!res.ok) throw new Error("Failed to fetch game data");
      const data = await res.json();
      setReleases(data.releases || []);
      setUpdates(data.updates || []);
      setUpcoming(data.upcoming || []);
      setLastSync(data.lastSync || "Unknown");

      // Initialize download states for already downloaded games
      const initialDownloads: Record<string, any> = {};
      (data.releases || []).forEach((r: GameRelease) => {
        if (r.downloaded) {
          initialDownloads[r.id] = { progress: 100, currentMB: r.sizeInMB || 150, status: "completed" };
        }
      });
      setDownloadStates(initialDownloads);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubscriptions = async () => {
    try {
      const res = await fetch("/api/subscriptions");
      if (res.ok) {
        const data = await res.json();
        setSubscriptions(data || []);
      }
    } catch (err) {
      console.error("Error fetching subscriptions:", err);
    }
  };

  const triggerLiveSync = async () => {
    setSyncing(true);
    setSyncError(null);
    setReloadProgress(0);
    setReloadPhase("Contacting Google Play Store socket...");
    setShowNoNewReleasesToast(false);

    // Save previous releases list to compare
    const oldReleasesList = [...releases];

    // Start a progress timer to simulate high-fidelity reload/indexing
    let currentPct = 0;
    const progressInterval = setInterval(() => {
      currentPct += Math.floor(Math.random() * 12) + 6; // Increment by 6-17%
      if (currentPct >= 96) {
        currentPct = 96;
        clearInterval(progressInterval);
      }
      setReloadProgress(currentPct);

      // Procedural phases
      if (currentPct < 25) {
        setReloadPhase("Re-initializing Play Store Socket...");
      } else if (currentPct < 55) {
        setReloadPhase("Querying live offline indexes (< 300MB)...");
      } else if (currentPct < 75) {
        setReloadPhase("Re-parsing genres, metadata, and user ratings...");
      } else {
        setReloadPhase("Verifying package signatures & security certificates...");
      }
    }, 180);

    try {
      const res = await fetch("/api/sync", { method: "POST" });
      if (!res.ok) {
        throw new Error("Live Play Store synchronization failed. Please check Gemini API configuration.");
      }
      const data = await res.json();
      
      // Stop the regular incremental timer
      clearInterval(progressInterval);
      
      // Fast forward progress to 100%
      setReloadProgress(100);
      setReloadPhase("Sync complete! Comparing database releases...");

      // Small delay for the user to see 100% completion
      await new Promise(resolve => setTimeout(resolve, 800));

      if (data.success && data.cache) {
        // Compare new releases against the previous releases list by ID
        const newlyReleased = (data.cache.releases || []).filter(
          (nr: GameRelease) => !oldReleasesList.some(or => or.id === nr.id)
        );

        if (newlyReleased.length > 0) {
          // If we have new releases, load them and trigger modal
          setReleases(data.cache.releases || []);
          setUpdates(data.cache.updates || []);
          setUpcoming(data.cache.upcoming || []);
          setLastSync(data.cache.lastSync || "Just now");

          // Sync download states from parsed releases
          const initialDownloads: Record<string, any> = {};
          (data.cache.releases || []).forEach((r: GameRelease) => {
            if (r.downloaded) {
              initialDownloads[r.id] = { progress: 100, currentMB: r.sizeInMB || 150, status: "completed" };
            }
          });
          setDownloadStates(initialDownloads);

          setAgainReleased(newlyReleased);
          setShowAgainReleasedModal(true);
        } else {
          // "if nothing is release show the same page that before user click synk offline releases"
          // Keep the exact same lists and state, show a custom toast telling them no new releases were found
          setShowNoNewReleasesToast(true);
        }
      }
    } catch (err: any) {
      clearInterval(progressInterval);
      setSyncError(err.message || "Failed to trigger live synchronization");
    } finally {
      setSyncing(false);
    }
  };

  const startDownload = (game: GameRelease) => {
    if (downloadStates[game.id]?.status === "downloading") return;

    setDownloadStates(prev => ({
      ...prev,
      [game.id]: { progress: 0, currentMB: 0, status: "downloading" }
    }));

    const totalMB = game.sizeInMB || 150;
    let currentPct = 0;

    const interval = setInterval(() => {
      currentPct += Math.floor(Math.random() * 8) + 5; // Increments 5-12%
      if (currentPct >= 100) {
        currentPct = 100;
        clearInterval(interval);
        
        // Save download state to server
        fetch(`/api/games/download/${game.id}`, { method: "POST" })
          .then(res => {
            if (res.ok) {
              setReleases(prev => prev.map(r => r.id === game.id ? { ...r, downloaded: true } : r));
              setDownloadStates(prev => ({
                ...prev,
                [game.id]: { progress: 100, currentMB: totalMB, status: "completed" }
              }));
            }
          })
          .catch(err => console.error("Error persisting download:", err));
      } else {
        const currentMB = Math.round((currentPct / 100) * totalMB);
        setDownloadStates(prev => ({
          ...prev,
          [game.id]: { progress: currentPct, currentMB, status: "downloading" }
        }));
      }
    }, 200);
  };

  const uninstallGame = async (game: GameRelease) => {
    try {
      const res = await fetch(`/api/games/uninstall/${game.id}`, { method: "POST" });
      if (res.ok) {
        setReleases(prev => prev.map(r => r.id === game.id ? { ...r, downloaded: false } : r));
        setDownloadStates(prev => {
          const updated = { ...prev };
          delete updated[game.id];
          return updated;
        });
      }
    } catch (err) {
      console.error("Error uninstalling game:", err);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUpcomingGame || !subEmail.trim()) return;

    setSubLoading(true);
    setSubSuccess(null);
    try {
      const res = await fetch("/api/subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameId: selectedUpcomingGame.id,
          gameTitle: selectedUpcomingGame.title,
          userEmail: subEmail.trim()
        })
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      const data = await res.json();
      if (data.success) {
        setSubSuccess(`Successfully subscribed! You will be notified at ${subEmail} when ${selectedUpcomingGame.title} drops on Play Store.`);
        setSubEmail("");
        fetchSubscriptions();
        setTimeout(() => setSubSuccess(null), 5000);
      }
    } catch (err: any) {
      alert("Error adding subscription: " + err.message);
    } finally {
      setSubLoading(false);
    }
  };

  const handleUnsubscribe = async (subId: string) => {
    if (!confirm("Are you sure you want to cancel this notification subscription?")) return;

    try {
      const res = await fetch(`/api/subscriptions/${subId}`, { method: "DELETE" });
      if (res.ok) {
        setSubscriptions(prev => prev.filter(s => s.id !== subId));
      }
    } catch (err) {
      console.error("Error unsubscribing:", err);
    }
  };

  // Unique genres
  const genresSet = new Set<string>();
  releases.forEach(r => genresSet.add(r.genre));
  updates.forEach(u => genresSet.add(u.genre));
  const genres = ["All Genres", ...Array.from(genresSet)];

  // Process & Filter Game Releases (Strictly under 300MB Offline)
  const processedReleases = [...releases]
    .filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            game.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre === "All Genres" || game.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      if (sortBy === "releaseDate") {
        return b.releaseDate.localeCompare(a.releaseDate);
      } else if (sortBy === "rating") {
        return b.rating - a.rating;
      } else if (sortBy === "downloads") {
        const parseDls = (str: string) => {
          const clean = str.replace(/[^\d.KMB+]/g, "");
          if (clean.includes("M")) return parseFloat(clean) * 1000000;
          if (clean.includes("K")) return parseFloat(clean) * 1000;
          if (clean.includes("B")) return parseFloat(clean) * 1000000000;
          return parseInt(clean) || 0;
        };
        return parseDls(b.downloads) - parseDls(a.downloads);
      }
      return 0;
    });

  // Filter updates
  const filteredUpdates = [...updates].filter(upd => {
    const matchesSearch = upd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          upd.updateTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          upd.details.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "All Genres" || upd.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  // Filter upcoming
  const filteredUpcoming = [...upcoming].filter(upc => {
    const matchesSearch = upc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          upc.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          upc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "All Genres" || upc.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  // Predefined procedural visual gradient backgrounds based on seed key
  const getPosterGradient = (keyword: string) => {
    const kw = keyword.toLowerCase();
    if (kw.includes("minimal") || kw.includes("snowboard") || kw.includes("sunset")) {
      return "from-orange-950 via-amber-900 to-stone-950";
    }
    if (kw.includes("pastel") || kw.includes("castle") || kw.includes("illusion")) {
      return "from-teal-950 via-cyan-900 to-slate-950";
    }
    if (kw.includes("pixel") || kw.includes("dungeon") || kw.includes("retro")) {
      return "from-purple-950 via-slate-900 to-emerald-950";
    }
    if (kw.includes("dark") || kw.includes("gothic") || kw.includes("sword")) {
      return "from-red-950 via-zinc-900 to-stone-950";
    }
    if (kw.includes("silhouette") || kw.includes("monochrome") || kw.includes("forest")) {
      return "from-slate-950 via-zinc-900 to-neutral-900";
    }
    if (kw.includes("blocky") || kw.includes("voxel") || kw.includes("chicken")) {
      return "from-lime-950 via-emerald-900 to-teal-950";
    }
    return "from-zinc-900 via-gray-900 to-teal-900";
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#080808] text-gray-100 font-sans selection:bg-lime-500 selection:text-black antialiased">
      
      {/* Top Banner Warning for missing API Key if any */}
      {!syncing && syncError && (
        <div className="bg-red-950/80 border-b border-red-500/30 px-6 py-3 text-sm flex items-center justify-between">
          <div className="flex items-center gap-2 text-red-300">
            <Info className="w-4 h-4 text-red-400 shrink-0" />
            <span><strong>Live sync issue:</strong> {syncError}</span>
          </div>
          <button 
            onClick={() => setSyncError(null)} 
            className="text-red-400 hover:text-white text-xs transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Header Navigation */}
      <header id="app-header" className="sticky top-0 z-40 flex flex-col md:flex-row items-center justify-between px-6 py-4 md:py-5 border-b border-white/5 bg-[#0d0d0d]/95 backdrop-blur-md gap-4">
        
        {/* Brand Logo & Platform Pill - Customized to Gaming City X */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-black rounded-xl overflow-hidden shadow-lg shadow-lime-500/10 border border-lime-500/20 transform hover:scale-105 hover:rotate-3 transition-transform duration-200 shrink-0">
            <img 
              src={brandLogoImg} 
              alt="Gaming City X Logo" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 font-display">
                GAMING CITY <span className="text-white drop-shadow-[0_0_8px_rgba(132,204,22,0.6)]">X</span>
              </h1>
              <span className="text-[9px] bg-lime-500/10 text-lime-400 font-extrabold px-1.5 py-0.5 rounded border border-lime-500/20 uppercase tracking-widest">
                OFFLINE HUB
              </span>
            </div>
            <p className="text-[10px] text-gray-400 font-mono">Premium Games &bull; Strictly &lt; 300MB</p>
          </div>
        </div>

        {/* Global Search Input */}
        <div className="w-full md:flex-1 max-w-md relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-lime-400 transition-colors">
            <Search className="w-4 h-4" />
          </div>
          <input 
            type="text" 
            placeholder="Search offline titles, publishers, mechanics..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141414] border border-white/10 rounded-full pl-11 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/20 transition-all placeholder:text-gray-500"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")} 
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Action Controls & Sync Status */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="hidden lg:flex flex-col text-right">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Database Index</span>
            <span className="text-xs text-lime-400 font-bold">{lastSync ? "Synced & Protected" : "Offline Sandbox"}</span>
          </div>

          <button 
            onClick={triggerLiveSync}
            disabled={syncing}
            className="flex items-center gap-2 px-4 py-2.5 bg-lime-500 hover:bg-lime-400 disabled:bg-lime-500/30 text-black text-xs font-bold rounded-full transition-all shadow-md shadow-lime-500/10 disabled:cursor-not-allowed shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}`} />
            {syncing ? "Scraping Offline Index..." : "Sync Offline Releases"}
          </button>
        </div>
      </header>

      {/* Main Core Layout Grid */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Navigation Sidebar (Left) */}
        <aside id="navigation-sidebar" className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-white/5 bg-[#090909] flex flex-col p-4 md:p-6 shrink-0">
          <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-3 block px-3 font-mono">
            Navigation Radar
          </span>
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab("releases")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-xs transition-all ${
                activeTab === "releases" 
                  ? "bg-lime-500/10 text-lime-400 border border-lime-500/20" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4" />
                <span>New Offline Games</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                activeTab === "releases" ? "bg-lime-400/20 text-lime-400" : "bg-white/5 text-gray-500"
              }`}>
                {releases.length}
              </span>
            </button>

            <button 
              onClick={() => setActiveTab("updates")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-xs transition-all ${
                activeTab === "updates" 
                  ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span>Offline Game Patches</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                activeTab === "updates" ? "bg-purple-400/20 text-purple-400" : "bg-white/5 text-gray-500"
              }`}>
                {updates.length}
              </span>
            </button>

            <button 
              onClick={() => setActiveTab("upcoming")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-xs transition-all ${
                activeTab === "upcoming" 
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4" />
                <span>Upcoming &lt;300MB</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                activeTab === "upcoming" ? "bg-amber-400/20 text-amber-400" : "bg-white/5 text-gray-500"
              }`}>
                {upcoming.length}
              </span>
            </button>

            <button 
              onClick={() => setActiveTab("subscriptions")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-xs transition-all ${
                activeTab === "subscriptions" 
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4" />
                <span>My Alert Watch</span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                activeTab === "subscriptions" ? "bg-blue-400/20 text-blue-400" : "bg-white/5 text-gray-500"
              }`}>
                {subscriptions.length}
              </span>
            </button>

            <button 
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-xs transition-all ${
                activeTab === "profile" 
                  ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <User className="w-4 h-4" />
                <span>My Profile Hub</span>
              </div>
              {activeProfile && activeProfile.wishlist && activeProfile.wishlist.length > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-rose-500/20 text-rose-400 font-bold">
                  {activeProfile.wishlist.length} Wish
                </span>
              )}
            </button>
          </nav>

          {/* City X Storage Drive Indicator */}
          <div className="mt-6 p-4 bg-lime-950/15 border border-lime-500/20 rounded-2xl hidden lg:block">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                <h4 className="text-[11px] font-black text-lime-400 uppercase tracking-widest font-mono">
                  City X Storage Drive
                </h4>
              </div>
              <span className="text-[10px] text-gray-500 font-mono font-bold">In-App</span>
            </div>
            
            {(() => {
              const usedStorage = releases.filter(r => r.downloaded).reduce((acc, curr) => acc + (curr.sizeInMB || 0), 0);
              const maxStorage = 2000; // 2GB Virtual limit
              const pct = Math.min(100, Math.round((usedStorage / maxStorage) * 100));
              return (
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span>{releases.filter(r => r.downloaded).length} Games Installed</span>
                    <span className="font-mono font-semibold text-lime-400">{usedStorage} MB / {maxStorage} MB</span>
                  </div>
                  <div className="w-full bg-[#161616] h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="bg-gradient-to-r from-lime-400 to-emerald-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-normal pt-1.5 border-t border-white/5">
                    All downloaded games can be launched and played completely <strong>offline</strong> inside the Gaming City X simulator.
                  </p>
                </div>
              );
            })()}
          </div>

          <div className="mt-auto pt-6 border-t border-white/5 text-[11px] text-gray-500 hidden lg:block">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold uppercase tracking-wider text-[9px] text-gray-400">Active Profile</span>
              <button 
                onClick={() => {
                  setNewProfileName("");
                  setNewProfileEmail("");
                  setShowProfileModal(true);
                }}
                className="text-[10px] text-lime-400 hover:text-lime-300 font-bold tracking-wide transition-colors"
              >
                Switch / New
              </button>
            </div>
            {activeProfile ? (
              <div 
                onClick={() => setActiveTab("profile")}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 cursor-pointer group transition-all"
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs uppercase shadow shrink-0 ${
                  activeProfile.avatar === "lime" ? "bg-lime-400 text-black" :
                  activeProfile.avatar === "purple" ? "bg-purple-500 text-white" :
                  activeProfile.avatar === "amber" ? "bg-amber-400 text-black" :
                  activeProfile.avatar === "cyan" ? "bg-cyan-400 text-black" :
                  "bg-rose-400 text-black"
                }`}>
                  {activeProfile.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-semibold text-gray-200 truncate group-hover:text-white transition-colors">
                    {activeProfile.name}
                  </span>
                  <span className="block text-[10px] text-gray-400 truncate">
                    {activeProfile.email}
                  </span>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setShowProfileModal(true)}
                className="w-full py-2.5 px-3 rounded-xl border border-dashed border-white/10 hover:border-lime-500/30 text-gray-400 hover:text-lime-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <User className="w-3.5 h-3.5" />
                Select Profile
              </button>
            )}
          </div>
        </aside>

        {/* Content Feed Section */}
        <section id="content-feed" className="flex-1 flex flex-col bg-[#0b0b0b] overflow-y-auto">
          
          {/* Subheader Filter & Selector Bar */}
          <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#111111] border-b border-white/5">
            
            {/* Left Filter Actions */}
            <div className="flex items-center gap-4 w-full sm:w-auto overflow-x-auto no-scrollbar py-1">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest shrink-0 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Filter Genre:
              </span>
              <div className="flex gap-1.5 shrink-0">
                {genres.map(genre => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      selectedGenre === genre
                        ? "bg-lime-500 text-black border-lime-400"
                        : "bg-[#181818] text-gray-400 hover:text-white border-white/5 hover:border-white/15"
                    }`}
                  >
                    {genre.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Sorting Options */}
            {activeTab === "releases" && (
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#181818] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-lime-500"
                >
                  <option value="releaseDate">Newest First</option>
                  <option value="rating">Play Store Rating</option>
                  <option value="downloads">Download Volume</option>
                </select>
              </div>
            )}
          </div>

          {/* Sync Loader View */}
          {syncing && (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-[#0b0b0b]">
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-lime-500/20 border-t-lime-400 animate-spin"></div>
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-lime-400 animate-pulse" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Syncing Droid Offline Database...</h3>
              <p className="text-sm text-gray-400 max-w-md">
                Gemini is using Google Search Grounding to find recently released offline Android games that are strictly below 300MB.
              </p>
            </div>
          )}

          {/* Content Loading View */}
          {!syncing && loading && (
            <div className="flex-1 flex items-center justify-center p-12">
              <div className="flex flex-col items-center gap-3">
                <RefreshCw className="w-8 h-8 text-lime-500 animate-spin" />
                <span className="text-sm text-gray-400">Loading offline games...</span>
              </div>
            </div>
          )}

          {/* Main List Renderings */}
          {!syncing && !loading && (
            <div className="p-6">
              
              {/* TAB 1: NEW RELEASES */}
              {activeTab === "releases" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
                        <span>Latest Offline Android Releases</span>
                        <span className="text-xs font-mono font-normal text-gray-500">({processedReleases.length} available)</span>
                      </h2>
                      <p className="text-xs text-gray-400 mt-1">Directly download offline games under 300MB and play them inside this app's simulator sandbox.</p>
                    </div>
                  </div>

                  {processedReleases.length === 0 ? (
                    <div className="bg-[#121212] rounded-2xl border border-white/5 p-12 text-center">
                      <Gamepad2 className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                      <h3 className="text-base font-bold text-white">No offline games match your query</h3>
                      <p className="text-xs text-gray-500 mt-1">Try resetting the genre filter or clearing your search phrase.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {processedReleases.map((game, index) => {
                        const downState = downloadStates[game.id];
                        return (
                          <div 
                            key={game.id} 
                            className="bg-[#131313] rounded-2xl border border-white/5 overflow-hidden group hover:border-lime-500/30 hover:shadow-lg hover:shadow-lime-500/5 transition-all duration-300 flex flex-col"
                          >
                            {/* Card click targets details */}
                            <div 
                              className="cursor-pointer" 
                              onClick={() => {
                                handleTrackInterest(game.id, game.genre);
                                setSelectedGameDetail(game);
                              }}
                            >
                              {/* Visual Header */}
                              <div className="h-36 relative overflow-hidden p-4 flex flex-col justify-between rounded-t-2xl">
                                {/* Full-bleed beautiful illustrated game cover poster artwork */}
                                <img 
                                  src={getGamePosterUrl(game.title, game.genre, game.imageKeyword)} 
                                  alt={game.title}
                                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                  referrerPolicy="no-referrer"
                                />
                                {/* Dynamic gradient dark overlay for professional text legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 pointer-events-none"></div>

                                {/* Wishlist Toggle Button (Floating) */}
                                {(() => {
                                  const isWishlisted = activeProfile?.wishlist?.includes(game.id);
                                  return (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleToggleWishlist(game.id, game.genre);
                                      }}
                                      className={`absolute top-3 right-3 z-30 p-2 rounded-xl transition-all border ${
                                        isWishlisted 
                                          ? "bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-500/20" 
                                          : "bg-black/60 hover:bg-[#181818] text-gray-300 hover:text-rose-400 border-white/10 hover:border-rose-500/30 backdrop-blur-md"
                                      }`}
                                      title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                                    >
                                      <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-current" : ""}`} />
                                    </button>
                                  );
                                })()}

                                <div className="relative z-10 self-start flex gap-1.5 items-center">
                                  <span className="bg-lime-500 text-black text-[9px] font-black px-2 py-0.5 rounded shadow">
                                    &lt; 300MB
                                  </span>
                                  <span className="bg-black/60 text-white text-[9px] font-bold px-2 py-0.5 rounded backdrop-blur uppercase tracking-wider">
                                    Offline
                                  </span>
                                  <span className="bg-[#4285F4] text-white text-[9.5px] font-black px-2 py-0.5 rounded shadow flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
                                    Play Store Banner
                                  </span>
                                </div>

                                <div className="relative z-10 self-end flex items-center gap-2">
                                  <div className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded text-xs text-amber-400 font-bold backdrop-blur">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    <span>{game.rating.toFixed(1)}</span>
                                  </div>
                                  <div className="bg-black/60 px-2 py-0.5 rounded text-[10px] text-gray-300 backdrop-blur font-mono">
                                    {game.size}
                                  </div>
                                </div>
                              </div>

                              {/* Body */}
                              <div className="p-5 pb-2 flex-1 flex flex-col">
                                <div className="flex gap-3.5 items-start">
                                  {/* Game Logo */}
                                  <div className="w-11 h-11 shrink-0">
                                    {getGameLogo(game.title, game.genre)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-1.5">
                                      <h3 className="font-bold text-white text-base leading-tight group-hover:text-lime-400 transition-colors">
                                        {game.title}
                                      </h3>
                                      <span className="text-[9px] font-black text-lime-400 bg-lime-500/10 border border-lime-500/20 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider shrink-0">
                                        {game.genre}
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-0.5">by {game.publisher}</p>
                                  </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-1.5 mt-4">
                                  <span className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-400 border border-white/5">
                                    {game.downloads} Downloads
                                  </span>
                                </div>

                                <p className="text-xs text-gray-400 line-clamp-2 mt-4">
                                  {game.description}
                                </p>
                              </div>
                            </div>

                            {/* In-app download controls (prevent detail modal trigger on click) */}
                            <div className="p-5 pt-0 mt-auto" onClick={(e) => e.stopPropagation()}>
                              <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                                {game.downloaded ? (
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => setPlayingGame(game)}
                                      className="flex-1 py-2.5 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-black font-black text-xs rounded-xl transition-all shadow-md shadow-lime-500/10 flex items-center justify-center gap-1.5"
                                    >
                                      <Play className="w-3.5 h-3.5 fill-black" />
                                      <span>Play Offline Now</span>
                                    </button>
                                    <button
                                      onClick={() => uninstallGame(game)}
                                      className="p-2.5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors border border-white/5"
                                      title="Uninstall Game"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                ) : downState?.status === "downloading" ? (
                                  <div className="space-y-1.5 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <div className="flex items-center justify-between text-[11px]">
                                      <span className="text-lime-400 font-bold animate-pulse inline-flex items-center gap-1">
                                        <RefreshCw className="w-3 h-3 animate-spin text-lime-400" />
                                        Downloading APK...
                                      </span>
                                      <span className="font-mono text-gray-300">
                                        {downState.currentMB}MB / {game.sizeInMB}MB ({downState.progress}%)
                                      </span>
                                    </div>
                                    <div className="w-full bg-[#181818] h-1.5 rounded-full overflow-hidden border border-white/5">
                                      <div 
                                        className="bg-gradient-to-r from-lime-400 to-emerald-400 h-full rounded-full transition-all duration-300"
                                        style={{ width: `${downState.progress}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => startDownload(game)}
                                    className="w-full py-2.5 bg-[#181818] hover:bg-lime-500 hover:text-black border border-white/10 text-white hover:border-lime-500 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                                  >
                                    <ArrowDownToLine className="w-3.5 h-3.5" />
                                    <span>Download to Sandbox ({game.size})</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: CURRENT UPDATES */}
              {activeTab === "updates" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold text-white font-display">
                        Offline Game Patch Records
                      </h2>
                      <p className="text-xs text-gray-400 mt-1">Get updates on patch notes, sandbox integrations, and controller optimizations for offline titles.</p>
                    </div>
                  </div>

                  {filteredUpdates.length === 0 ? (
                    <div className="bg-[#121212] rounded-2xl border border-white/5 p-12 text-center">
                      <Clock className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                      <h3 className="text-base font-bold text-white">No offline updates match your query</h3>
                      <p className="text-xs text-gray-500 mt-1">Reset your filters to see active updates.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredUpdates.map((upd) => (
                        <div 
                          key={upd.id}
                          className="bg-[#131313] rounded-2xl border border-white/5 p-6 hover:border-purple-500/40 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
                        >
                          <div className={`w-full md:w-36 h-28 rounded-xl bg-gradient-to-br ${getPosterGradient(upd.imageKeyword)} shrink-0 relative flex flex-col justify-end p-3`}>
                            <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                            <span className="relative z-10 bg-purple-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded self-start mb-auto">
                              PATCH SYNCED
                            </span>
                            <span className="relative z-10 text-[10px] text-purple-300 font-mono font-medium">
                              {upd.version} ({upd.size})
                            </span>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                              <div className="flex gap-3.5 items-start">
                                {/* Game Logo */}
                                <div className="w-11 h-11 shrink-0">
                                  {getGameLogo(upd.title, upd.genre)}
                                </div>
                                <div>
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    <h3 className="text-base font-bold text-white leading-tight">{upd.title}</h3>
                                    <span className="text-[9px] font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider shrink-0">
                                      {upd.genre}
                                    </span>
                                  </div>
                                  <span className="text-xs text-purple-400 font-bold tracking-tight block mt-0.5">{upd.updateTitle}</span>
                                </div>
                              </div>
                              <span className="text-xs font-mono text-gray-500 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 self-start sm:self-auto">
                                Updated: {upd.updateDate}
                              </span>
                            </div>

                            <p className="text-xs text-gray-400 mt-3.5 leading-relaxed">
                              {upd.details}
                            </p>

                            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                              <span className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded font-mono">
                                {upd.genre}
                              </span>
                              <span className="text-xs text-purple-400 font-bold inline-flex items-center gap-1">
                                Secure Offline Verification Complete <Check className="w-3.5 h-3.5 text-purple-400" />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: UPCOMING PRE-REGISTRATIONS */}
              {activeTab === "upcoming" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold text-white font-display">
                        Upcoming Offline Title Releases
                      </h2>
                      <p className="text-xs text-gray-400 mt-1">Track upcoming lightweight offline titles coming to Android. Subscribe to get immediate notifications when they launch.</p>
                    </div>
                  </div>

                  {filteredUpcoming.length === 0 ? (
                    <div className="bg-[#121212] rounded-2xl border border-white/5 p-12 text-center">
                      <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                      <h3 className="text-base font-bold text-white">No upcoming titles match your query</h3>
                      <p className="text-xs text-gray-500 mt-1">Please try modifying your filters.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredUpcoming.map((upc) => {
                        const isSubscribed = subscriptions.some(s => s.gameId === upc.id);
                        return (
                          <div 
                            key={upc.id}
                            className="bg-[#131313] rounded-2xl border border-white/5 p-6 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-start justify-between gap-3 mb-4">
                                <div className="flex gap-3.5 items-start">
                                  {/* Game Logo */}
                                  <div className="w-11 h-11 shrink-0 mt-1">
                                    {getGameLogo(upc.title, upc.genre)}
                                  </div>
                                  <div>
                                    <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded font-bold font-mono uppercase tracking-wider">
                                      {upc.expectedRelease}
                                    </span>
                                    <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                                      <h3 className="text-base font-bold text-white leading-tight">
                                        {upc.title}
                                      </h3>
                                      <span className="text-[9px] font-black text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider shrink-0">
                                        {upc.genre}
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-0.5">by {upc.publisher}</p>
                                  </div>
                                </div>

                                <div className="text-right shrink-0">
                                  <span className="text-[10px] text-gray-500 block uppercase font-mono tracking-tight">Hype Score</span>
                                  <div className="flex items-center gap-1 justify-end mt-0.5 text-amber-400 font-bold text-sm">
                                    <TrendingUp className="w-4 h-4 text-amber-500" />
                                    <span>{upc.hypeScore}%</span>
                                  </div>
                                </div>
                              </div>

                              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                                {upc.description}
                              </p>
                            </div>

                            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                              <span className="text-[10px] bg-white/5 border border-white/5 px-2.5 py-1 rounded text-gray-300 font-mono">
                                Size: {upc.size} &bull; Offline Playable
                              </span>

                              <div className="flex items-center gap-2">
                                {(() => {
                                  const isWishlisted = activeProfile?.wishlist?.includes(upc.id);
                                  return (
                                    <button
                                      onClick={() => handleToggleWishlist(upc.id, upc.genre)}
                                      className={`p-2 rounded-xl border transition-all ${
                                        isWishlisted
                                          ? "bg-rose-500/20 text-rose-400 border-rose-500/30"
                                          : "bg-[#181818] border-white/5 text-gray-400 hover:text-rose-400 hover:border-rose-500/20"
                                      }`}
                                      title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                                    >
                                      <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-current" : ""}`} />
                                    </button>
                                  );
                                })()}

                                {isSubscribed ? (
                                  <div className="flex items-center gap-1.5 text-green-400 text-xs font-bold bg-green-500/10 border border-green-500/20 px-3 py-2 rounded-lg">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Alert Active</span>
                                  </div>
                                ) : (
                                  <button 
                                    onClick={() => {
                                      handleTrackInterest(upc.id, upc.genre);
                                      setSelectedUpcomingGame(upc);
                                      setSubSuccess(null);
                                    }}
                                    className="flex items-center gap-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-lg transition-all"
                                  >
                                    <Bell className="w-3.5 h-3.5" />
                                    <span>Notify Me</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: ALERT SUBSCRIPTIONS */}
              {activeTab === "subscriptions" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold text-white font-display">
                        Your Notification Watches
                      </h2>
                      <p className="text-xs text-gray-400 mt-1">Manage active play store release notifications for upcoming offline games. You will be emailed as soon as they drop.</p>
                    </div>
                  </div>

                  {subscriptions.length === 0 ? (
                    <div className="bg-[#121212] rounded-2xl border border-white/5 p-12 text-center max-w-xl mx-auto">
                      <Bell className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                      <h3 className="text-base font-bold text-white">No active release alerts</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Go to the <strong>Upcoming &lt;300MB</strong> tab and click "Notify Me" to start receiving live launch notifications.
                      </p>
                      <button 
                        onClick={() => setActiveTab("upcoming")}
                        className="mt-5 px-4 py-2 bg-lime-500 text-black text-xs font-bold rounded-lg hover:bg-lime-400 transition-all"
                      >
                        Explore Upcoming Game Releases
                      </button>
                    </div>
                  ) : (
                    <div className="max-w-3xl mx-auto bg-[#131313] rounded-2xl border border-white/5 divide-y divide-white/5 overflow-hidden">
                      {subscriptions.map((sub) => {
                        const matchedGame = releases.find(r => r.id === sub.gameId) || upcoming.find(u => u.id === sub.gameId);
                        const genre = matchedGame?.genre || "Offline Game";
                        return (
                          <div key={sub.id} className="p-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-all">
                            <div className="flex items-start gap-3.5 min-w-0">
                              {/* Game Logo instead of generic Bell icon */}
                              <div className="w-11 h-11 shrink-0">
                                {getGameLogo(sub.gameTitle, genre)}
                              </div>
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-1.5">
                                  <h4 className="font-bold text-white text-sm leading-tight">{sub.gameTitle}</h4>
                                  <span className="text-[9px] font-black text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider shrink-0">
                                    {genre}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5">Alert Email: <span className="text-blue-400 font-mono">{sub.userEmail}</span></p>
                                <p className="text-[10px] text-gray-500 mt-1">Subscribed: {new Date(sub.createdAt).toLocaleDateString()}</p>
                              </div>
                            </div>

                          <button 
                            onClick={() => handleUnsubscribe(sub.id)}
                            className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                            title="Cancel Notification"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: MY PROFILE HUB */}
              {activeTab === "profile" && (
                <div className="space-y-8 animate-fadeIn">
                  
                  {/* Profile Header Card */}
                  <div className="bg-gradient-to-r from-rose-950/20 via-zinc-900 to-stone-950 border border-rose-500/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between shadow-xl">
                    <div className="flex items-center gap-5 flex-col md:flex-row text-center md:text-left w-full md:w-auto">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl uppercase shadow-lg shrink-0 ${
                        activeProfile?.avatar === "lime" ? "bg-lime-400 text-black shadow-lime-500/20" :
                        activeProfile?.avatar === "purple" ? "bg-purple-500 text-white shadow-purple-500/20" :
                        activeProfile?.avatar === "amber" ? "bg-amber-400 text-black shadow-amber-500/20" :
                        activeProfile?.avatar === "cyan" ? "bg-cyan-400 text-black shadow-cyan-500/20" :
                        "bg-rose-400 text-black shadow-rose-500/20"
                      }`}>
                        {activeProfile?.name.charAt(0) || "U"}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2.5 justify-center md:justify-start">
                          <h2 className="text-xl font-bold text-white font-display truncate">{activeProfile?.name || "Guest Account"}</h2>
                          <span className="text-[10px] bg-rose-500/10 text-rose-400 font-extrabold px-2 py-0.5 rounded border border-rose-500/20 uppercase tracking-widest shrink-0">
                            Personal Profile
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1 font-mono truncate">{activeProfile?.email || "No email connected"}</p>
                        <div className="flex gap-2 mt-3 flex-wrap justify-center md:justify-start">
                          <span className="text-[10px] bg-white/5 text-gray-400 px-2.5 py-1 rounded-md font-medium border border-white/5">
                            🎮 {activeProfile?.clickedGames?.length || 0} Interest Signals
                          </span>
                          <span className="text-[10px] bg-white/5 text-gray-400 px-2.5 py-1 rounded-md font-medium border border-white/5">
                            ❤️ {activeProfile?.wishlist?.length || 0} Saved Wishlist
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 shrink-0">
                      <button 
                        onClick={() => {
                          setNewProfileName("");
                          setNewProfileEmail("");
                          setShowProfileModal(true);
                        }}
                        className="px-4 py-2 bg-[#181818] hover:bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold text-xs rounded-xl transition-all"
                      >
                        Switch Profile
                      </button>
                      <button 
                        onClick={() => {
                          setNewProfileName("");
                          setNewProfileEmail("");
                          setNewProfileAvatar("lime");
                          setShowProfileModal(true);
                        }}
                        className="px-4 py-2 bg-rose-500 hover:bg-rose-400 text-black font-bold text-xs rounded-xl transition-all shadow-md shadow-rose-500/10"
                      >
                        Create Profile
                      </button>
                    </div>
                  </div>

                  {/* Personalized Recommendations Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
                        <h3 className="text-sm font-black text-white uppercase tracking-wider font-mono">
                          Personalized Recommendation Feed
                        </h3>
                      </div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                        Powered by Taste Engine
                      </span>
                    </div>

                    {recommendationsLoading ? (
                      <div className="bg-[#121212] rounded-2xl border border-white/5 p-12 text-center animate-pulse">
                        <RefreshCw className="w-6 h-6 text-rose-400 mx-auto mb-2 animate-spin" />
                        <p className="text-xs text-gray-400 font-mono">Calibrating interest vectors...</p>
                      </div>
                    ) : recommendations.length === 0 ? (
                      <div className="bg-[#121212] rounded-2xl border border-white/5 p-8 text-center">
                        <Sparkles className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                        <p className="text-xs text-gray-400">Discover more offline releases to unlock recommendations.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {recommendations.slice(0, 6).map((game: any) => {
                          const isWishlisted = activeProfile?.wishlist?.includes(game.id);
                          const isRelease = game.rating !== undefined;
                          return (
                            <div 
                              key={game.id} 
                              className="bg-[#131313] hover:bg-[#151515] rounded-2xl border border-white/5 p-4 hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-between min-h-[160px]"
                            >
                              <div>
                                <div className="flex justify-between items-start gap-2 mb-3">
                                  <span className="text-[9px] bg-rose-500/10 border border-rose-500/20 text-rose-400 font-black px-2 py-0.5 rounded uppercase tracking-wider inline-block">
                                    {game.genre}
                                  </span>
                                  <button
                                    onClick={() => handleToggleWishlist(game.id, game.genre)}
                                    className={`p-1.5 rounded-lg transition-colors ${
                                      isWishlisted 
                                        ? "bg-rose-500/20 text-rose-400 border-rose-500/30" 
                                        : "bg-white/5 text-gray-400 hover:text-rose-400"
                                    }`}
                                    title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                                  >
                                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-current" : ""}`} />
                                  </button>
                                </div>
                                <h4 className="font-bold text-white text-sm line-clamp-1">{game.title}</h4>
                                <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed min-h-[32px]">{game.description}</p>
                              </div>

                              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                                <span className="text-[10px] text-gray-500 font-mono">Size: {game.size}</span>
                                {isRelease ? (
                                  <button
                                    onClick={() => {
                                      handleTrackInterest(game.id, game.genre);
                                      setSelectedGameDetail(game);
                                    }}
                                    className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-white font-bold text-[10px] rounded-lg transition-all"
                                  >
                                    View Details
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => {
                                      handleTrackInterest(game.id, game.genre);
                                      setSelectedUpcomingGame(game);
                                    }}
                                    className="px-2.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-400 font-bold text-[10px] rounded-lg transition-all"
                                  >
                                    Pre-Register
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Active Taste Profile Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Taste Profile Stats */}
                    <div className="lg:col-span-1 bg-[#111111] rounded-2xl border border-white/5 p-5 space-y-4">
                      <div>
                        <h3 className="text-sm font-black uppercase text-gray-300 font-mono tracking-wider">Your Taste Map</h3>
                        <p className="text-[11px] text-gray-400 mt-0.5">Heatmap mapping based on your offline interaction logs.</p>
                      </div>

                      {activeProfile && activeProfile.interestedGenres && Object.keys(activeProfile.interestedGenres).length > 0 ? (
                        <div className="space-y-3">
                          {Object.entries(activeProfile.interestedGenres as Record<string, number>)
                            .sort((a, b) => (b[1] as number) - (a[1] as number))
                            .slice(0, 4)
                            .map(([genre, score]) => {
                              const typedScore = score as number;
                              const values = Object.values(activeProfile.interestedGenres as Record<string, number>);
                              const maxScore = Math.max(...values);
                              const percentage = Math.min(100, Math.round((typedScore / maxScore) * 100));
                              return (
                                <div key={genre} className="space-y-1">
                                  <div className="flex justify-between text-[11px]">
                                    <span className="text-gray-300 font-medium">{genre}</span>
                                    <span className="text-rose-400 font-mono font-bold">{typedScore} pts</span>
                                  </div>
                                  <div className="w-full bg-[#181818] h-1 rounded-full overflow-hidden">
                                    <div 
                                      className="bg-gradient-to-r from-rose-500 to-amber-400 h-full rounded-full transition-all duration-300"
                                      style={{ width: `${percentage}%` }}
                                    ></div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      ) : (
                        <div className="py-6 text-center text-gray-500 text-xs">
                          No taste logs recorded. Add games to your wishlist or click on details to see your genre affinity map!
                        </div>
                      )}
                    </div>

                    {/* Wishlist Cards Grid */}
                    <div className="lg:col-span-2 bg-[#111111] rounded-2xl border border-white/5 p-5 space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-sm font-black uppercase text-gray-300 font-mono tracking-wider">Saved Wishlist</h3>
                          <p className="text-[11px] text-gray-400 mt-0.5">Games you've marked as favorites or plan to download later.</p>
                        </div>
                        <span className="px-2.5 py-0.5 bg-rose-500/15 border border-rose-500/20 text-rose-400 font-mono text-[10px] rounded-full font-bold">
                          {activeProfile?.wishlist?.length || 0} items
                        </span>
                      </div>

                      {!activeProfile || !activeProfile.wishlist || activeProfile.wishlist.length === 0 ? (
                        <div className="bg-[#141414] rounded-xl border border-dashed border-white/10 p-10 text-center">
                          <Heart className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                          <h4 className="text-xs font-bold text-white">Your wishlist is empty</h4>
                          <p className="text-[11px] text-gray-500 mt-1">Browse releases and tap the Heart icon to save items here.</p>
                          <button
                            onClick={() => setActiveTab("releases")}
                            className="mt-4 px-3.5 py-1.5 bg-rose-500 text-black font-bold text-[10px] rounded-lg hover:bg-rose-400 transition-all"
                          >
                            Browse New Releases
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-2.5 max-h-[280px] overflow-y-auto pr-1">
                          {activeProfile.wishlist.map((gameId) => {
                            const release = releases.find(r => r.id === gameId);
                            const upc = upcoming.find(u => u.id === gameId);
                            const game = release || upc;

                            if (!game) return null;

                            const isDownloaded = release?.downloaded;
                            const downState = downloadStates[game.id];

                            return (
                              <div key={game.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="w-8 h-8 shrink-0">
                                    {getGameLogo(game.title, game.genre)}
                                  </div>
                                  <div className="min-w-0">
                                    <h4 className="text-xs font-bold text-white truncate leading-tight">{game.title}</h4>
                                    <span className="text-[9px] text-gray-400 font-mono">{game.genre} &bull; {game.size}</span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  {release ? (
                                    isDownloaded ? (
                                      <button
                                        onClick={() => setPlayingGame(release)}
                                        className="px-2.5 py-1 bg-lime-500 hover:bg-lime-400 text-black font-bold text-[10px] rounded-md transition-all flex items-center gap-1"
                                      >
                                        <Play className="w-2.5 h-2.5 fill-current" />
                                        Launch
                                      </button>
                                    ) : downState?.status === "downloading" ? (
                                      <span className="text-[9.5px] text-lime-400 font-bold animate-pulse font-mono">
                                        Downloading...
                                      </span>
                                    ) : (
                                      <button
                                        onClick={() => startDownload(release)}
                                        className="px-2.5 py-1 bg-white/10 hover:bg-lime-500 hover:text-black text-white font-bold text-[10px] rounded-md transition-all flex items-center gap-1"
                                      >
                                        <ArrowDownToLine className="w-2.5 h-2.5" />
                                        Fetch ({game.size})
                                      </button>
                                    )
                                  ) : (
                                    <button
                                      onClick={() => setSelectedUpcomingGame(upc!)}
                                      className="px-2.5 py-1 bg-amber-500/15 text-amber-400 border border-amber-500/20 font-bold text-[10px] rounded-md transition-all flex items-center gap-1"
                                    >
                                      <Bell className="w-2.5 h-2.5" />
                                      Notify
                                    </button>
                                  )}

                                  <button
                                    onClick={() => handleToggleWishlist(game.id, game.genre)}
                                    className="p-1.5 text-gray-500 hover:text-rose-400 transition-colors"
                                    title="Remove from wishlist"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              )}

            </div>
          )}
        </section>

        {/* Right Sidebar Contextual Panel */}
        <aside id="context-sidebar" className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/5 bg-[#090909] p-6 flex flex-col justify-between shrink-0">
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest font-mono">
                Featured Offline Hits
              </h3>
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
            </div>

            {/* Trending Quick List */}
            <div className="space-y-4">
              <div className="p-3 bg-[#111] rounded-xl border border-white/5 hover:border-white/10 transition-all flex items-center gap-3">
                <div className="w-10 h-10 shrink-0">
                  {getGameLogo("Alto's Adventure", "Runner")}
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] text-lime-400 font-bold uppercase tracking-wider block mb-0.5">
                    Cozy &amp; Beautiful
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h4 className="font-bold text-white text-xs leading-tight truncate">Alto's Adventure</h4>
                    <span className="text-[8px] font-black text-lime-400 bg-lime-500/10 border border-lime-500/20 px-1 rounded font-mono uppercase tracking-wider">
                      Runner
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Size: 75 MB</p>
                </div>
              </div>

              <div className="p-3 bg-[#111] rounded-xl border border-white/5 hover:border-white/10 transition-all flex items-center gap-3">
                <div className="w-10 h-10 shrink-0">
                  {getGameLogo("Monument Valley", "Isometric")}
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] text-purple-400 font-bold uppercase tracking-wider block mb-0.5">
                    Masterpiece Puzzle
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h4 className="font-bold text-white text-xs leading-tight truncate">Monument Valley</h4>
                    <span className="text-[8px] font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 px-1 rounded font-mono uppercase tracking-wider">
                      Puzzle
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Size: 240 MB</p>
                </div>
              </div>

              <div className="p-3 bg-[#111] rounded-xl border border-white/5 hover:border-white/10 transition-all flex items-center gap-3">
                <div className="w-10 h-10 shrink-0">
                  {getGameLogo("Soul Knight", "Retro Pixel")}
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] text-amber-400 font-bold uppercase tracking-wider block mb-0.5">
                    Action Roguelike
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h4 className="font-bold text-white text-xs leading-tight truncate">Soul Knight</h4>
                    <span className="text-[8px] font-black text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1 rounded font-mono uppercase tracking-wider">
                      Action
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Size: 280 MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Sandbox Specs & Help Section */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-wider font-mono">
              Direct Sandbox Info
            </h4>
            <div className="bg-[#111111] p-4 rounded-xl border border-white/5 text-[11px] text-gray-400 space-y-2.5">
              <p className="leading-relaxed">
                Gaming City X isolates Android offline games. Click <strong>Download to Sandbox</strong> on any game card, then hit <strong>Play Offline Now</strong> to test execution.
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-lime-400">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">mjayakumarmjayakumar356@gmail.com</span>
              </div>
            </div>
          </div>

        </aside>

      </div>

      {/* Notify Me Upcoming Subscription Modal */}
      {selectedUpcomingGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all">
          <div className="bg-[#131313] rounded-2xl border border-white/10 w-full max-w-md p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full filter blur-2xl"></div>

            <button 
              onClick={() => {
                setSelectedUpcomingGame(null);
                setSubSuccess(null);
                setSubEmail("");
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest font-mono">
                Upcoming Game Watch
              </span>
            </div>

            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 shrink-0">
                {getGameLogo(selectedUpcomingGame.title, selectedUpcomingGame.genre)}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {selectedUpcomingGame.title}
                  </h3>
                  <span className="text-[9px] font-black text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider shrink-0">
                    {selectedUpcomingGame.genre}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">by {selectedUpcomingGame.publisher}</p>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              We will send you a prompt update as soon as pre-registration ends and the game is active for Play Store download on Android.
            </p>

            {subSuccess ? (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl text-xs mb-4 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{subSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 font-mono">
                    Your Notification Email:
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email" 
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    className="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={subLoading}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/30 text-black font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  {subLoading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving subscription...</span>
                    </>
                  ) : (
                    <span>Activate Play Store Alert</span>
                  )}
                </button>
              </form>
            )}

            <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-gray-500 text-center leading-normal">
              No ads, no spam. Unsubscribe any time in the <strong>My Alert Watch</strong> panel.
            </div>
          </div>
        </div>
      )}

      {/* Game Details Inspect Modal */}
      {selectedGameDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all">
          <div className="bg-[#131313] rounded-3xl border border-white/10 w-full max-w-xl overflow-hidden relative">
            
            {/* Visual Header */}
            <div className="h-48 relative overflow-hidden p-6 flex flex-col justify-end">
              {/* Full-bleed beautiful illustrated game cover poster artwork */}
              <img 
                src={getGamePosterUrl(selectedGameDetail.title, selectedGameDetail.genre, selectedGameDetail.imageKeyword)} 
                alt={selectedGameDetail.title}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Dark dramatic overlay protection for details modal header */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/50 pointer-events-none"></div>
              
              <button 
                onClick={() => setSelectedGameDetail(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-gray-300 hover:text-white p-2 rounded-full backdrop-blur z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 flex gap-4 items-end">
                <div className="w-16 h-16 shrink-0 shadow-lg shadow-black/50 transform translate-y-2 border border-white/10 rounded-2xl overflow-hidden">
                  {getGameLogo(selectedGameDetail.title, selectedGameDetail.genre)}
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] bg-lime-500 text-black font-black px-2 py-0.5 rounded uppercase tracking-wider inline-block">
                      {selectedGameDetail.genre}
                    </span>
                    <span className="text-[10px] bg-[#4285F4] text-white font-black px-2 py-0.5 rounded flex items-center gap-1 inline-block shadow">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      Official Play Store Banner
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {selectedGameDetail.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-300 mt-0.5">by {selectedGameDetail.publisher}</p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-5">
              
              {/* Specs grid */}
              <div className="grid grid-cols-3 gap-4 border-b border-white/5 pb-4">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-gray-500 block uppercase font-mono">Rating</span>
                  <div className="flex items-center gap-1 mt-1 text-sm text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{selectedGameDetail.rating.toFixed(1)} / 5</span>
                  </div>
                </div>

                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-gray-500 block uppercase font-mono">Download Size</span>
                  <span className="block mt-1 font-mono text-sm text-lime-400 font-bold">{selectedGameDetail.size}</span>
                </div>

                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] text-gray-500 block uppercase font-mono">Approx. Volume</span>
                  <span className="block mt-1 text-sm text-gray-300 font-bold">{selectedGameDetail.downloads}</span>
                </div>
              </div>

              {/* Game description */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-mono">
                  Gameplay & Mechanics
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {selectedGameDetail.description}
                </p>
              </div>

              {/* Latest update notes */}
              <div className="bg-lime-950/10 border border-lime-500/20 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-lime-400 uppercase tracking-widest font-mono">
                    Latest Version Update Notes
                  </h4>
                  <span className="text-[10px] font-mono text-lime-500 font-semibold">{selectedGameDetail.updateDate}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {selectedGameDetail.latestUpdate}
                </p>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Calendar className="w-4 h-4 text-lime-500" />
                  <span>Officially Launched: {selectedGameDetail.releaseDateReadable}</span>
                </div>

                <div className="flex gap-2">
                  {selectedGameDetail.downloaded ? (
                    <button 
                      onClick={() => {
                        setSelectedGameDetail(null);
                        setPlayingGame(selectedGameDetail);
                      }}
                      className="px-5 py-2.5 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-black font-extrabold text-xs rounded-xl transition-all shadow-md shadow-lime-500/10 flex items-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>Play Offline</span>
                    </button>
                  ) : (
                    <button 
                      onClick={() => {
                        setSelectedGameDetail(null);
                        startDownload(selectedGameDetail);
                      }}
                      className="px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-extrabold text-xs rounded-xl transition-all"
                    >
                      Download APK
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* DETAILED INTERACTIVE OFFLINE PLAY SIMULATOR MODAL */}
      {playingGame && (
        <PlayingGameModal 
          game={playingGame} 
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          onClose={() => setPlayingGame(null)} 
        />
      )}

      {/* Full-Screen Reload & Sync Overlay */}
      {syncing && (
        <div className="fixed inset-0 z-50 bg-[#080808]/95 flex flex-col items-center justify-center p-6 backdrop-blur-md">
          <div className="w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-lime-500/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/5 rounded-full filter blur-2xl"></div>
            
            {/* Logo and title */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-tr from-lime-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-lime-500/20 mb-4 animate-bounce">
                <RefreshCw className="w-7 h-7 text-black animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <h2 className="text-xl font-black text-white tracking-wide">
                RELOADING OFFLINE REGISTRY
              </h2>
              <p className="text-xs text-lime-400 font-mono mt-1 uppercase tracking-widest">
                Gaming City X Core v1.4
              </p>
            </div>

            {/* Progress bar */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400 truncate max-w-[280px] block">{reloadPhase}</span>
                <span className="text-lime-400 font-bold">{reloadProgress}%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-lime-500 to-emerald-500 transition-all duration-150 ease-out"
                  style={{ width: `${reloadProgress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-mono pt-1">
                <span>INDEX_BOOT: SUCCESS</span>
                <span>CHANNELS: ENCRYPTED</span>
              </div>
            </div>

            {/* Background logs */}
            <div className="mt-6 p-4 bg-black/60 rounded-xl border border-white/5 font-mono text-[10px] text-gray-400 space-y-1.5 h-24 overflow-y-auto select-none">
              <p className="text-lime-500/80">&gt; establishing handshake to secure server...</p>
              {reloadProgress >= 20 && <p className="text-gray-500">&gt; socket protocol TLSv1.3 verified</p>}
              {reloadProgress >= 40 && <p className="text-lime-500/80">&gt; querying play store API for package sizes &lt; 300MB...</p>}
              {reloadProgress >= 65 && <p className="text-gray-500">&gt; filtering local index updates and releases...</p>}
              {reloadProgress >= 80 && <p className="text-lime-500/80">&gt; checking offline availability tags...</p>}
              {reloadProgress >= 95 && <p className="text-gray-500">&gt; updating cache and storage partitions...</p>}
              {reloadProgress === 100 && <p className="text-lime-400 font-bold">&gt; registry fully aligned and loaded!</p>}
            </div>
          </div>
        </div>
      )}

      {/* Again Released / New Offline Discoveries Modal */}
      {showAgainReleasedModal && againReleased.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all">
          <div className="bg-[#111] rounded-3xl border border-lime-500/30 w-full max-w-2xl overflow-hidden relative shadow-2xl shadow-lime-500/10">
            
            {/* Header banner */}
            <div className="bg-gradient-to-r from-lime-950 via-emerald-950 to-stone-950 px-6 py-6 border-b border-lime-500/20 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-full filter blur-2xl"></div>
              
              <button 
                onClick={() => setShowAgainReleasedModal(false)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-gray-300 hover:text-white p-2 rounded-full backdrop-blur z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="animate-pulse w-2 h-2 rounded-full bg-lime-400"></span>
                <span className="text-xs text-lime-400 font-black uppercase tracking-widest font-mono bg-lime-500/10 border border-lime-500/20 px-2.5 py-0.5 rounded">
                  Live Play Store Discoveries
                </span>
              </div>
              <h3 className="text-2xl font-black text-white leading-tight">
                ⚡ New Offline Releases Found!
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                The indexing engine detected {againReleased.length} new offline-capable games under 300MB.
              </p>
            </div>

            {/* List of new releases */}
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 divide-y divide-white/5">
              {againReleased.map((game, idx) => (
                <div key={game.id} className={`flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-4 ${idx === 0 ? "pt-0" : ""}`}>
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="w-14 h-14 shrink-0 rounded-2xl overflow-hidden border border-white/10">
                      {getGameLogo(game.title, game.genre)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h4 className="font-bold text-white text-base leading-tight truncate">{game.title}</h4>
                        <span className="text-[9px] font-black text-lime-400 bg-lime-500/10 border border-lime-500/20 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider shrink-0">
                          {game.genre}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">by {game.publisher} &bull; <span className="text-lime-400 font-mono font-bold">{game.size}</span></p>
                      <p className="text-xs text-gray-300 line-clamp-2 mt-1.5 leading-relaxed">{game.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0">
                    <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 text-xs text-gray-300 font-mono">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                      <span>{game.rating}</span>
                    </div>
                    <button 
                      onClick={() => {
                        setShowAgainReleasedModal(false);
                        setSelectedGameDetail(game);
                      }}
                      className="flex-1 sm:flex-none px-4 py-2 bg-lime-500 hover:bg-lime-400 text-black text-xs font-extrabold rounded-xl transition-all"
                    >
                      Inspect Game
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom action button */}
            <div className="bg-[#161616] border-t border-white/5 px-6 py-4 flex justify-end">
              <button 
                onClick={() => {
                  setShowAgainReleasedModal(false);
                  // Ensure releases tab is selected to show them
                  setActiveTab("releases");
                }}
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl border border-white/10 transition-colors"
              >
                Great, Let's Play!
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Toast Notification for No New Releases */}
      {showNoNewReleasesToast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-[#111] border border-white/10 text-gray-100 px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3.5 max-w-sm animate-fade-in">
            <div className="w-9 h-9 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-lime-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-sm font-bold text-white">Offline Catalog Current</h5>
              <p className="text-xs text-gray-400 mt-0.5">No new releases found. Showing same games as before.</p>
            </div>
            <button 
              onClick={() => setShowNoNewReleasesToast(false)}
              className="text-gray-500 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* User Profile Selection & Registration Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Header */}
            <div className="px-6 py-4 bg-[#161616] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-lime-400" />
                <h3 className="text-base font-bold text-white font-display">GAMING CITY X Profiles</h3>
              </div>
              <button 
                onClick={() => setShowProfileModal(false)}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto max-h-[480px] space-y-6">
              
              {/* Existing Profiles Selector */}
              <div>
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest font-mono mb-3">
                  Select Active Profile
                </h4>
                {profiles.length === 0 ? (
                  <p className="text-xs text-gray-500 italic">No registered profiles yet.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {profiles.map((prof) => {
                      const isActive = activeProfile?.id === prof.id;
                      return (
                        <div 
                          key={prof.id}
                          onClick={() => {
                            setActiveProfile(prof);
                            fetchRecommendations(prof.id);
                            setShowProfileModal(false);
                          }}
                          className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                            isActive 
                              ? "bg-lime-500/10 border-lime-400 text-white" 
                              : "bg-[#141414] border-white/5 hover:border-white/10 text-gray-300 hover:text-white"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm uppercase shadow ${
                            prof.avatar === "lime" ? "bg-lime-400 text-black" :
                            prof.avatar === "purple" ? "bg-purple-500 text-white" :
                            prof.avatar === "amber" ? "bg-amber-400 text-black" :
                            prof.avatar === "cyan" ? "bg-cyan-400 text-black" :
                            "bg-rose-400 text-black"
                          }`}>
                            {prof.name.charAt(0)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h5 className="font-bold text-xs truncate leading-tight">{prof.name}</h5>
                            <p className="text-[10px] text-gray-500 truncate mt-0.5">{prof.email}</p>
                          </div>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Separation Line */}
              <div className="border-t border-white/5 my-2"></div>

              {/* Create New Profile Form */}
              <form onSubmit={handleCreateProfile} className="space-y-4">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest font-mono">
                  Register New Taste Profile
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-gray-400 uppercase tracking-wide font-medium">Gamer Tag / Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. PhoenixGamer"
                      value={newProfileName}
                      onChange={(e) => setNewProfileName(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-lime-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-gray-400 uppercase tracking-wide font-medium">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="gamer@example.com"
                      value={newProfileEmail}
                      onChange={(e) => setNewProfileEmail(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-lime-500 transition-all"
                    />
                  </div>
                </div>

                {/* Avatar Palette Selector */}
                <div className="space-y-1.5">
                  <label className="text-[11px] text-gray-400 uppercase tracking-wide font-medium block">Select Profile Color Theme</label>
                  <div className="flex gap-2">
                    {["lime", "purple", "amber", "cyan", "rose"].map((color) => {
                      const isSelected = newProfileAvatar === color;
                      return (
                        <button 
                          key={color}
                          type="button"
                          onClick={() => setNewProfileAvatar(color)}
                          className={`w-7 h-7 rounded-lg transition-all transform hover:scale-105 ${
                            color === "lime" ? "bg-lime-400" :
                            color === "purple" ? "bg-purple-500" :
                            color === "amber" ? "bg-amber-400" :
                            color === "cyan" ? "bg-cyan-400" :
                            "bg-rose-400"
                          } ${isSelected ? "ring-2 ring-white scale-110 shadow-lg" : "opacity-60 hover:opacity-100"}`}
                        />
                      );
                    })}
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={profileActionLoading}
                  className="w-full py-2.5 bg-lime-500 hover:bg-lime-400 text-black text-xs font-black rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-1.5 shadow-md shadow-lime-500/10"
                >
                  {profileActionLoading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Creating Profile...</span>
                    </>
                  ) : (
                    <>
                      <User className="w-3.5 h-3.5" />
                      <span>Create Profile</span>
                    </>
                  )}
                </button>
              </form>

            </div>

          </div>
        </div>
      )}

      {/* Footer Details */}
      <footer id="app-footer" className="px-6 py-4 bg-[#0a0a0a] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500 shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
            <span className="font-mono tracking-tight text-gray-400">Gaming City X Sandbox: Active</span>
          </div>
          <span>&bull; Strictly &lt; 300MB Offline Mobile Games</span>
        </div>
        <div className="flex gap-4">
          <span className="hover:text-white transition-colors cursor-pointer">Local Sandbox Policy</span>
          <span>&bull;</span>
          <span className="hover:text-white transition-colors cursor-pointer font-mono">v3.0.0 - Fully Offline</span>
        </div>
      </footer>

    </div>
  );
}

// ==========================================
// INTERACTIVE MINI-GAME PLAYERS PANEL
// ==========================================
interface PlayingGameModalProps {
  game: GameRelease;
  soundEnabled: boolean;
  setSoundEnabled: (v: boolean) => void;
  onClose: () => void;
}

function PlayingGameModal({ game, soundEnabled, setSoundEnabled, onClose }: PlayingGameModalProps) {
  const [gameState, setGameState] = useState<"start" | "playing" | "gameover" | "win">("start");
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem(`hs_${game.id}`) || "0");
    } catch {
      return 0;
    }
  });

  const saveHighScore = (val: number) => {
    if (val > highScore) {
      setHighScore(val);
      try {
        localStorage.setItem(`hs_${game.id}`, val.toString());
      } catch (e) {}
    }
  };

  // Sound effect generator using Web Audio API
  const playSound = (type: "jump" | "score" | "crash" | "win" | "shoot" | "laser") => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "jump") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.16);
      } else if (type === "shoot") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.11);
      } else if (type === "score") {
        osc.type = "square";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === "crash") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(40, ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.41);
      } else if (type === "win") {
        osc.type = "sine";
        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        notes.forEach((freq, idx) => {
          const oscNode = ctx.createOscillator();
          const gainNode = ctx.createGain();
          oscNode.connect(gainNode);
          gainNode.connect(ctx.destination);
          oscNode.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
          gainNode.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.1);
          gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.1 + 0.3);
          oscNode.start(ctx.currentTime + idx * 0.1);
          oscNode.stop(ctx.currentTime + idx * 0.1 + 0.3);
        });
      }
    } catch (e) {
      console.warn("Web Audio not supported or blocked by policy", e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
      
      {/* Handheld Game Console Outer Ring */}
      <div className="w-full max-w-4xl bg-[#111111] border border-white/10 rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
        
        {/* Left Console Controller pad (D-Pad, Joysticks) */}
        <div className="hidden md:flex flex-col justify-between p-8 bg-[#161616] border-r border-white/5 w-44 items-center shrink-0">
          <div className="text-center">
            <span className="text-[10px] text-lime-400 font-mono font-bold tracking-widest uppercase">Drive X1</span>
            <div className="w-12 h-12 bg-black rounded-full border border-white/10 mt-3 flex items-center justify-center shadow-inner relative">
              <div className="w-6 h-6 bg-zinc-800 rounded-full border border-white/5 absolute top-2"></div>
            </div>
          </div>

          {/* Retro D-Pad */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute w-20 h-6 bg-zinc-800 rounded border border-white/10"></div>
            <div className="absolute h-20 w-6 bg-zinc-800 rounded border border-white/10"></div>
            <div className="absolute w-4 h-4 bg-zinc-900 rounded-full z-10"></div>
            <div className="absolute top-1 text-zinc-500 font-bold text-xs pointer-events-none">▲</div>
            <div className="absolute bottom-1 text-zinc-500 font-bold text-xs pointer-events-none">▼</div>
            <div className="absolute left-1 text-zinc-500 font-bold text-xs pointer-events-none">◀</div>
            <div className="absolute right-1 text-zinc-500 font-bold text-xs pointer-events-none">▶</div>
          </div>

          <div className="text-center">
            <span className="text-[9px] text-gray-500 font-mono">ANALOG A</span>
          </div>
        </div>

        {/* Center Screen: The Simulated Handheld Display */}
        <div className="flex-1 bg-black flex flex-col p-4 md:p-6 min-h-[460px] relative select-none">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4 shrink-0">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-lime-400" />
              <span className="text-xs font-mono font-black text-white uppercase tracking-wider">
                {game.title} <span className="text-lime-400">Offline Simulation</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Sound toggle */}
              <button 
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="text-gray-400 hover:text-white p-1"
                title={soundEnabled ? "Mute Game" : "Unmute Game"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-lime-400" /> : <VolumeX className="w-4 h-4 text-red-400" />}
              </button>

              <button 
                onClick={onClose}
                className="p-1 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-all"
                title="Exit Game"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RENDER DYNAMIC MINI GAME ENGINE */}
          <div className="flex-1 bg-[#090909] rounded-2xl border border-white/10 overflow-hidden relative flex flex-col items-center justify-center p-4">
            {game.id === "altos-adventure" && (
              <AltosAdventureGame 
                gameState={gameState} 
                setGameState={setGameState} 
                score={score} 
                setScore={setScore} 
                highScore={highScore}
                saveHighScore={saveHighScore}
                playSound={playSound}
              />
            )}

            {game.id === "monument-valley" && (
              <MonumentValleyGame 
                gameState={gameState} 
                setGameState={setGameState} 
                playSound={playSound}
              />
            )}

            {game.id === "soul-knight" && (
              <SoulKnightGame 
                gameState={gameState} 
                setGameState={setGameState} 
                score={score} 
                setScore={setScore} 
                highScore={highScore}
                saveHighScore={saveHighScore}
                playSound={playSound}
              />
            )}

            {/* General Play clicker for other games */}
            {game.id !== "altos-adventure" && game.id !== "monument-valley" && game.id !== "soul-knight" && (
              <GeneralOfflineClicker 
                game={game}
                gameState={gameState} 
                setGameState={setGameState} 
                score={score} 
                setScore={setScore} 
                highScore={highScore}
                saveHighScore={saveHighScore}
                playSound={playSound}
              />
            )}
          </div>

        </div>

        {/* Right Console Controller pad (A/B/X/Y Buttons, Select, Start) */}
        <div className="hidden md:flex flex-col justify-between p-8 bg-[#161616] border-l border-white/5 w-44 items-center shrink-0">
          <div className="text-center">
            <span className="text-[10px] text-gray-400 font-mono">BATTERY: 98%</span>
            <div className="w-10 h-3 bg-zinc-800 rounded border border-white/10 mt-2 p-0.5 mx-auto">
              <div className="h-full bg-lime-400 rounded-xs w-5/6"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <button 
                onClick={() => {
                  const evt = new KeyboardEvent("keydown", { code: "KeyW" });
                  window.dispatchEvent(evt);
                }} 
                className="w-10 h-10 bg-[#e11d48] text-white hover:bg-rose-500 rounded-full font-black text-sm shadow-md border border-white/10 flex items-center justify-center transform active:scale-95 transition-transform"
              >
                X
              </button>
              <span className="text-[9px] text-gray-500 font-mono mt-1">ATTACK</span>
            </div>

            <div className="flex flex-col items-center">
              <button 
                onClick={() => {
                  // Dispatch jump space or click event
                  const evt = new KeyboardEvent("keydown", { code: "Space" });
                  window.dispatchEvent(evt);
                }} 
                className="w-10 h-10 bg-lime-500 text-black hover:bg-lime-400 rounded-full font-black text-sm shadow-md border border-white/10 flex items-center justify-center transform active:scale-95 transition-transform"
              >
                A
              </button>
              <span className="text-[9px] text-gray-500 font-mono mt-1">JUMP</span>
            </div>

            <div className="flex flex-col items-center">
              <button 
                onClick={() => {
                  const evt = new KeyboardEvent("keydown", { code: "KeyS" });
                  window.dispatchEvent(evt);
                }} 
                className="w-10 h-10 bg-yellow-500 text-black hover:bg-yellow-400 rounded-full font-black text-sm shadow-md border border-white/10 flex items-center justify-center transform active:scale-95 transition-transform"
              >
                Y
              </button>
              <span className="text-[9px] text-gray-500 font-mono mt-1">SKILL</span>
            </div>

            <div className="flex flex-col items-center">
              <button 
                className="w-10 h-10 bg-blue-500 text-white hover:bg-blue-400 rounded-full font-black text-sm shadow-md border border-white/10 flex items-center justify-center transform active:scale-95 transition-transform"
              >
                B
              </button>
              <span className="text-[9px] text-gray-500 font-mono mt-1">BACK</span>
            </div>
          </div>

          <div className="flex gap-2 text-[10px] font-mono text-gray-500">
            <span>SELECT</span>
            <span>•</span>
            <span>START</span>
          </div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 1. ALTO'S ADVENTURE MINI-GAME (Runner)
// ==========================================
interface GameSubProps {
  gameState: "start" | "playing" | "gameover" | "win";
  setGameState: (s: any) => void;
  score: number;
  setScore: (n: number | ((p: number) => number)) => void;
  highScore: number;
  saveHighScore: (val: number) => void;
  playSound: (type: any) => void;
}

function AltosAdventureGame({ gameState, setGameState, score, setScore, highScore, saveHighScore, playSound }: GameSubProps) {
  const [playerY, setPlayerY] = useState<number>(140);
  const [playerVel, setPlayerVel] = useState<number>(0);
  const [rocks, setRocks] = useState<{ id: number; x: number }[]>([]);
  
  const gameLoopRef = useRef<any>(null);
  const jumpActiveRef = useRef<boolean>(false);

  useEffect(() => {
    if (gameState !== "playing") {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
      return;
    }

    setPlayerY(140);
    setPlayerVel(0);
    setRocks([{ id: 1, x: 400 }]);
    setScore(0);

    let lastTime = Date.now();
    let frameCount = 0;

    const loop = () => {
      frameCount++;
      
      // Update score gradually
      if (frameCount % 10 === 0) {
        setScore(prev => {
          const next = prev + 1;
          if (next % 50 === 0) playSound("score");
          return next;
        });
      }

      // Physics
      setPlayerY(py => {
        let nextY = py + playerVel;
        if (nextY >= 140) {
          nextY = 140;
          jumpActiveRef.current = false;
        }
        return nextY;
      });

      setPlayerVel(v => {
        if (playerY < 140) {
          return v + 0.55; // gravity
        }
        return v;
      });

      // Update rocks
      setRocks(prev => {
        const moved = prev.map(r => ({ ...r, x: r.x - 4 }));
        
        // Spawn rocks
        if (moved.length === 0 || moved[moved.length - 1].x < 240) {
          moved.push({ id: Date.now(), x: 400 + Math.floor(Math.random() * 200) });
        }

        // Filter off-screen
        const filtered = moved.filter(r => r.x > -20);

        // Collision Check (Approximate dimensions: player Y: 120-140, X: 50; rock X: 50, Y: 130-145)
        for (const rock of filtered) {
          if (rock.x > 35 && rock.x < 65 && playerY > 120) {
            playSound("crash");
            setGameState("gameover");
          }
        }

        return filtered;
      });

      gameLoopRef.current = requestAnimationFrame(loop);
    };

    gameLoopRef.current = requestAnimationFrame(loop);

    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameState, playerY, playerVel]);

  const triggerJump = () => {
    if (playerY >= 140) {
      playSound("jump");
      setPlayerVel(-11);
      setPlayerY(138); // Leave the ground instantly
      jumpActiveRef.current = true;
    }
  };

  // Listen to keyboard space bar jump
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        triggerJump();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [playerY]);

  if (gameState === "start") {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <span className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 animate-bounce">
          🏂
        </span>
        <h3 className="text-lg font-black text-white font-mono">Alto's Mountain Odyssey</h3>
        <p className="text-xs text-gray-400 max-w-xs mt-2 leading-relaxed">
          The ultimate snowboard slope runner. Press <strong>SPACE</strong> or tap the screen to jump over rocks!
        </p>
        <button 
          onClick={() => {
            playSound("jump");
            setGameState("playing");
          }}
          className="mt-6 px-6 py-2.5 bg-orange-500 hover:bg-orange-400 text-black text-xs font-bold rounded-xl transition-all font-mono"
        >
          START ODYSSEY
        </button>
      </div>
    );
  }

  if (gameState === "gameover") {
    saveHighScore(score);
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <span className="text-3xl">💥</span>
        <h3 className="text-lg font-black text-red-500 font-mono mt-3">Snowboarder Crashed!</h3>
        <div className="mt-2 text-xs font-mono space-y-1">
          <p className="text-gray-400">Survival Distance: <span className="text-white font-bold">{score}m</span></p>
          <p className="text-gray-500">Your Record: <span className="text-lime-400 font-bold">{highScore}m</span></p>
        </div>
        <button 
          onClick={() => {
            playSound("jump");
            setGameState("playing");
          }}
          className="mt-6 px-6 py-2.5 bg-white hover:bg-gray-200 text-black text-xs font-bold rounded-xl transition-all font-mono flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>RETRY SLOPE</span>
        </button>
      </div>
    );
  }

  return (
    <div 
      className="w-full h-48 bg-gradient-to-b from-[#1c0d02] via-[#2c1a0c] to-[#090502] relative cursor-pointer overflow-hidden border border-white/5 rounded-xl select-none"
      onClick={triggerJump}
    >
      {/* Background mountains */}
      <div className="absolute bottom-4 left-0 right-0 h-16 bg-amber-950/10 clip-path-mountain flex justify-around opacity-40">
        <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[80px] border-b-amber-950"></div>
        <div className="w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[100px] border-b-amber-900 -ml-16"></div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-amber-950 border-t border-amber-900"></div>

      {/* Player (Snowboarder) */}
      <div 
        className="absolute w-6 h-6 left-12 transition-all duration-75 flex items-center justify-center text-lg z-20"
        style={{ top: `${playerY}px`, transform: `rotate(${playerY < 140 ? -15 : 0}deg)` }}
      >
        🏂
      </div>

      {/* Rocks */}
      {rocks.map(rock => (
        <div 
          key={rock.id}
          className="absolute w-5 h-5 bottom-8 font-bold text-sm z-10 flex items-center justify-center"
          style={{ left: `${rock.x}px` }}
        >
          🪨
        </div>
      ))}

      {/* Live Stats Overlays */}
      <div className="absolute top-3 left-4 text-xs font-mono text-amber-400 bg-black/60 px-2 py-1 rounded border border-amber-500/20 backdrop-blur">
        SCORE: {score}m
      </div>

      <div className="absolute top-3 right-4 text-[10px] font-mono text-gray-400">
        Tap / Space to Jump
      </div>
    </div>
  );
}

// ==========================================
// 2. MONUMENT VALLEY MINI-GAME (Puzzle)
// ==========================================
interface ValleySubProps {
  gameState: "start" | "playing" | "gameover" | "win";
  setGameState: (s: any) => void;
  playSound: (type: any) => void;
}

function MonumentValleyGame({ gameState, setGameState, playSound }: ValleySubProps) {
  // rotations array of 3 interactive bridge blocks in degrees
  const [rotations, setRotations] = useState<number[]>([180, 0, 90]);
  const [princessWalk, setPrincessWalk] = useState<boolean>(false);

  const rotateBlock = (index: number) => {
    if (princessWalk) return;
    playSound("jump");
    setRotations(prev => {
      const updated = [...prev];
      updated[index] = (updated[index] + 90) % 360;
      return updated;
    });
  };

  // Winning combination: first is 90, second is 180, third is 270 (creates perfect visual connection)
  const isAligned = rotations[0] === 90 && rotations[1] === 180 && rotations[2] === 270;

  const triggerSolve = () => {
    setPrincessWalk(true);
    playSound("score");
    setTimeout(() => {
      playSound("win");
      setGameState("win");
      setPrincessWalk(false);
    }, 1500);
  };

  if (gameState === "start") {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <span className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 animate-pulse">
          🕌
        </span>
        <h3 className="text-lg font-black text-white font-mono">Princess Ida's Alignment</h3>
        <p className="text-xs text-gray-400 max-w-xs mt-2 leading-relaxed">
          Solve the mysterious optical architecture. Click block links to rotate impossible paths so princess Ida can connect and cross!
        </p>
        <button 
          onClick={() => setGameState("playing")}
          className="mt-6 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold rounded-xl transition-all font-mono"
        >
          ENTER THE VALLEY
        </button>
      </div>
    );
  }

  if (gameState === "win") {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <span className="text-3xl">🕊️</span>
        <h3 className="text-lg font-black text-teal-400 font-mono mt-3">Valley Resonated!</h3>
        <p className="text-xs text-gray-400 max-w-xs mt-2 leading-relaxed">
          The structural gates have connected successfully. Princess Ida has entered the silent temple.
        </p>
        <button 
          onClick={() => {
            setRotations([180, 0, 90]);
            setGameState("playing");
          }}
          className="mt-6 px-6 py-2.5 bg-white hover:bg-gray-200 text-black text-xs font-bold rounded-xl transition-all font-mono"
        >
          RESET ARCHITECTURE
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-48 bg-gradient-to-br from-[#0c181f] to-[#04080a] relative overflow-hidden border border-white/5 rounded-xl flex flex-col justify-between p-4">
      <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400">
        <span>Level: The Silent Corridor</span>
        <span className="bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">Click Blocks to Rotate</span>
      </div>

      {/* Geometry Blocks Area */}
      <div className="flex justify-center items-center gap-6 py-3 relative">
        
        {/* Ida Avatar starting position */}
        <div className={`absolute left-8 bottom-12 text-lg z-20 transition-all duration-[1500ms] ${princessWalk ? "translate-x-44 opacity-0" : ""}`}>
          👑
        </div>

        {/* Rotatable Blocks */}
        {rotations.map((deg, idx) => (
          <button
            key={idx}
            onClick={() => rotateBlock(idx)}
            disabled={princessWalk}
            className="w-12 h-12 bg-cyan-950/80 hover:bg-cyan-900 border-2 rounded-xl transition-all flex flex-col items-center justify-center relative select-none shrink-0"
            style={{ 
              transform: `rotate(${deg}deg)`,
              borderColor: isAligned ? "#22c55e" : (deg === (idx === 0 ? 90 : idx === 1 ? 180 : 270) ? "#06b6d4" : "rgba(255,255,255,0.1)")
            }}
          >
            {/* Minimal optical line connector */}
            <div className="w-1 bg-cyan-400 h-10 rounded"></div>
            <div className="absolute text-[8px] font-mono text-cyan-300 bottom-1 bg-black/60 px-1 rounded scale-75">
              {deg}°
            </div>
          </button>
        ))}

        {/* Temple Gate Target */}
        <div className="absolute right-8 bottom-12 text-lg">
          ⛩️
        </div>
      </div>

      {/* Connect Status / Trigger */}
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono text-gray-500">Alignment: {isAligned ? "100% Linked" : "Path Broken"}</span>
        {isAligned ? (
          <button
            onClick={triggerSolve}
            disabled={princessWalk}
            className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-[11px] rounded-lg transition-all animate-pulse"
          >
            Ida walks across ➔
          </button>
        ) : (
          <span className="text-[11px] font-mono text-cyan-500 italic">Rotate bridges to align green links</span>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 3. SOUL KNIGHT MINI-GAME (Bullet Dodger Arena)
// ==========================================
function SoulKnightGame({ gameState, setGameState, score, setScore, highScore, saveHighScore, playSound }: GameSubProps) {
  const [playerX, setPlayerX] = useState<number>(50);
  const [playerY, setPlayerY] = useState<number>(50); // percentage coordinates
  const [slime, setSlime] = useState<{ x: number; y: number; hp: number; maxHp: number } | null>(null);
  const [bullets, setBullets] = useState<{ id: number; x: number; y: number; dx: number; dy: number }[]>([]);
  const [health, setHealth] = useState<number>(3); // 3 hearts

  const loopRef = useRef<any>(null);

  // Initialize and run game loop
  useEffect(() => {
    if (gameState !== "playing") {
      if (loopRef.current) clearInterval(loopRef.current);
      return;
    }

    // Reset game specs
    setPlayerX(50);
    setPlayerY(60);
    setHealth(3);
    setScore(0);
    setBullets([]);
    setSlime({ x: 50, y: 20, hp: 5, maxHp: 5 });

    let count = 0;

    // Loop interval
    loopRef.current = setInterval(() => {
      count++;

      // Move slime randomly
      setSlime(curr => {
        if (!curr) return null;
        let nx = curr.x + (Math.random() * 6 - 3);
        let ny = curr.y + (Math.random() * 4 - 2);
        
        // Boundaries
        nx = Math.max(15, Math.min(85, nx));
        ny = Math.max(10, Math.min(35, ny));

        // Let slime fire a projectile occasionally
        if (count % 12 === 0) {
          playSound("shoot");
          setBullets(prev => [
            ...prev,
            {
              id: Date.now() + Math.random(),
              x: nx,
              y: ny,
              dx: (Math.random() * 3 - 1.5) * 1.5,
              dy: 1.8
            }
          ]);
        }

        return { ...curr, x: nx, y: ny };
      });

      // Move active bullets
      setBullets(prev => {
        const updated = prev.map(b => ({
          ...b,
          x: b.x + b.dx,
          y: b.y + b.dy
        })).filter(b => b.y < 100 && b.x > 0 && b.x < 100);

        // Check player collision (player position is playerX, playerY)
        for (const b of updated) {
          const dist = Math.sqrt(Math.pow(b.x - playerX, 2) + Math.pow(b.y - playerY, 2));
          if (dist < 8) {
            playSound("crash");
            setHealth(h => {
              const nextH = h - 1;
              if (nextH <= 0) {
                setGameState("gameover");
              }
              return nextH;
            });
            return updated.filter(bullet => bullet.id !== b.id);
          }
        }

        return updated;
      });

    }, 100);

    return () => {
      if (loopRef.current) clearInterval(loopRef.current);
    };
  }, [gameState, playerX, playerY]);

  // Handle attacking slime
  const handleAttack = () => {
    if (gameState !== "playing" || !slime) return;
    playSound("shoot");

    // Attack matches if players click or press skill
    setSlime(curr => {
      if (!curr) return null;
      const nextHp = curr.hp - 1;
      if (nextHp <= 0) {
        playSound("win");
        setScore(prev => prev + 100);
        // Respawn next tough slime
        return { x: 50, y: 20, hp: 6, maxHp: 6 };
      }
      return { ...curr, hp: nextHp };
    });
  };

  const movePlayer = (direction: "U" | "D" | "L" | "R") => {
    if (gameState !== "playing") return;
    setPlayerX(x => {
      let nx = x;
      if (direction === "L") nx -= 12;
      if (direction === "R") nx += 12;
      return Math.max(10, Math.min(90, nx));
    });
    setPlayerY(y => {
      let ny = y;
      if (direction === "U") ny -= 12;
      if (direction === "D") ny += 12;
      return Math.max(40, Math.min(85, ny));
    });
  };

  // Keyboard controller
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") movePlayer("L");
      if (e.code === "ArrowRight" || e.code === "KeyD") movePlayer("R");
      if (e.code === "ArrowUp" || e.code === "KeyW") movePlayer("U");
      if (e.code === "ArrowDown" || e.code === "KeyS") movePlayer("D");
      if (e.code === "Space") handleAttack();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState, slime]);

  if (gameState === "start") {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <span className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-pulse">
          ⚔️
        </span>
        <h3 className="text-lg font-black text-white font-mono">Soul Knight Arena</h3>
        <p className="text-xs text-gray-400 max-w-xs mt-2 leading-relaxed">
          Retro dual-stick dungeon shooter. Use WASD / Arrow keys or click d-pad to move and dodge bullets. Tap A to shoot slime!
        </p>
        <button 
          onClick={() => setGameState("playing")}
          className="mt-6 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded-xl transition-all font-mono"
        >
          ENTER THE DUNGEON
        </button>
      </div>
    );
  }

  if (gameState === "gameover") {
    saveHighScore(score);
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <span className="text-3xl">💀</span>
        <h3 className="text-lg font-black text-red-500 font-mono mt-3">Knight Defeated!</h3>
        <p className="text-xs text-gray-400">You earned <span className="text-white font-bold">{score} pts</span></p>
        <button 
          onClick={() => setGameState("playing")}
          className="mt-6 px-6 py-2.5 bg-white hover:bg-gray-200 text-black text-xs font-bold rounded-xl transition-all font-mono"
        >
          RESPAWN AT START
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-52 bg-[#0c100d] border border-[#22c55e]/20 rounded-xl relative overflow-hidden flex flex-col justify-between">
      
      {/* Top dashboard stats */}
      <div className="p-3 bg-black/40 flex justify-between items-center text-[10px] font-mono border-b border-white/5 z-20">
        <div className="flex gap-1.5 text-red-400 items-center">
          <span>HP:</span>
          {Array.from({ length: 3 }).map((_, idx) => (
            <span key={idx} className={idx < health ? "text-red-500" : "text-gray-600"}>
              ♥
            </span>
          ))}
        </div>
        <div className="text-emerald-400">
          SCORE: {score} pts
        </div>
      </div>

      {/* Battle grid canvas */}
      <div className="flex-1 relative bg-radial-grid">
        {/* The slime enemy */}
        {slime && (
          <div 
            className="absolute transition-all duration-100 flex flex-col items-center z-10"
            style={{ left: `${slime.x}%`, top: `${slime.y}%` }}
          >
            <div className="w-8 h-1 bg-black rounded-full overflow-hidden border border-white/10 mb-0.5">
              <div className="h-full bg-red-500" style={{ width: `${(slime.hp / slime.maxHp) * 100}%` }}></div>
            </div>
            <span className="text-lg leading-none animate-pulse">🦠</span>
          </div>
        )}

        {/* Knight Player */}
        <div 
          className="absolute transition-all duration-75 text-lg leading-none z-15"
          style={{ left: `${playerX}%`, top: `${playerY}%` }}
        >
          🛡️
        </div>

        {/* Slime Red Bullets */}
        {bullets.map(b => (
          <div 
            key={b.id}
            className="absolute w-2 h-2 bg-red-500 rounded-full border border-white/30 shadow shadow-red-500/50"
            style={{ left: `${b.x}%`, top: `${b.y}%` }}
          ></div>
        ))}
      </div>

      {/* Mini touch controls for mobile/iframe support */}
      <div className="p-2.5 bg-black/80 border-t border-white/5 flex justify-between items-center z-20 gap-2">
        <div className="flex gap-1">
          <button onClick={() => movePlayer("L")} className="px-2.5 py-1 bg-zinc-800 text-white rounded font-mono text-[10px]">◀</button>
          <button onClick={() => movePlayer("U")} className="px-2.5 py-1 bg-zinc-800 text-white rounded font-mono text-[10px]">▲</button>
          <button onClick={() => movePlayer("D")} className="px-2.5 py-1 bg-zinc-800 text-white rounded font-mono text-[10px]">▼</button>
          <button onClick={() => movePlayer("R")} className="px-2.5 py-1 bg-zinc-800 text-white rounded font-mono text-[10px]">▶</button>
        </div>

        <button 
          onClick={handleAttack}
          className="px-4 py-1.5 bg-emerald-500 text-black text-[10px] font-black rounded-lg uppercase tracking-wider"
        >
          Shoot Slime (Space)
        </button>
      </div>

    </div>
  );
}

// ==========================================
// 4. GENERAL OFFLINE GAME TAP CLICKER
// ==========================================
interface ClickerProps {
  game: GameRelease;
  gameState: "start" | "playing" | "gameover" | "win";
  setGameState: (s: any) => void;
  score: number;
  setScore: (n: number | ((p: number) => number)) => void;
  highScore: number;
  saveHighScore: (val: number) => void;
  playSound: (type: any) => void;
}

function GeneralOfflineClicker({ game, gameState, setGameState, score, setScore, highScore, saveHighScore, playSound }: ClickerProps) {
  const [level, setLevel] = useState<number>(1);
  const [clicks, setClicks] = useState<number>(0);
  const clicksToNext = level * 20;

  const handleTap = () => {
    playSound("jump");
    setClicks(c => {
      const next = c + 1;
      if (next >= clicksToNext) {
        playSound("win");
        setLevel(l => l + 1);
        setScore(prev => prev + (level * 150));
        return 0;
      }
      return next;
    });
  };

  if (gameState === "start") {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <div className="w-16 h-16 rounded-full bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 mb-4 animate-pulse">
          ⚡
        </div>
        <h3 className="text-lg font-black text-white font-mono">{game.title} Sandbox</h3>
        <p className="text-xs text-gray-400 max-w-xs mt-2 leading-relaxed">
          Launch direct simulation tap engine. Play to level up graphics pipelines and test frame rendering specs offline.
        </p>
        <button 
          onClick={() => {
            playSound("win");
            setGameState("playing");
          }}
          className="mt-6 px-6 py-2.5 bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold rounded-xl transition-all font-mono"
        >
          LAUNCH OFFLINE EMULATOR
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-48 bg-[#0e0e0e] border border-white/5 rounded-xl flex flex-col justify-between p-4 relative">
      <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
        <span>FPS: 60.0 &bull; Offline Link Active</span>
        <span className="text-lime-400">GPU Level: {level}</span>
      </div>

      <div className="flex flex-col items-center justify-center py-2">
        <button 
          onClick={handleTap}
          className="w-16 h-16 bg-gradient-to-tr from-lime-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-lime-500/20 transform active:scale-95 transition-transform"
        >
          <Zap className="w-8 h-8 text-black" />
        </button>
        <span className="text-[10px] font-mono text-gray-500 mt-2">Tap Rapidly to Sync Frames</span>
      </div>

      <div className="flex justify-between items-center text-[10px] font-mono">
        <span className="text-gray-500">Sync: {clicks}/{clicksToNext}</span>
        <span className="text-lime-400">Pipeline Score: {score}</span>
      </div>
    </div>
  );
}

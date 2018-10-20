import { CrewProfile } from '../crew-profile/crew-profile.model';

export interface PlayerProfile {
  // Basic information
  name: String;
  gamertag: String;
  imageURL: String;
  nationality: String;
  crew: CrewProfile[];

  // Social media information
  facebookURL: String;
  twitterURL: String;
  youtubeURL: String;
  twitchURL: String;
  websiteURL: String;

  // Geography information
  country: String;
  region: String;
  city: String;

  // Competitive information
  competitiveGames: String[];
}

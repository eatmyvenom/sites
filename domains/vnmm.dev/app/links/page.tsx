import InfoCard from '#/ui/InfoCard';
import InfoContainer from '#/ui/InfoContainer';

export default function Page() {
  return (
    <>
      <InfoContainer rows={2} columns={3}>
        <InfoCard
          text="GitHub\n\neatmyvenom"
          destination="https://github.com/eatmyvenom"
          image="https://i.vnmm.dev/GitHub-Mark-Light-120px-plus.png"
        />
        <InfoCard
          text="Discord\n\nvnmm#6969"
          destination="https://discord.com/channels/@me"
          image="https://i.vnmm.dev/Discord-Logo-White.png"
        />
        <InfoCard
          text="NameMC\n\nvnmm"
          destination="https://mine.ly/vnmm"
          image="https://i.vnmm.dev/namemc.png"
        />

        <InfoCard
          text="Twitch\n\neatmyvenom"
          destination="https://www.twitch.tv/eatmyvenom"
          image="https://i.vnmm.dev/TwitchGlitchPurple.png"
        />
        <InfoCard
          text="Youtube\n\neatmy venom"
          destination="https://www.youtube.com/channel/UCBAb3u0IJU7bh5itiTZev_Q"
          image="https://i.vnmm.dev/youtube_social_circle_dark.png"
        />
        <InfoCard
          text="Laby\n\n vnmm"
          destination="https://laby.net/@vnmm"
          image="https://laby.net/images/logo.svg"
        />
      </InfoContainer>
    </>
  );
}

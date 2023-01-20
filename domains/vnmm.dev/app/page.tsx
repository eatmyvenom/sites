import '#/styles/page.css';
import localFont from '@next/font/local';
import InfoCard from '#/ui/InfoCard';

const pogfont = localFont({ src: '../public/pogfont.otf', weight: '300' });

export default function Page() {
  return (
    <>
      <h1 className={pogfont.className}>Venom</h1>
      <hr />
      <main>
        <InfoCard
          text="Find Me"
          destination="https://vnmm.dev/links.html"
          image="https://i.vnmm.dev/v.png"
        />
        <InfoCard
          text="GitHub"
          destination="https://github.com/eatmyvenom"
          image="https://i.vnmm.dev/GitHub-Mark-Light-120px-plus.png"
        />
      </main>

      <h4>About me</h4>
      <p>
        Yo! I am vnmm (or Jacob if you know me irl) a programmer, pro gamer,
        silly guy, geek, discord mod, and a hip-hop music enjoyer.
        <br />
        <br />
        I am a full time student, part time developer. If you want to see my
        socials then go to the &#34;Find Me&#34; link above.
        <br />
        <br />
        As for development projects, lately I am working on the{' '}
        <a href="https://statsify.net">Statsify</a> project and also this
        website.
        <br />
        <br />
        This site will mostly serve as a place to showcase my current and former
        projects at some point but for now I just host random things here. Feel
        free to poke around and ask about anything you see.
      </p>
    </>
  );
}

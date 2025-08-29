"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "funAndTrendy",
      colorTemplate: 1,
      textAnimation: "slide",
    }}>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="MoonMeme Logo"
        leftButtonText="Menu"
        rightButtonText="Buy MoonMeme"
        onLeftButtonClick={() => {}}
        onRightButtonClick={() => {}}
        className=""
        containerClassName=""
        logoClassName=""
        buttonClassName=""
      />
      <BillboardHero
        title="Welcome to MoonMeme"
        subtitle="The future of Memes on the Moon"
      />
      <SplitAbout
        description="MoonMeme is a community-driven meme coin that brings humor and fun to blockchain. Our mission is to create a playful meme economy inspired by the moon."
      />
      <HowToBuy3D
        title="How to Buy MoonMeme"
        steps={{
          title: "3 Easy Steps to Get Involved",
          steps: [{
            title: "Step 1",
            description: "Download a crypto wallet",
            image: "/images/placeholder1.avif",
            position: "left",
            isCenter: false
          }, {
            title: "Step 2",
            description: "Purchase Ethereum",
            image: "/images/placeholder2.avif",
            position: "center",
            isCenter: true
          }, {
            title: "Step 3",
            description: "Swap Ethereum for MoonMeme",
            image: "/images/placeholder3.avif",
            position: "right",
            isCenter: false
          }]
        }}
      />
      <NumberGridTokenomics
        title="Tokenomics"
        description="Our token distribution and roadmap to success"
        kpiItems={[
          { value: "1M", description: "Total Supply", icon: {} },
          { value: "50%", description: "Liquidity", icon: {} },
          { value: "20%", description: "Team", icon: {} },
          { value: "30%", description: "Community", icon: {} }
        ]}
      />
      <CentralFAQ
        items={[
          { title: "What is MoonMeme?", content: "MoonMeme is a fun and engaging meme coin that aims to uplift community spirit through humor." },
          { title: "How do I buy MoonMeme?", content: "You can buy it through popular exchanges or directly from our website." },
          { title: "Is there a roadmap?", content: "Yes, our roadmap outlines our plans for growth and community engagement." },
          { title: "How can I get involved?", content: "You can join our Discord and social media channels to stay connected!" }
        ]}
      />
      <FooterBase
        logoSrc="/images/logo.svg"
        logoAlt="MoonMeme Logo"
        columns={[
          {
            title: "About",
            items: [
              { label: "Home", onClick: () => {} },
              { label: "Services", onClick: () => {} },
              { label: "Contact", onClick: () => {} }
            ]
          },
          {
            title: "Resources",
            items: [
              { label: "Blog", onClick: () => {} },
              { label: "FAQ", onClick: () => {} }
            ]
          },
          {
            title: "Community",
            items: [
              { label: "Twitter", onClick: () => {} },
              { label: "Discord", onClick: () => {} }
            ]
          }
        ]}
        copyrightText="© 2023 MoonMeme"
        onPrivacyClick={() => {}}
      />
    </SiteThemeProvider>
  );
}